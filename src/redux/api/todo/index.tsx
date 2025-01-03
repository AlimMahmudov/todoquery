import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getTodo: build.query<TODO.GetResponse, TODO.GetRequest>({
      query: () => ({
        url: "/dca3f-2f9b3-3a3d1/rtk",
        method: "GET",
      }),
      providesTags: ["todo"],
    }),

    postTodo: build.mutation({
      query: (newData) => ({
        url: "/dca3f-2f9b3-3a3d1/rtk",
        method: "POST",
        body: newData,
      }),
      invalidatesTags: ["todo"],
    }),

    uploadFile: build.mutation({
      query: (newData) => ({
        url: "/upload/file",
        method: "POST",
        body: newData,
      }),
      invalidatesTags: ["todo"],
    }),

    deleteTodo: build.mutation({
      query: (_id) => ({
        url: `/dca3f-2f9b3-3a3d1/rtk/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["todo"],
    }),

    editTodo: build.mutation({
      query: ({ _id, newData }) => ({
        url: `/dca3f-2f9b3-3a3d1/rtk/${_id}`,
        method: "PATCH",
        body: newData,
      }),
      invalidatesTags: ["todo"],
    }),

    deleteTodoAll: build.mutation({
      query: () => ({
        url: "/dca3f-2f9b3-3a3d1/rtk",
        method: "DELETE",
      }),
      invalidatesTags: ["todo"],
    }),
  }),
});

export const {
  useGetTodoQuery,
  usePostTodoMutation,
  useUploadFileMutation,
  useDeleteTodoMutation,
  useEditTodoMutation,
  useDeleteTodoAllMutation,
} = api;
