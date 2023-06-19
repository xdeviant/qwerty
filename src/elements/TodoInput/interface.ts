import { Rule } from 'antd/lib/form';

export interface ITodoInputProps {
  value: string;
  onChange: (value: string) => void;
  rules?: Rule[];
}