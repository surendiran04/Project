import { configureStore } from "@reduxjs/toolkit";
// ROOT REDUCER
import TaskReducer from "./TaskReducer";
//import AuthReducer from "./Authreducer";
import NotesReducer from "./NoteReducer"

export default configureStore({
  // Root reducer
  reducer: {
    tasksReducer: TaskReducer,
   // authReducer: AuthReducer,
    notesReducer: NotesReducer,
  },
});