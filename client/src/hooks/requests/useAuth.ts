import instance from "@/lib/util/axios-instance";

const useAuth = () => {
  const registerUser = async (
    firstname: string,
    lastname: string,
    phoneNumber: string,
    emailAddress: string,
    password: string,
    username: string
  ) => {
    const body = {
      firstname: firstname,
      lastname: lastname,
      phoneNumber: phoneNumber,
      emailAddress: emailAddress,
      password: password,
      username: username,
    };

    console.log(body);
    try {
      const res = await instance.post("/auth/register", body);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return { registerUser };
};

export default useAuth;
