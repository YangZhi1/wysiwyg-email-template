import { EComponents, type IFormProps } from 'src/types/components';
import Edit from './SingleForm';
import View from './View';
import './index.css';

export const Editor = () => {
  const formProps: IFormProps = {
    formLayout: {
      name: {
        label: 'Name',
        type: EComponents.TITLE,
      },
      bodyText: {
        label: 'Body Text',
        type: EComponents.BODY,
      },
      number: {
        label: 'Number',
        type: EComponents.NUMBER,
      },
    },
    initialValues: {
      name: 'Title',
      bodyText: 'Body Text',
      number: 101010,
    },
  };

  return (
    <div className="editPage">
      <Edit {...formProps} />
      <View />
    </div>
  );
};
