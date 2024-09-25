import { Form, FormInstance } from 'antd';
import './index.css';
import { editorStore } from 'src/store/editorStore';
import { componentsStore } from 'src/store/componentsStore';
import { observer } from 'mobx-react';
import React from 'react';
import { IFormProps } from '@src/types/components';

const Edit = (props: IFormProps<any>) => {
  const formRef = React.useRef<FormInstance>(null);
  const formLayout = props?.formLayout;

  return (
    <div className="editorContainer">
      <h1>Edit</h1>
      <Form
        ref={formRef}
        onValuesChange={(values) => {
          editorStore.addFormValues(values);
        }}
        initialValues={props?.initialValues}
      >
        {componentsStore.getComponentsByFormLayout(formLayout)}
      </Form>
    </div>
  );
};

export default observer(Edit);
