// tasksSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async action để lấy danh sách nhiệm vụ từ API
export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await fetch('https://6704d4ebab8a8f892734ff45.mockapi.io/Todo'); // Thay URL bằng link API thực tế
  return await response.json();
});

// Async action để thêm nhiệm vụ mới vào API
export const addTask = createAsyncThunk('tasks/addTask', async (newTask) => {
  const response = await fetch('https://6704d4ebab8a8f892734ff45.mockapi.io/Todo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ task: newTask }),
  });
  return await response.json();
});

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    list: [],
    status: 'idle', // Trạng thái của yêu cầu API
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.list.push(action.payload); // Thêm nhiệm vụ mới vào danh sách
      });
  },
});

export default tasksSlice.reducer;
