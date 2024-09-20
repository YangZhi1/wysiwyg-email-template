import { Form, FormInstance } from 'antd';
import './index.css';
import { editorStore } from 'src/store/editorStore';
import AddComponentButton from './AddComponentButton';
import { componentsStore } from 'src/store/componentsStore';
import { observer } from 'mobx-react';
import { MinusCircleOutlined } from '@ant-design/icons';
import React from 'react';

const Edit = () => {
  const formRef = React.useRef<FormInstance>(null);

  return (
    <div className="editorContainer">
      <h1>Edit</h1>
      <Form
        ref={formRef}
        onValuesChange={(values) => {
          editorStore.addFormValues(values);
        }}
      >
        {componentsStore.editComponents?.map((Component, index) => (
          <div className="componentContainer">
            {Component.comp}
            <MinusCircleOutlined
              className="removeIcon"
              onClick={() => {
                formRef.current?.setFieldValue(Component.key, undefined);
                componentsStore.removeComponents(Component.key, index);
              }}
            />
          </div>
        ))}
      </Form>
      <AddComponentButton />
    </div>
  );
};

export default observer(Edit);
