import { Form, Input } from 'antd';
import { EComponentNameMap } from 'src/types/components';

const Body = ({ name }: { name: string }) => {
  return (
    <Form.Item label={EComponentNameMap.BODY} name={name}>
      <Input />
    </Form.Item>
  );
};

export default Body;
