import type { ComponentProps, ElementType } from 'react';

export type PickComponentProps<T extends ElementType> = T extends ElementType
  ? ComponentProps<T>
  : unknown;
