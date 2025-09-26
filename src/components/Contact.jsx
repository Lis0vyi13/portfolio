import useEmailSender from "../hooks/useEmailSender";

import { motion } from "framer-motion";
import { slideIn } from "../animations/motion";

import SectionWrapper from "../hoc/SectionWrapper";

import ContactForm from "./ContactForm";
import Modal from "./Modal";

import Title from "../ui/Title";
import Subtitle from "../ui/Subtitle";

import { ContactText, ContactIcons } from "../constants";

const ContactSocialItem = ({ name, href, src }) => {
  return (
    <a className="rounded-full bg-blue-600 hover:bg-blue-800 duration-300" href={href}>
      <div className="flex justify-center items-center w-10 h-10">
        <img width={20} height={20} src={src} alt={name} />
      </div>
    </a>
  );
};

const ContactInitial = () => {
  const { isLoading, isSuccess, error, sendEmail } = useEmailSender();

  return (
    <div className="contact-bg h-full -mt-10">
      <div className="container lg-container -mt-2 lgXl:mt-2">
        <div className="flex flex-col-reverse lgXl:flex-row lgXl:gap-10 py-8 xl:py-8">
          <motion.div
            variants={slideIn("up", "tween", 0.2, 0.5)}
            className="relative z-10 w-full bg-main-100 p-8 rounded-2xl xxs:mt-[20px]"
          >
            <div className="absolute right-5 top-5">
              {ContactIcons.map((icon) => {
                return <ContactSocialItem key={icon.name} {...icon} />;
              })}
            </div>
            <Title text={ContactText.title} />
            <Subtitle text={ContactText.subtitle} />
            <ContactForm isLoading={isLoading} sendEmail={sendEmail} />
          </motion.div>
        </div>
      </div>

      <Modal isActive={isSuccess} />
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

const Contact = SectionWrapper(ContactInitial, "contact", {
  marginTop: "75px",
});
export default Contact;
