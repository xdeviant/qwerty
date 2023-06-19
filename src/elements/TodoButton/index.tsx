import { Button } from 'antd';
import { ITodoButtonProps } from './interface';

export const TodoButton: React.FC<ITodoButtonProps> = ({ onClick, icon, text, danger }) => (
    <Button 
      type="primary" 
      htmlType="submit" 
      onClick={onClick}
      icon={icon}
      danger={danger}
    >
      {text}
    </Button>
);