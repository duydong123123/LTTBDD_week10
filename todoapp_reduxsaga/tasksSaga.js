// tasksSaga.js
import { call, put, takeEvery } from 'redux-saga/effects';
import {
  fetchTasksRequest,
  fetchTasksSuccess,
  fetchTasksFailure,
  addTaskRequest,
  addTaskSuccess,
  addTaskFailure,
} from './tasksSlice';

// API để lấy danh sách nhiệm vụ
function* fetchTasksSaga() {
  try {
    const response = yield call(fetch, 'https://6704d4ebab8a8f892734ff45.mockapi.io/Todo'); // Thay thế URL của bạn
    const data = yield response.json();
    yield put(fetchTasksSuccess(data));
  } catch (error) {
    yield put(fetchTasksFailure(error.message));
  }
}

// API để thêm nhiệm vụ mới
function* addTaskSaga(action) {
  try {
    const response = yield call(fetch, 'https://6704d4ebab8a8f892734ff45.mockapi.io/Todo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ task: action.payload }),
    });
    const data = yield response.json();
    yield put(addTaskSuccess(data));
  } catch (error) {
    yield put(addTaskFailure(error.message));
  }
}

// Theo dõi các action và gọi saga tương ứng
export default function* tasksSaga() {
  yield takeEvery(fetchTasksRequest.type, fetchTasksSaga);
  yield takeEvery(addTaskRequest.type, addTaskSaga);
}
