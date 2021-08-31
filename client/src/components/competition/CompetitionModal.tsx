import React, { FC, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { DatePicker, Form, Input, message, Modal, Select } from 'antd';

import {
  Competition,
  Mutation,
  MutationCreateCompetitionArgs,
  MutationUpdateCompetitionArgs,
} from '../../types/__generated__';
import { COMPETITION_ADD, COMPETITION_UPDATE } from '../../apollo/mutations';
import { CompetitionType, ModalType } from '../../types';
import { CompetitionRow } from '../../utils';
import { useCountries, useRegions } from '../../hooks';
import { FORMAT } from '../../constants';

interface Props {
  visible: boolean;
  setVisible: (value: boolean) => void;
  type: ModalType;
  competition?: CompetitionRow;
}

const CompetitionModal: FC<Props> = ({
  visible,
  setVisible,
  type,
  competition,
}: Props) => {
  /**
   * Add user mutation
   */
  const [addCompetition] = useMutation<Mutation, MutationCreateCompetitionArgs>(
    COMPETITION_ADD,
    {
      onCompleted: ({ createCompetition }) => {
        if (createCompetition) {
          setVisible(false);
          void message.success('Competition successfully added');
        }
      },
      onError: () => message.error('Error adding Competition'),
    },
  );

  /**
   * Edit user mutation
   */
  const [editCompetition] = useMutation<
    Mutation,
    MutationUpdateCompetitionArgs
  >(COMPETITION_UPDATE, {
    onCompleted: ({ updateCompetition }) => {
      if (updateCompetition) {
        setVisible(false);
        void message.success('Competition successfully updated');
      }
    },
    onError: () => message.error('Error updating Competition'),
  });

  const { countries } = useCountries();
  const { regions } = useRegions();

  /**
   * Form object
   */
  const [form] = Form.useForm();

  const onOk = async () => {
    const {
      name,
      description,
      startDate,
      endDate,
      address,
      compTypeId,
      regionId,
      countryId,
    }: Competition = await form.validateFields();

    form.resetFields();

    switch (type) {
      case ModalType.ADD:
        await addCompetition({
          variables: {
            data: {
              name: name,
              description: description,
              startDate: startDate,
              endDate: endDate,
              address: address,
              compType: { connect: { id: compTypeId } },
              region: { connect: { id: regionId } },
              country: { connect: { id: countryId } },
              club: { connect: { id: 1 } },
              season: { connect: { id: 1 } },
            },
          },
        });
        break;
      case ModalType.EDIT:
        if (!competition) return;

        await editCompetition({
          variables: {
            where: {
              id: competition.id,
            },
            data: {
              name: { set: name },
              description: { set: description },
              startDate: { set: startDate },
              endDate: { set: endDate },
              address: { set: address },
              compType: { connect: { id: compTypeId } },
              region: { connect: { id: regionId } },
              country: { connect: { id: countryId } },
              club: { connect: { id: 1 } },
              season: { connect: { id: 1 } },
            },
          },
        });
        break;
    }
  };

  const onCancel = (): void => {
    setVisible(false);
    form.resetFields();
  };

  useEffect(() => {
    // Update form fields after competition change
    form.setFields([
      { name: 'name', value: competition?.name },
      { name: 'description', value: competition?.description },
      { name: 'startDate', value: competition?.startDate },
      { name: 'endDate', value: competition?.endDate },
      { name: 'address', value: competition?.address },
      { name: 'compTypeId', value: competition?.compType.id },
      { name: 'regionId', value: competition?.region?.id },
      { name: 'countryId', value: competition?.country?.id },
    ]);
  }, [competition]);

  const title = `${type} competition`;

  return (
    <Modal title={title} visible={visible} onCancel={onCancel} onOk={onOk}>
      <Form form={form}>
        <Form.Item
          label="Name"
          name="name"
          rules={[
            { required: true, message: 'Please input competition name!' },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[
            {
              required: true,
              message: 'Please input competition description!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Start date"
          name="startDate"
          rules={[{ required: true, message: 'Please input start date!' }]}
        >
          <DatePicker showTime format={FORMAT.DATE_TIME} />
        </Form.Item>
        <Form.Item
          label="End date"
          name="endDate"
          rules={[{ required: true, message: 'Please input end date!' }]}
        >
          <DatePicker showTime format={FORMAT.DATE_TIME} />
        </Form.Item>
        <Form.Item
          label="Address"
          name="address"
          rules={[
            {
              required: true,
              message: 'Please input an address!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Competition type"
          name="compTypeId"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select>
            {Object.values(CompetitionType).map((type, index) => (
              <Select.Option key={index} value={index}>
                {type}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="Region"
          name="regionId"
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Select>
            {regions?.map(({ id, name }) => (
              <Select.Option key={id} value={id}>
                {name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="Country"
          name="countryId"
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Select>
            {countries?.map(({ id, name }) => (
              <Select.Option key={id} value={id}>
                {name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CompetitionModal;
