import { FormInstance } from 'antd/lib/form';

export interface IAddTodoHookResult {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (form: FormInstance<any>) => void;
}