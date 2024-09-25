import { IComponentProps } from '@src/types/components';
import { Form, InputNumber as AntNumber, InputNumberProps } from 'antd';

const InputNumber = (inputNumberProps: IComponentProps<InputNumberProps>) => {
  const { label, name, props } = inputNumberProps;

  return (
    <Form.Item label={label} name={name}>
      <AntNumber {...props} />
    </Form.Item>
  );
};

export default InputNumber;
