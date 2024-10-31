// tasksSlice.js
import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    list: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    fetchTasksRequest: (state) => {
      state.status = 'loading';
    },
    fetchTasksSuccess: (state, action) => {
      state.status = 'succeeded';
      state.list = action.payload;
    },
    fetchTasksFailure: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
    addTaskRequest: (state, action) => {
      state.status = 'loading';
    },
    addTaskSuccess: (state, action) => {
      state.status = 'succeeded';
      state.list.push(action.payload);
    },
    addTaskFailure: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const {
  fetchTasksRequest,
  fetchTasksSuccess,
  fetchTasksFailure,
  addTaskRequest,
  addTaskSuccess,
  addTaskFailure,
} = tasksSlice.actions;

export default tasksSlice.reducer;
