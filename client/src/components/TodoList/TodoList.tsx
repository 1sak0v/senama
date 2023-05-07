import { TTasksData } from '../../types';
import TodoItem from '../TodoItem/TodoItem';

import './todoList.scss';

type TTodoListProps = {
  tasks: TTasksData[];
  onDeleteTask: (id: string) => void;
  updateTaskStatus: (id: string) => void;
};

const TodoList = ({ tasks, onDeleteTask, updateTaskStatus }: TTodoListProps) => {
  const items = tasks.map((task) => (
    <TodoItem
      key={task._id}
      {...task}
      onDeleteTask={onDeleteTask}
      updateTaskStatus={updateTaskStatus}
    />
  ));
  return <ul className="todo-list">{items}</ul>;
};

export default TodoList;
