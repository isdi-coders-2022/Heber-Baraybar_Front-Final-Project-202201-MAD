import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userTeacherReducer from '../actions/action-teacher/teacher-User-reducer';
import userStudentReducer from '../actions/action-student/studentUser-reducer';

export const store = configureStore({
  reducer: {
    student: userStudentReducer,
    teacher: userTeacherReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
