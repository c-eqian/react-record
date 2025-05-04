import type { PickComponentProps } from '@/types/typeUtils';
import type { FormItemType } from './itemType';
import type { FormItemProps } from 'antd';
export type ComponentsTypeMap = {
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  input: PickComponentProps<(typeof import('antd/es'))['Input']>;
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  select: PickComponentProps<(typeof import('antd/es'))['Select']>;
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  form: PickComponentProps<(typeof import('antd/es'))['Form']>;
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  item: PickComponentProps<(typeof import('antd/es'))['Form']['Item']>;
};
export type GetComponentProps<P> = P extends keyof ComponentsTypeMap
  ? ComponentsTypeMap[P]
  : Record<string, any>;
export type FormItems = {
  type: FormItemType;
  compProps?: GetComponentProps<FormItems['type']>;
  formItemProps: FormItemProps;
};

export type FormType = {
  /**
   * 表单配置项
   * @default []
   */
  items: FormItems[];
  /**
   * 搜索模式
   * @default false
   */
  searchMode?: boolean;
  /**
   * 列数
   * @default 3
   */
  columns?: number;
  /**
   * 行数
   * @default 1
   */
  rows?: number;
} & GetComponentProps<'form'>;
