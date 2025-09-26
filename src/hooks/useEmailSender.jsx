import { useState } from "react";
import emailjs from "@emailjs/browser";

const useEmailSender = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = async (formData, serviceKey, templateKey, userPublicKey) => {
    setIsLoading(true);
    try {
      await emailjs.send(
        serviceKey,
        templateKey,
        {
          from_name: formData.name,
          to_name: "Oleksandr",
          from_email: formData.email,
          to_email: "lisovyy13@gmail.com",
          message: formData.message,
        },
        userPublicKey,
      );
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, isSuccess, error, sendEmail };
};

export default useEmailSender;
