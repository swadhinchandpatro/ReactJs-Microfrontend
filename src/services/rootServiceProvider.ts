import { useCounter } from "./view/counter";
import { useGetPostsListQuery } from "./apis/Posts";

export const rootServiceProvider = {
    counter : useCounter,
    postList : useGetPostsListQuery,
}