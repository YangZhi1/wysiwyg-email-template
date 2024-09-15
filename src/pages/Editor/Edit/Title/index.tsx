import { Form, Input } from 'antd';

const Title = ({ name }: { name: string }) => {
  return (
    <Form.Item label="Title" name={name}>
      <Input />
    </Form.Item>
  );
};

export default Title;
