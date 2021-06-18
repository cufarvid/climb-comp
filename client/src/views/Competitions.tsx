import React, { FC, useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { Empty, message, Row, Select, Spin } from 'antd';

import { CompetitionCard, PageSection } from '../components';
import { Query, Season } from '../types/__generated__';
import { LIST_SEASONS_COMPS } from '../apollo/queries';

const Competitions: FC = () => {
  const [year, setYear] = useState<number | undefined>();
  const [seasons, setSeasons] = useState<Season[]>();
  const [filtered, setFiltered] = useState<Season[]>();

  const { loading } = useQuery<Query>(LIST_SEASONS_COMPS, {
    onCompleted: ({ seasons }) => {
      if (seasons) {
        setSeasons(seasons);
        setFiltered(seasons);
      }
    },
    onError: () => message.error('Error fetching competitions'),
  });

  useEffect(() => {
    if (!year) {
      setFiltered(seasons);
      return;
    }
    // Filter by year
    const yearly = seasons?.filter((season) => season.year === year);
    setFiltered(yearly);
  }, [year]);

  const title = year ? `Seasons - (${year})` : 'All seasons';

  if (loading) return <Spin />;

  return (
    <div>
      <PageSection title="Competitions">
        <Select
          placeholder="Year"
          onChange={(value) => setYear(value ? +value : undefined)}
        >
          <Select.Option key={0} value="All">
            All
          </Select.Option>
          {seasons?.map((season) => (
            <Select.Option key={season.year} value={season.year}>
              {season.year}
            </Select.Option>
          ))}
        </Select>
      </PageSection>
      <PageSection title={title}>
        <div>
          {filtered ? (
            filtered.map((season) => {
              return (
                <div key={season.year}>
                  <h2>{season.name}</h2>
                  <Row>
                    {season.competitions.length ? (
                      season.competitions.map((comp, index) => (
                        <CompetitionCard key={index} competition={comp} />
                      ))
                    ) : (
                      <Empty />
                    )}
                  </Row>
                  <hr />
                </div>
              );
            })
          ) : (
            <Empty />
          )}
        </div>
      </PageSection>
    </div>
  );
};

export default Competitions;
