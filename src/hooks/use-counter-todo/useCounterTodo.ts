import { ITodo } from "../../interfaces/global";

export const useCounterTodo = (todos: ITodo[]) => {
  const trueCount = todos.reduce((count, todo) => {
    return count + (todo.completed ? 1 : 0);
  }, 0);

  const falseCount = todos.length - trueCount;

  return { trueCount, falseCount };
};