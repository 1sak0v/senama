import axios from 'axios';

import { TTasksData } from '../types';

const instance = axios.create({
  baseURL: 'http://localhost:8080/',
});

export const getTasks = async (): Promise<TTasksData[]> => {
  const response = await instance.get('tasks');
  return response.data;
};

export const deleteTask = async (id: string): Promise<void> => {
  await instance.delete(`tasks/${id}`);
};

export const postTask = async (title: { title: string }): Promise<TTasksData> => {
  const response = await instance.post('tasks', title);
  return response.data;
};

export const updateTask = async (id: string, status: { completed: boolean }): Promise<void> => {
  await instance.patch(`tasks/${id}`, status);
};
