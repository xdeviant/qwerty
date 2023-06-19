import { useMemo } from 'react';
import { FilterType, ITodo } from '../../interfaces/global';

export const useFilterTodo = (todos: ITodo[], filter: FilterType) => {
  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      if (filter === FilterType.All) {
        return true;
      } else if (filter === FilterType.Completed) {
        return todo.completed;
      } else if (filter === FilterType.Current) {
        return !todo.completed;
      }
      return true;
    });
  }, [todos, filter]);

  return filteredTodos;
};