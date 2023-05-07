import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { AppDispatch, RootState } from '../../redux/store/store';
import { getTasksThunk } from '../../redux/slices/tasksSlice';
import TodoItem from '../TodoItem/TodoItem';

import './todoList.scss';

const TodoList = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getTasksThunk());
  }, []);

  const items = tasks.map((task) => <TodoItem key={task._id} {...task} />);
  return <ul className="todo-list">{items}</ul>;
};

export default TodoList;
