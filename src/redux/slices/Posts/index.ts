import {
  useAddPostMutation,
  useDeletePostMutation,
  useGetPostsListQuery,
  useLazyGetPostQuery,
  useUpdatePostMutation,
} from "../../../services/apis/Posts";

export interface queryFnArgs {
  serviceName: string;
  params?: object;
  body?: object;
  config?: object;
}

const useAddPost = (queryFnArg: queryFnArgs, option?: object) =>
  useAddPostMutation(queryFnArg, option);

const useDeletePost = (queryFnArg: queryFnArgs, option?: object) =>
  useDeletePostMutation(queryFnArg, option);

const useUpdatePost = (queryFnArg: queryFnArgs, option?: object) =>
  useUpdatePostMutation(queryFnArg, option);

const usePrefetchPostList : any = (queryFnArg: queryFnArgs, option?: object) =>
  usePrefetchPostList(queryFnArg, option);

const useLazyGetPost = (queryFnArg: queryFnArgs, option?: object) =>
  useLazyGetPostQuery(queryFnArg, option);

const useGetPostsList = (queryFnArg: queryFnArgs, option?: object) =>
  useGetPostsListQuery(queryFnArg, option);

export {
  useGetPostsList,
  useAddPost,
  useDeletePost,
  useUpdatePost,
  usePrefetchPostList,
  useLazyGetPost,
};
