import { action, makeObservable, observable } from 'mobx';

class EditorStore {
  formValues: any;

  constructor() {
    makeObservable(this, {
      formValues: observable,
      addFormValues: action,
    });
  }

  addFormValues = (formValues: any) => {
    this.formValues = { ...this.formValues, ...formValues };
  };
}

export const editorStore = new EditorStore();
