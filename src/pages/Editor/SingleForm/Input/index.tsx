import { IComponentProps } from '@src/types/components';
import { Form, Input as AntInput, InputProps } from 'antd';

const Input = (inputProps: IComponentProps<InputProps>) => {
  const { label, name, props } = inputProps;

  return (
    <Form.Item label={label} name={name}>
      <AntInput {...props} />
    </Form.Item>
  );
};

export default Input;
