import instance from "@/lib/util/axios-instance";
import Cookie from "universal-cookie";
import { encrypter, decrypter } from "@/lib/function/encrypter/encrypter";
import { useState } from "react";
import { UserType } from "@/constants/Users";

const useAuth = () => {
  const [userData, setUserData] = useState<UserType>();
  const cookies = new Cookie();

  const loginUser = async (email: string, password: string) => {
    try {
      const res = await instance.post("/auth/login", {
        email: email,
        password: password,
      });

      console.log(res.data.user);

      const dataFormat = {
        token: res.data.token,
        user: res.data.user,
      };

      console.log(dataFormat);

      const data = encrypter(JSON.stringify(dataFormat));

      cookies.set("jwt_auth", data);

      return res.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const getUserByEmail = async (email: string) => {
    try {
      const res = await instance.post(`/auth/email`, { email: email });
      setUserData(res.data[0]);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const changePassword = async (password: string, id: number) => {
    try {
      const res = await instance.post(`/auth/change-password`, {
        password: password,
        id: id,
      });

      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return { loginUser, getUserByEmail, changePassword, userData };
};

export default useAuth;
