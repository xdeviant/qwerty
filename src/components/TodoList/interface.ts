import { ITodo } from "../../interfaces/global";
import { Dispatch, SetStateAction } from 'react';

export interface ITodoListProps {
  todos: ITodo[];
  setTodos: Dispatch<SetStateAction<ITodo[]>>;
}