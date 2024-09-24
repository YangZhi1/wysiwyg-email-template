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
  NUMBER = 'NUMBER',
}

export const EComponentNameMap: Record<EComponents, string> = {
  [EComponents.TITLE]: 'Title',
  [EComponents.BODY]: 'Body',
  [EComponents.NUMBER]: 'Number',
};

export type IComponentItem = {
  type: EComponents;
  key: string;
};

export type IComponentProps = {
  name: string;
  label?: string;
  type: EComponents;
};

export type IFormProps = {
  formLayout?: Record<string, Omit<IComponentProps, 'name'>>;
  initialValues?: Record<string, any>;
};

export type IComponentType = React.FC<IComponentProps>;

export type IComponents = null | ITitle;
