import { IDispatchSetTodos, ITodo } from "../../interfaces/global";

export interface ITodoFormProps extends IDispatchSetTodos {
  todos?: ITodo[];
}