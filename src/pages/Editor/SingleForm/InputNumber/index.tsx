import { IComponentProps } from '@src/types/components';
import { Form, InputNumber as AntNumber } from 'antd';

const InputNumber = ({ name, label }: IComponentProps) => {
  return (
    <Form.Item label={label} name={name}>
      <AntNumber />
    </Form.Item>
  );
};

export default InputNumber;
