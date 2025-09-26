import { useState } from "react";

import Input from "../ui/Input";
import Textarea from "../ui/Textarea";

import { ContactFormText } from "../constants";

const SERVICE_KEY = import.meta.env.VITE_SERVICE_KEY;
const TEMPLATE_KEY = import.meta.env.VITE_TEMPLATE_KEY;
const USER_PUBLIC_KEY = import.meta.env.VITE_USER_PUBLIC_KEY;

const ContactForm = ({ isLoading, sendEmail }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    sendEmail(formData, SERVICE_KEY, TEMPLATE_KEY, USER_PUBLIC_KEY);
  };
  return (
    <form onSubmit={onSubmitHandler} className="relative flex flex-col mt-5 gap-5">
      <Input {...ContactFormText.inputName} value={formData.name} onChange={onChangeHandler} />
      <Input {...ContactFormText.inputEmail} value={formData.email} onChange={onChangeHandler} />
      <Textarea
        {...ContactFormText.textAreaMessage}
        value={formData.message}
        onChange={onChangeHandler}
      />
      <button
        type="submit"
        className={`transition-all bg-tertiary hover:bg-indigo-950 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary `}
      >
        {isLoading ? "Sending..." : ContactFormText.submitButton}
      </button>
    </form>
  );
};

export default ContactForm;
