import axios from "axios";

const useMailer = () => {
  const sendMail = async (
    recepient: string,
    message: string,
    username: string
  ) => {
    try {
      const res = await axios.post("/api/mailer", {
        recepient: recepient,
        message: message,
        username: username,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return { sendMail };
};

export default useMailer;
