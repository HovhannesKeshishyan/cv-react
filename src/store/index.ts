import { configureStore } from "@reduxjs/toolkit";

import appMainReducer from "./reduceers/app-main/app-main-slice";
import authorReducer from "./reduceers/author/author-slice";

const store = configureStore({
  reducer: {
    appMain: appMainReducer,
    author: authorReducer,
  },
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
export default store;
