import { ITodo } from "../../interfaces/global";

export interface ITodoItemProps {
  todo: {
    id: number;
    title: string;
    completed: boolean;
  };
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}
