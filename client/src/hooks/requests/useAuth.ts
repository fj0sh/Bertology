import instance from "@/lib/util/axios-instance";
import Cookie from "universal-cookie";
import { encrypter } from "@/lib/function/encrypter/encrypter";
import { useState } from "react";
import { UserType } from "@/constants/Users";

const useAuth = () => {
  const [userData, setUserData] = useState<UserType>();
  const [user, setUser] = useState<any>();
  const cookies = new Cookie();

  const loginUser = async (email: string, password: string) => {
    try {
      const res = await instance.post("/auth/login", {
        email: email,
        password: password,
      });

      console.log(res.data);

      const dataFormat = {
        token: res.data.token,
        user: res.data.user,
      };

      if (res) {
        const data = encrypter(JSON.stringify(dataFormat));
        cookies.set("jwt_auth", data);
      }

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

  const getUserById = async (id: number) => {
    try {
      const res = await instance.get(`/auth/${id}`);
      setUser(res.data);
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
  const editProfile = async (
    id: number,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    emailAddress: string,
    userName: string,
    profilePicture: string
  ) => {
    try {
      const updatedProfile = {
        firstName,
        lastName,
        phoneNumber,
        emailAddress,
        userName,
        profilePicture,
      };

      const res = await instance.patch(`/auth/update/${id}`, updatedProfile);
      setUser(res.data); // Update the local state with the updated user data
      return res.data;
    } catch (error) {
      console.log("Error updating profile:", error);
      throw error; // Re-throw the error for further handling
    }
  };

  return {
    loginUser,
    getUserByEmail,
    changePassword,
    getUserById,
    editProfile,
    userData,
    user,
  };
};

export default useAuth;
