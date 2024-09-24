import { IComponentProps } from '@src/types/components';
import { Form, Input as AntInput } from 'antd';

const Input = ({ name, label }: IComponentProps) => {
  return (
    <Form.Item label={label} name={name}>
      <AntInput />
    </Form.Item>
  );
};

export default Input;
