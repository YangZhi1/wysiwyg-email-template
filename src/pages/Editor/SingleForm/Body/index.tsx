import { IComponentProps } from '@src/types/components';
import { Form, Input } from 'antd';

const Body = ({ name, label }: IComponentProps) => {
  return (
    <Form.Item label={label} name={name}>
      <Input />
    </Form.Item>
  );
};

export default Body;
