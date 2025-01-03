// "use client";
// import {
//   useDeleteTodoAllMutation,
//   useDeleteTodoMutation,
//   useEditTodoMutation,
//   useGetTodoQuery,
//   usePostTodoMutation,
//   useUploadFileMutation,
// } from "@/redux/api/todo";
// import { title } from "process";
// import { useState } from "react";
// import { SubmitHandler, useForm } from "react-hook-form";

// interface TodoType {
//   _id: number;
//   image: string;
//   title: string;
//   description: string;
// }

// const Home = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { isSubmitting },
//   } = useForm<TodoType>();
//   const {
//     register: registerEdit,
//     handleSubmit: handleSubmitEdit,
//     formState: { isSubmitting: isSubmittingEdit },
//   } = useForm<TodoType>();

//   const [postTodoMutation] = usePostTodoMutation();
//   const [deleteTodoMutation] = useDeleteTodoMutation();
//   const [deleteTodoAllMutation] = useDeleteTodoAllMutation();
//   const [editTodoMutation] = useEditTodoMutation();
//   const [uploadFileMutation] = useUploadFileMutation();
//   const { data } = useGetTodoQuery();
//   const [isEdit, setIsEdit] = useState<number | null>(null);
//   console.log(data);

//   const onSubmit: SubmitHandler<TodoType> = async () => {
//     const file = data.image[0];
//     const formData = new FormData();
//     formData.append("file", file);

//     const { data: responseFile } = await uploadFileMutation(formData);

//     const newData = {
//       image: responseFile.url,
//       title: data.title,
//       description: data.description,
//     };
//     await postTodoMutation(newData);
//   };

//   return <div>
//     {}
//   </div>;
// };

// export default Home;

import React from "react";

const Home = () => {
  return <div></div>;
};

export default Home;
