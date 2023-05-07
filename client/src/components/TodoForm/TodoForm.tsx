import { SubmitHandler, useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

interface ITodoForm {
  todo: string;
}

type TTodoFormProps = {
  addTask: (title: string) => void;
};

const TodoForm = ({ addTask }: TTodoFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ITodoForm>();

  const onSubmit: SubmitHandler<ITodoForm> = ({ todo }) => {
    addTask(todo);
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
