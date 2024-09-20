import React from 'react';

export type ITitle = {
  title?: string;
};

export type IBody = {
  text?: string;
};

export enum EComponents {
  TITLE = 'TITLE',
  BODY = 'BODY',
}

export const EComponentNameMap: Record<EComponents, string> = {
  [EComponents.TITLE]: 'Title',
  [EComponents.BODY]: 'Body',
};

export type IComponentItem = {
  type: EComponents;
  key: string;
};

export type IComponentType = React.FC<{ name: string }>;

export type IComponents = null | ITitle;
