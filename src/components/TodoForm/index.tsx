import { Form, Space } from 'antd';
import { useAddTodo } from '../../hooks/use-add-todo/useAddTodo';
import { TodoButton, TodoInput } from '../../elements';
import { formValidateRules } from '../../utils/formValidateRules';
import { ITodoFormProps } from './interface';

export const TodoForm: React.FC<ITodoFormProps> = ({setTodos}) => {
  const { query, setQuery, handleSubmit } = useAddTodo({setTodos});
  const [form] = Form.useForm();

  return (
      <Form form={form} onFinish={() => handleSubmit(form)}>
        <Space style={{paddingTop: '25px'}}>
          <TodoInput value={query} onChange={setQuery} rules={formValidateRules} />
          <Form.Item>
            <TodoButton onClick={() => form.submit()} text={'Add'}/>
          </Form.Item>
        </Space>
      </Form>
  );
};
