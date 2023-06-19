import { useState, useEffect, useMemo } from 'react';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { useMutation } from 'react-query';
import { ITodoCheckboxProps } from './interface';
import { updateTodoStatus } from '../../hooks/useApi';

export const TodoCheckbox: React.FC<ITodoCheckboxProps> = ({ isCompleted, todoId, setTodos }) => {
  const [checked, setChecked] = useState(isCompleted);

  const { mutate } = useMutation(async () => {
    await updateTodoStatus(todoId, checked);
  }, {
    onSuccess: () => {
      setTodos((prev) =>
        prev.map((todo) => {
          if (todo.id === todoId) {
            return { ...todo, completed: !!checked };
          }
          return todo;
        })
      );
    },
  });
  
  const handleCheckboxChange = (event: CheckboxChangeEvent) => {
    const { checked } = event.target;
    setChecked(checked);
  };

  useEffect(() => {
    setChecked(isCompleted);
  }, [isCompleted]);
  
  useEffect(() => {
    mutate();
  }, [checked, mutate]);

  return (
    <Checkbox checked={checked} onChange={handleCheckboxChange} />
  );
};
