import User from "@/constants/Users";
import instance from "../util/axios-instance";

export const fetchUser = async () => {
  const res = await instance.get<User[]>("/auth");
  return res.data;
};

export const registerUser = async (
  firstname: string,
  lastname: string,
  email: string,
  phoneNumber: number,
  password: string,
  username: string
) => {
  const body = {
    firstname: firstname,
    lastname: lastname,
    emailAddress: email,
    phoneNumber: phoneNumber,
    password: password,
    username: username,
  };

  const res = await instance.post("/auth/register", body);
  return res.data;
};
