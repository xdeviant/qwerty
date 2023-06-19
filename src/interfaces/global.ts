export interface ITodo {
  id?: number;
  title?: string;
  completed?: boolean;
}

export interface IDispatchSetTodos {
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

export interface IDispatchTodoSetTodos {
  todo: ITodo;
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

export enum FilterType {
  All = 'all',
  Completed = 'completed',
  Current = 'current',
}