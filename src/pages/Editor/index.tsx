import { EComponents, type IFormProps } from 'src/types/components';
import Edit from './SingleForm';
import View from './View';
import './index.css';

export const Editor = () => {
  const formProps: IFormProps<any> = {
    formLayout: {
      name: {
        label: 'Name',
        type: EComponents.INPUT,
        props: {
          placeholder: 'Enter name',
          showCount: true,
          maxLength: 100,
        },
      },
      bodyText: {
        label: 'Body Text',
        type: EComponents.INPUT,
      },
      number: {
        label: 'Number',
        type: EComponents.NUMBER,
      },
    },
    initialValues: {
      // name: 'Name',
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
