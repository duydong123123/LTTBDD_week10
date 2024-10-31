// store.js
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import tasksReducer from './tasksSlice';
import tasksSaga from './tasksSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware), // Vô hiệu hóa Thunk nếu không sử dụng, chỉ bật Saga
});

sagaMiddleware.run(tasksSaga); // Chạy các saga

export { store };
