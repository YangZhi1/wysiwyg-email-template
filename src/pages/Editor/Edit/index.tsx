import { Form } from 'antd';
import './index.css';
import { editorStore } from '../../../store/editorStore';
import AddComponentButton from './AddComponentButton';
import { componentsStore } from '../../../store/componentsStore';
import { observer } from 'mobx-react';

const Edit = () => {
  return (
    <div className="editorContainer">
      <h1>Edit</h1>
      <Form
        onValuesChange={(values) => {
          editorStore.addFormValues(values);
        }}
      >
        {componentsStore.editComponents?.map((Component) => Component)}
      </Form>
      <AddComponentButton />
    </div>
  );
};

export default observer(Edit);
