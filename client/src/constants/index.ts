import { TablePaginationConfig } from 'antd';

export { ROUTE } from './Route';
export { COLOR } from './Color';
export { HEADER_HEIGHT, FOOTER_HEIGHT } from './Layout';
export { MESSAGE } from './Message';
export { REGEXP } from './RegExp';
export { RESULT_COLUMNS } from './Result';

/**
 * Date & time formats
 */
export const FORMAT = {
  DATE: 'DD.MM.YYYY',
  DATE_TIME: 'DD.MM.YYYY, HH:mm',
};

/**
 * Dashboard pagination
 */
export const TABLE_PAGINATION_CONFIG: TablePaginationConfig = {
  defaultPageSize: 5,
  showSizeChanger: true,
  pageSizeOptions: ['5', '10', '50', '100'],
};
