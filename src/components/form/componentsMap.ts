import { Input, Select } from 'antd';
import type { FormItemType } from './types/itemType';
import type { ElementType } from 'react';
export * from './types/itemType';
const COMPONENTS_MAP = new Map<FormItemType, ElementType>();
COMPONENTS_MAP.set('input', Input);
COMPONENTS_MAP.set('select', Select);
export { COMPONENTS_MAP };
