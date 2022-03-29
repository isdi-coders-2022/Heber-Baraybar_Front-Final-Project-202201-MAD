/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
// test-utils.js
import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
// Import your own reducer

import { userTeacherReducer } from '../redux/actions/action-teacher/teacher-User-reducer';
import { userStudentReducer } from '../redux/actions/action-student/studentUser-reducer';


function render(
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: {
        student: userStudentReducer,
        teacher: userTeacherReducer,
      },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
