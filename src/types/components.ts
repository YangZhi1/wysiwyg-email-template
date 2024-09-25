import { InputNumberProps, InputProps } from 'antd';
import React from 'react';

export type ITitle = {
  title?: string;
};

export type IBody = {
  text?: string;
};

export enum EComponents {
  INPUT = 'INPUT',
  NUMBER = 'NUMBER',
}

export const EComponentNameMap: Record<EComponents, string> = {
  [EComponents.INPUT]: 'Input',
  [EComponents.NUMBER]: 'Number',
};

export type IComponentItem = {
  type: EComponents;
  key: string;
};

export type IProps = InputProps | InputNumberProps;

export type IComponentProps<T extends IProps> = {
  name: string;
  label?: string;
  type: EComponents;
  props?: T;
};

export type IFormProps<T extends IProps> = {
  formLayout?: Record<string, Omit<IComponentProps<T>, 'name'>>;
  initialValues?: Record<string, any>;
};

export type IComponentType<T extends IProps> = React.FC<IComponentProps<T>>;

export type IComponents = null | ITitle;
