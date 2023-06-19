import { useState, useCallback } from 'react';
import { Col, Layout, Row, Typography, Select } from 'antd';
import { TodoList } from '../components';
import { TodoForm } from '../components';
import { useCounterTodo } from '../hooks/use-counter-todo/useCounterTodo';
import { useFilterTodo } from '../hooks/use-filter-todo/useFilterTodo';
import { FilterType, ITodo } from '../interfaces/global';

const { Content } = Layout;
const { Text } = Typography;
const { Option } = Select;

const layoutStyles = {
  background: 'transparent',
};

export default function Main () {
  const [todos, setTodos] = useState<ITodo[]>([])
  const [filter, setFilter] = useState<FilterType>(FilterType.All);
  const { trueCount, falseCount } = useCounterTodo(todos);

  const handleFilterChange = useCallback((value: FilterType) => {
    setFilter(value);
  }, []);

  const filteredTodos = useFilterTodo(todos, filter);

  return (
    <Layout style={layoutStyles}>

      <Content>
        <Row justify={'center'} align={'middle'}>
          <Col>
            <Row justify="space-between" style={{paddingTop: '15px'}}>
              <Col>
                <Text strong style={{fontSize: '18px'}}>
                  Completed: {trueCount}
                </Text>
              </Col>
              <Col>
                <Text strong style={{fontSize: '18px'}}>
                  No completed: {falseCount}
                </Text>
              </Col>
            </Row>
            <Col>
              <TodoForm setTodos={setTodos} />
              <Row justify={'center'}  style={{paddingBottom: '15px'}}>
                  <Select value={filter} onChange={handleFilterChange} style={{ width: 120 }}>
                    <Option value={FilterType.All}>All</Option>
                    <Option value={FilterType.Completed}>Completed</Option>
                    <Option value={FilterType.Current}>Current</Option>
                  </Select>
              </Row>
              <TodoList setTodos={setTodos} todos={filteredTodos} />
            </Col>
          </Col>
        </Row>
      </Content>
    </Layout>
  )
}