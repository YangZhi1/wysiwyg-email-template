import { action, computed, makeObservable, observable } from 'mobx';
import { EComponents, IComponentType } from '../types/components';
import EditTitle from '../pages/Editor/Edit/Title';
import ViewTitle from '../pages/Editor/View/Title';
import { editorStore } from './editorStore';

class ComponentsStore {
  components: EComponents[] = [];

  editComponentMapping: Record<EComponents, IComponentType> = {
    [EComponents.TITLE]: EditTitle,
  };

  viewComponentMapping: Record<EComponents, React.FC<{ value: any }>> = {
    [EComponents.TITLE]: ViewTitle,
  };

  constructor() {
    makeObservable(this, {
      components: observable,
      setComponents: action,
      addComponents: action,
      editComponents: computed,
    });
  }

  setComponents = (components: EComponents[]) => {
    this.components = components;
  };

  addComponents = (component: EComponents) => {
    this.components.push(component);
  };

  get editComponents() {
    return this.components.map((component, index) => {
      const Component = this.editComponentMapping[component];
      return <Component key={index} name={`${component}-${index}`} />;
    });
  }

  get viewComponents() {
    return this.components.map((component, index) => {
      const Component = this.viewComponentMapping[component];
      const name = `${component}-${index}`;
      const value = editorStore.formValues?.[name];
      return <Component key={index} value={value} />;
    });
  }
}

export const componentsStore = new ComponentsStore();
