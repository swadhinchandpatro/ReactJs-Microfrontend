import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery, fetcher } from "marketing/fetchBaseQuery";
import { BASE_URL_POST } from "../../constants";

interface BaseQueryArgs {
  params?: object;
  config?: object;
  option?: object;
  body?: object;
}

// Define a service using a base URL and expected endpoints
export const postsApi = createApi({
  reducerPath: "posts",
  baseQuery: axiosBaseQuery({
    baseUrl: BASE_URL_POST,
  }),
  tagTypes: ["Posts"],
  // global configuration for the api
  // keepUnusedDataFor: 30,
  endpoints: (builder: any) => ({
    getPostsList: builder.query({
      query: ({ params, config }:BaseQueryArgs) =>
        fetcher({
          url: "posts",
          method: "GET",
          params: params,
          config: config,
        }),

      providesTags: ["Posts"],
    }),
    addPost: builder.mutation({
      query: ({ body, config }:BaseQueryArgs) =>
        fetcher({
          url: "posts",
          method: "POST",
          body: body,
          config: config,
        }),
      invalidatesTags: ["Posts"],
      /* 
       Optimistic Update
       * * Important note - This , updates the list of posts before calling the api method 
       * * which doesn't show any delay.
      async onQueryStarted(body, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          postsApi.util.updateQueryData('getPostsList', 1 , (draft:PostInterface[]) => {
            draft.push(body);
          })
        )
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      }
      */
    }),
    getPost: builder.query({
      query: ({ params, config }:BaseQueryArgs) =>
        fetcher({
          url: "posts",
          method: "GET",
          params: params,
          config: config,
        }),
      providesTags: (id: any) => [{ type: "Posts", id }],
    }),
    updatePost: builder.mutation({
      query: ({ params, body, config }:BaseQueryArgs) =>
        fetcher({
          url: "posts",
          method: "PUT",
          params: params,
          body: body,
          config: config,
        }),
        invalidatesTags: ["Posts"],
    }),
    deletePost: builder.mutation({
      query: ({ params, config }:BaseQueryArgs) =>
        fetcher({
          url: "posts",
          method: "DELETE",
          params: params,
          config: config,
        }),
      invalidatesTags: ["Posts"],
    }),
  }),
});

export const {
  useGetPostsListQuery,
  useAddPostMutation,
  useDeletePostMutation,
  useUpdatePostMutation,
  useGetPostQuery,
  usePrefetch,
  useLazyGetPostQuery,
} = postsApi;

export default postsApi;
