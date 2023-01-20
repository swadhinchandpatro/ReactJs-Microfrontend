import postsApi from "../../services/apis/Posts";
import counterReducer from "../view/counterSlice";

export const rootReducer = {
  counter: counterReducer,
  [postsApi.reducerPath]: postsApi.reducer,
};
