import { action, computed, makeObservable, observable } from 'mobx';
import {
  EComponents,
  IComponentItem,
  IComponentType,
} from '../types/components';
import { editorStore } from './editorStore';
import { EditTitle, EditBody } from '../pages/Editor/Edit/exports';
import { ViewBody, ViewTitle } from '../pages/Editor/View';
import { v4 as uuidv4 } from 'uuid';

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

      addComponents: action,
      removeComponents: action,

      editComponents: computed,
    });
  }

  addComponents = (component: EComponents) => {
    this.components.push({ type: component, key: uuidv4() });
  };

  removeComponents = (key: string, index: number) => {
    editorStore.removeFormValues(`${this.components[index]}-${index}`);
    this.components.splice(index, 1);
  };

  get editComponents() {
    return this.components.map((component) => {
      const Component = this.editComponentMapping[component.type];
      return {
        key: component.key,
        comp: <Component key={component.key} name={component.key} />,
      };
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
