import { combineReducers, configureStore } from "@reduxjs/toolkit";
import snippetsReducer from "./features/snippets/snippetsSlice";
import foldersReducer from "./features/folders/foldersSlice";

const rootReducer = combineReducers({
  snippets: snippetsReducer,
  folders: foldersReducer,
});
export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
