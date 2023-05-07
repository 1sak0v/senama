import { useEffect, useState } from 'react';

import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';
import { deleteTask, getTasks, postTask, updateTask } from '../../api/tasksApi';
import { TTasksData } from '../../types';

const App = () => {
  const [tasks, setTasks] = useState<TTasksData[]>([]);

  useEffect(() => {
    getTasks()
      .then((data) => setTasks(data))
      .catch(handleError);
  }, []);

  const handleError = (err: unknown) => {
    if (err instanceof Error) {
      console.log(err.message);
    }
  };

  const onDeleteTask = (id: string): void => {
    deleteTask(id)
      .then(() => {
        setTasks((tasks) => {
          return tasks.filter((task) => task._id !== id);
        });
      })
      .catch(handleError);
  };

  const addTask = (title: string): void => {
    postTask({ title })
      .then((task) => setTasks((tasks) => [...tasks, task]))
      .catch(handleError);
  };

  const updateTaskStatus = (id: string): void => {
    const curr = tasks.filter((task) => task._id === id)[0];
    updateTask(id, { completed: !curr.completed })
      .then(() => {
        setTasks((tasks) => {
          return tasks.map((task) => {
            if (task._id === id) {
              return { ...task, completed: !task.completed };
            }
            return task;
          });
        });
      })
      .catch(handleError);
  };

  return (
    <div className="container">
      <TodoForm addTask={addTask} />
      <TodoList tasks={tasks} onDeleteTask={onDeleteTask} updateTaskStatus={updateTaskStatus} />
    </div>
  );
};

export default App;
