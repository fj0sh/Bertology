import axios from "axios";

const useSendMail = () => {
  const sendMail = async (
    recepient: string,
    message: number,
    username: string
  ) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/mail/sendMail`, // Ensure the correct path
        { recepient, message, username }, // Send the body directly
        {
          headers: { "Content-Type": "application/json" }, // Correct MIME type
        }
      );

      console.log("Response:", res.data);
      return res.data;
    } catch (error) {
      console.error("Error sending mail:", error);
      throw error;
    }
  };

  return { sendMail };
};

export default useSendMail;
