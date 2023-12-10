import { createSlice } from "@reduxjs/toolkit";

export const TaskReducer = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    task:{},
  },
  reducers: {
    addTasks: (state, action) => {
      state.tasks.push(action.payload);
    },
    getTaskById: (state, action) => {
      state.task = state.tasks.find((data) => data.title === action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTasks, getTaskById } = TaskReducer.actions;
export default TaskReducer.reducer;