import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TTasksData } from '../../types';
import { deleteTask, getTasks, postTask, updateTask } from '../../api/tasksApi';

type TTasksState = {
  tasks: TTasksData[];
};

export const getTasksThunk = createAsyncThunk('tasks/getTasks', () => {
  return getTasks();
});

export const deleteTaskThunk = createAsyncThunk('tasks/deleteTask', (id: string) => {
  return deleteTask(id);
});

export const postTaskThunk = createAsyncThunk('tasks/addTask', (title: string) => {
  return postTask({ title });
});

export const updateTaskThunk = createAsyncThunk(
  'tasks/updateTask',
  ({ id, status }: { id: string; status: boolean }) => {
    return updateTask(id, { completed: status });
  }
);

const initialState = {
  tasks: [],
} as TTasksState;

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTasksThunk.fulfilled, (state, action) => {
        state.tasks = action.payload;
      })
      .addCase(deleteTaskThunk.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter(({ _id }) => _id !== action.payload._id);
      })
      .addCase(postTaskThunk.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      })
      .addCase(updateTaskThunk.fulfilled, (state, action) => {
        state.tasks = state.tasks.map((task) => {
          if (task._id === action.payload._id) {
            task.completed = !task.completed;
          }
          return task;
        });
      });
  },
});

const { reducer } = tasksSlice;
export default reducer;
