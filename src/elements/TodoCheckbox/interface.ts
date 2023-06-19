export interface ITodoCheckboxProps {
  todoId: number,
  isCompleted: boolean;
  setTodos: React.Dispatch<React.SetStateAction<any[]>>;
}