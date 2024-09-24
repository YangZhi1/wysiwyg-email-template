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
    },
    initialValues: {
      name: 'Title',
      bodyText: 'Body Text',
    },
  };

  return (
    <div className="editPage">
      <Edit {...formProps} />
      <View />
    </div>
  );
};
