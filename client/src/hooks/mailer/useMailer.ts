import axios from "axios";

const useMailer = () => {
  const sendMail = async (
    title: string,
    recepient: string,
    message: string,
    username: string
  ) => {
    console.log(title);
    try {
      const res = await axios.post("/api/mailer", {
        title: title,
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
