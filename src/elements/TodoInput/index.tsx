import { Form, Input } from 'antd';
import { MAX_LENGTH } from '../../constants/_validate';
import { ITodoInputProps } from './interface';

export const TodoInput: React.FC<ITodoInputProps> = ({ value, onChange, rules }) => (
  <Form.Item
    name="todoTitle"
    label="Add todo:"
    rules={[
      { 
        ...rules,
        max: MAX_LENGTH, 
        message: `Длина больше ${MAX_LENGTH} символов`,
      }
    ]}
    >
    <Input name="todoTitle" value={value} onChange={(e) => onChange(e.target.value)} />
  </Form.Item>
);