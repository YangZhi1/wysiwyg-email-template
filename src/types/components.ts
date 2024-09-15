import React from 'react';

export type ITitle = {
  title?: string;
};

export enum EComponents {
  TITLE = 'TITLE',
}

export type IComponentType = React.FC<{ name: string }>;

export type IComponents = null | ITitle;
