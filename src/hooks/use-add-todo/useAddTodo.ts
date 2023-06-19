import { useState, useCallback } from 'react';
import { useMutation, MutationOptions } from 'react-query';
import { addTodo } from '../useApi';
import { ITodo } from '../../interfaces/global';
import { MAX_LENGTH } from '../../constants/_validate';
import { FormInstance } from 'antd/lib/form';
import { IAddTodoHookResult } from './interface';
import { IDispatchSetTodos } from '../../interfaces/global';


export const useAddTodo = ({ setTodos }: IDispatchSetTodos): IAddTodoHookResult => {
  const { mutate } = useMutation<ITodo, any, any>(addTodo);
  const [query, setQuery] = useState('');

  const handleSubmit = useCallback((form: FormInstance<any>): void => {
    form.validateFields().then(() => {
      if (query && query.length <= MAX_LENGTH) {
        const newTodo: ITodo = {
          id: Date.now(),
          title: query,
          completed: false,
        };
  
        const options: MutationOptions<ITodo, any, ITodo> = {
          onSuccess: (data) => {
            const newData = { ...data, id: Date.now() };
            setTodos((prev) => [...prev, newData]);
            setQuery('')
            form.resetFields();
          },
        };
  
        mutate(newTodo, options);
      }
    });
  }, [query, setTodos, mutate]);

  return { query, setQuery, handleSubmit };
};
