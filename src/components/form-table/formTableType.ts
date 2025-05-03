import type { ReactElement } from 'react';
export type FormTableType = {
  header?: ReactElement;
  footer?: ReactElement;
  children?: ReactElement;
  /**
   * 分页总数
   */
  paginaTotal?: number;
  /**
   * 分页改变
   * @param page 当前分页
   * @param pageSize 页码
   */
  onPageChange?: (page: number, pageSize: number) => void;
};
