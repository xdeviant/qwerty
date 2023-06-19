import { List } from 'antd';
import { TodoItem } from '../TodoItem';
import { ITodoListProps } from './interface';

export const TodoList: React.FC<ITodoListProps> = ({todos, setTodos}: any) => {
  return (
      <List
        dataSource={todos}
        renderItem={(todo: any) => (
          <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
      )}/>
  );
};
