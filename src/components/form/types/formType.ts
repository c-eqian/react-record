import type { PickComponentProps } from '@/types/typeUtils.ts';
import type { FormItemType } from './itemType';

export type ComponentsTypeMap = {
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  input: PickComponentProps<(typeof import('antd/es'))['Input']>;
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  select: PickComponentProps<(typeof import('antd/es'))['Select']>;
};
export type GetComponentProps<P> = P extends keyof ComponentsTypeMap
  ? ComponentsTypeMap[P]
  : Record<string, any>;
export type FormType = {
  type: FormItemType;
  compProps?: GetComponentProps<FormType['type']>;
};

export type FormItems = {
  /**
   * 表单配置项
   * @default []
   */
  items: FormType[];
};
