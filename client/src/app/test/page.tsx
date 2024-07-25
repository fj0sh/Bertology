"use client";
import User from "@/constants/Users";
import { fetchUser } from "@/lib/api/users.api";
import instance from "@/lib/util/axios-instance";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { RiAlignItemBottomFill } from "react-icons/ri";

const Test = () => {
  const [test, setTest] = useState("");
  const [editId, setEditId] = useState(0);

  const queryClient = useQueryClient();

  const fetchTest = async () => {
    const res = await instance.get<any>("/test");
    return res.data;
  };

  const addTest = async (body: string) => {
    const res = await instance.post<any>("/test/add", { test: body });
    return res.data;
  };

  const editTest = async (id: number, body: string) => {
    const res = await instance.patch<any>(`/test/edit/${id}`, { test: body });
    return res.data;
  };

  const deleteTest = async (id: number) => {
    const res = await instance.delete(`/test/delete/${id}`);
    return res.data;
  };

  const getById = async (id: number) => {
    const res = await instance.get<any>(`/test/${id}`);
    return res.data;
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["test"],
    queryFn: fetchTest,
  });

  // const {
  //   isLoading: getSingle,
  //   error: singleError,
  //   data: singleData,
  // } = useQuery({
  //   queryKey: ["test", id],
  //   queryFn: getById(id),
  // });

  const { mutate: addMutate } = useMutation({
    mutationFn: addTest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["test"] });
    },
  });

  const { mutate: editMutate } = useMutation({
    mutationFn: ({ id, test }: { id: number; test: string }) =>
      editTest(id, test),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["test"] });
    },
  });

  const { mutate: deleteMutate } = useMutation({
    mutationFn: ({ id }: { id: number }) => deleteTest(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["test"] });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addMutate(test);
  };

  const handleEdit = (e: React.FormEvent) => {
    e.preventDefault();
    editMutate({ id: editId, test });
  };

  const handleDelete = (id: number) => {
    deleteMutate({ id });
  };

  const displaySingle = async (id: number) => {};

  console.log(data);

  if (isLoading) return <div>Loading.....</div>;
  if (error) return <div>Error.....</div>;

  return (
    <>
      <div>
        {data?.map((item: any) => (
          <div key={item.id}>
            {item.id} - {item.test}
            <button onClick={() => setEditId(item.id)}>Edit</button>
            <button onClick={() => handleDelete(item.id)}>delete</button>
            <button onClick={() => displaySingle(item.id)}></button>
          </div>
        ))}
      </div>
      <p>{editId}</p>
      <div className="flex flex-col gap-6">
        <form onSubmit={handleSubmit}>
          <input
            className="border"
            type="text"
            onChange={(e) => setTest(e.target.value)}
          />
          <button type="submit">ADD</button>
        </form>
        <hr />
        <form onSubmit={handleEdit}>
          <input
            type="text"
            className="border"
            onChange={(e) => setTest(e.target.value)}
          />
          <button type="submit">Edit</button>
        </form>
      </div>
    </>
  );
};

export default Test;
