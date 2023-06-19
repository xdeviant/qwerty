import React from 'react';
import { useDeleteTodo } from '../../hooks/use-delete-todo/useDeleteTodo';
import { Typography, Card, Row, Col } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { ITodoItemProps } from './interface';
import { TodoButton, TodoCheckbox } from '../../elements';

const { Text } = Typography;

export const TodoItem: React.FC<ITodoItemProps> = ({ todo, setTodos }) => {
  const { id, title, completed } = todo;
  const { handleDelete } = useDeleteTodo({todo, setTodos});

  return (
      <Col span={24}>
        <Card style={{marginBottom: '25px'}}>
          <Row justify={'space-between'} align='middle'>
            <Col span={8} push={2}>
              <Text style={{fontSize: '18px'}} strong>{title}</Text>
            </Col>
            <Col span={8} push={5}>
              <TodoCheckbox isCompleted={completed} todoId={id} setTodos={setTodos}/>
            </Col>
            <Col span={8}>
              <TodoButton danger={true} text={'Delete'} icon={<DeleteOutlined/>} onClick={() => handleDelete()}/>
            </Col>
          </Row>
        </Card> 
      </Col>
  );
};
