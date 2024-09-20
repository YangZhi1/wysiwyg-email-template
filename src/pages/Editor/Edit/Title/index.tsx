import { Form, Input } from 'antd';
import { EComponentNameMap } from 'src/types/components';

const Title = ({ name }: { name: string }) => {
  return (
    <Form.Item label={EComponentNameMap.TITLE} name={name}>
      <Input />
    </Form.Item>
  );
};

export default Title;
