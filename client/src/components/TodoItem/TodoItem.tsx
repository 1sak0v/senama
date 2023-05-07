import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

type TTodoItem = {
  _id: string;
  title: string;
  completed: boolean;
  onDeleteTask: (id: string) => void;
  updateTaskStatus: (id: string) => void;
};

const TodoItem = ({ _id, title, completed, onDeleteTask, updateTaskStatus }: TTodoItem) => {
  return (
    <li className="todo-list__item">
      <label className="todo-list__label">
        <input
          type="checkbox"
          className="todo-list__checkbox"
          checked={completed}
          onChange={() => updateTaskStatus(_id)}
        />
        {title}
      </label>
      <DeleteOutlineOutlinedIcon sx={{ cursor: 'pointer' }} onClick={() => onDeleteTask(_id)} />
    </li>
  );
};

export default TodoItem;
