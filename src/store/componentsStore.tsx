import { action, makeObservable, observable } from 'mobx';
import {
  EComponents,
  IComponentItem,
  IComponentType,
  IFormProps,
} from '../types/components';
import { editorStore } from './editorStore';
import { EditTitle, EditBody } from 'src/pages/Editor/SingleForm/exports';
import { ViewBody, ViewTitle } from 'src/pages/Editor/View';
import { v4 as uuidv4 } from 'uuid';
import React from 'react';

class ComponentsStore {
  components: IComponentItem[] = [];

  editComponentMapping: Record<EComponents, IComponentType> = {
    [EComponents.TITLE]: EditTitle,
    [EComponents.BODY]: EditBody,
  };

  viewComponentMapping: Record<EComponents, React.FC<{ value: any }>> = {
    [EComponents.TITLE]: ViewTitle,
    [EComponents.BODY]: ViewBody,
  };

  constructor() {
    makeObservable(this, {
      components: observable,

      // @to be removed
      addComponents: action,
      removeComponents: action,
    });
  }

  addComponents = (component: EComponents) => {
    this.components.push({ type: component, key: uuidv4() });
  };

  removeComponents = (key: string, index: number) => {
    editorStore.removeFormValues(`${this.components[index]}-${index}`);
    this.components.splice(index, 1);
  };

  getComponentsByFormLayout(
    layout?: IFormProps['formLayout']
  ): React.ReactNode[] {
    if (!layout) return [undefined];
    return Object.keys(layout).map((key) => {
      const current = layout[key];
      const Component = this.editComponentMapping[current.type];
      return (
        <Component
          key={key}
          name={key}
          label={current.label}
          type={current.type}
        />
      );
    });
  }

  get viewComponents() {
    return this.components.map((component, index) => {
      const Component = this.viewComponentMapping[component.type];
      const value = editorStore.formValues?.[component.key];
      return <Component key={index} value={value} />;
    });
  }
}

export const componentsStore = new ComponentsStore();
