import axios from "axios";

const useMailer = () => {
  const sendMail = async (
    title: string,
    recepient: string,
    message: string,
    username: string,
    attachment?: string // Optional attachment parameter
  ) => {
    try {
      const res = await axios.post("/api/mailer", {
        title,
        recepient,
        message,
        username,
        attachment,
      });
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  return { sendMail };
};

export default useMailer;
