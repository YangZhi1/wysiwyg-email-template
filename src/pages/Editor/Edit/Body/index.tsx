import { Form, Input } from 'antd';

const Body = ({ name }: { name: string }) => {
  return (
    <Form.Item label="Body" name={name}>
      <Input />
    </Form.Item>
  );
};

export default Body;
