import { action, makeObservable, observable } from 'mobx';

class EditorStore {
  formValues: any;

  constructor() {
    makeObservable(this, {
      formValues: observable,
      addFormValues: action,
      removeFormValues: action,
    });
  }

  addFormValues = (formValues: any) => {
    this.formValues = { ...this.formValues, ...formValues };
  };

  removeFormValues = (key: string) => {
    if (this.formValues?.[key]) {
      this.formValues[key] = undefined;
    }
  };
}

export const editorStore = new EditorStore();
