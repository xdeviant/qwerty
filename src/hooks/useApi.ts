import { URL, TODOS } from "../constants/_api";

const fetchTodos = async () => {
  const response = await fetch(`${URL}${TODOS}`);
  const data = await response.json();
  return data;
};

const addTodo = async (todo: { title: string; completed: boolean }) => {
  const response = await fetch(`${URL}${TODOS}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  });
  const data = await response.json();
  return data;
};

const deleteTodo = async (id: number) => {
  const response = await fetch(`${URL}${TODOS}/${id}`, {
    method: 'DELETE',
  });
  if (response.ok) {
    return 'delete';
  } else {
    throw new Error('fail');
  }
};

const updateTodoStatus = async (id: number, completed: boolean) => {
  const response = await fetch(`${URL}${TODOS}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ completed }),
  });
  const data = await response.json();
  return data;
};

export { fetchTodos, addTodo, deleteTodo, updateTodoStatus };
