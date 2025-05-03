import type { PickComponentProps } from '@/types/typeUtils';
import type { FormItemType } from './itemType';

export type ComponentsTypeMap = {
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  input: PickComponentProps<(typeof import('antd/es'))['Input']>;
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  select: PickComponentProps<(typeof import('antd/es'))['Select']>;
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  form: PickComponentProps<(typeof import('antd/es'))['Form']>;
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  'form-item': PickComponentProps<(typeof import('antd/es'))['Form']['Item']>;
};
export type GetComponentProps<P> = P extends keyof ComponentsTypeMap
  ? ComponentsTypeMap[P]
  : Record<string, any>;
export type FormItems = {
  type: FormItemType;
  compProps?: GetComponentProps<FormItems['type']>;
  formItemProps?: GetComponentProps<'form-item'>;
};

export type FormType = {
  /**
   * 表单配置项
   * @default []
   */
  items: FormItems[];
} & GetComponentProps<'form'>;
