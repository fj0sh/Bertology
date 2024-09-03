import React from "react";
import Button from "../button/OrangeButton";
import { IoMdClose } from "react-icons/io";
import ModalContainer from "./modalContainer/ModalContainer";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { userSchema, UserType } from "@/constants/Users";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import instance from "@/lib/util/axios-instance";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  openRegister: () => void;
  openForgotPassword: () => void;
}

const loginSchema = z.object({
  username: z.string(),
  password: z.string()
})

type loginType = z.infer<typeof loginSchema>

const LoginModal = (props: Props) => {
  const { isOpen, onClose, openRegister, openForgotPassword } = props;
  const { register, handleSubmit, formState: { errors } } = useForm<loginType>({ resolver: zodResolver(loginSchema) })

  const onSubmit = async (data: loginType) => {
    try {
      const body = {
        username: data.username,
        password: data.password
      }

      const res = await instance.post("/auth/login", body)

      console.log(res)

      if (res.status === 200) {
        if (res.data[0].role === "ADMIN") {
          console.log("this mf is Admin")
        } else {
          console.log("this mf is customer")
        }
      }

    } catch (error: any) {
      if (error.response) {
        if (error.response.status === 404) {
          console.log("User not Found")
        }
        else if (error.response.status === 401) {
          console.log("Invalid Credentials")
        }
      }
      else {
        console.log(error)
      }
    }
  }

  if (!isOpen) return null;

  return (
    <ModalContainer width={"30%"} height={"80%"}>
      <div className="absolute top-5 right-5">
        <IoMdClose
          className="text-white text-[30px] cursor-pointer"
          onClick={onClose}
        />
      </div>
      <div className="text-white text-center">
        <p className="">Welcome Back</p>
        <p>Please login to your account</p>
      </div>
      <form className="text-center flex flex-col gap-8 w-full *:text-white" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="border-none rounded-[10px] h-10 p-5 bg-grey"
          type="text"
          placeholder="Username"
          {...register("username")}
        />
        <input
          className="border-none rounded-[10px] p-5 h-10 bg-grey"
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <div className="flex justify-around gap-4 text-white">
          <p className="text-sm">Remember Me</p>
          <button className="text-sm" onClick={openForgotPassword}>
            Forgot Password?
          </button>
        </div>
        <div>
          <Button type="submit" title="LOGIN" hover={true} height="3rem" />
        </div>
        <p className="text-white">
          Not a member?{" "}
          <button className="text-orange underline" onClick={openRegister}>
            Sign Up Now
          </button>
        </p>
        <hr className="border-white" />
      </form>
      <div className="flex flex-col gap-8 text-white w-full items-center">
        <p>Continue with</p>
        <Button
          title="GOOGLE"
          className="border-2 w-80 border-orange p-2 rounded-[15px]"
          onClick={() => signIn("google")}
        ></Button>
        <Button
          title="FACEBOOK"
          className="border-2 w-80 border-orange p-2 rounded-[15px] "
        ></Button>
      </div>
    </ModalContainer>
  );
};

export default LoginModal;
