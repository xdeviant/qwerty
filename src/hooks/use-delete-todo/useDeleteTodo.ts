import { useMutation } from 'react-query';
import { deleteTodo } from '../useApi';
import { IDispatchTodoSetTodos } from '../../interfaces/global';

export const useDeleteTodo = ({todo, setTodos}: IDispatchTodoSetTodos) => {
  const { id } = todo;

  const { mutate } = useMutation<void, unknown, { id: number }>(async (data) => {
    await deleteTodo(data.id);
  }, {
    onSuccess: () => {
      setTodos((prevTodos) => prevTodos.filter((item) => item.id !== id));
    },
  });

  const handleDelete = () => {
    mutate({ id: id as number });
  };

  return { handleDelete };
};
