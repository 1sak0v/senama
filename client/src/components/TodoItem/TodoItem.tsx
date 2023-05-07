import { useDispatch } from 'react-redux';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import { AppDispatch } from '../../redux/store/store';
import { deleteTaskThunk, updateTaskThunk } from '../../redux/slices/tasksSlice';

type TTodoItem = {
  _id: string;
  title: string;
  completed: boolean;
};

const TodoItem = ({ _id, title, completed }: TTodoItem) => {
  const dispatch = useDispatch<AppDispatch>();

  const onChangeStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    const status = e.target.checked;
    dispatch(updateTaskThunk({ id: _id, status }));
  };

  return (
    <li className="todo-list__item">
      <label className="todo-list__label">
        <input
          type="checkbox"
          className="todo-list__checkbox"
          checked={completed}
          onChange={onChangeStatus}
        />
        {title}
      </label>
      <DeleteOutlineOutlinedIcon
        sx={{ cursor: 'pointer' }}
        onClick={() => dispatch(deleteTaskThunk(_id))}
      />
    </li>
  );
};

export default TodoItem;
