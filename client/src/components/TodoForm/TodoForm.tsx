import { useDispatch } from 'react-redux';
import { SubmitHandler, useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { AppDispatch } from '../../redux/store/store';
import { postTaskThunk } from '../../redux/slices/tasksSlice';

interface ITodoForm {
  todo: string;
}

const TodoForm = () => {
  const dispatch = useDispatch<AppDispatch>();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ITodoForm>();

  const onSubmit: SubmitHandler<ITodoForm> = ({ todo }) => {
    dispatch(postTaskThunk(todo));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Todo"
        variant="outlined"
        size="small"
        sx={{ width: '80%' }}
        {...register('todo', { required: 'This field is required!' })}
        error={!!errors.todo}
      />
      <Button
        variant="contained"
        size="large"
        sx={{ width: '18%', marginLeft: '2%' }}
        onClick={handleSubmit(onSubmit)}
      >
        Add todo
      </Button>
      {errors.todo?.message && <div className="error">{errors.todo.message}</div>}
    </form>
  );
};

export default TodoForm;
