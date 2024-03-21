import useEmailSender from '../hooks/useEmailSender';

import { motion } from 'framer-motion';
import { slideIn } from '../animations/motion';

import SectionWrapper from '../hoc/SectionWrapper';

import ContactForm from './ContactForm';
import StarsCanvas from './canvas/Stars';
import Modal from './Modal';

import Title from '../ui/Title';
import Subtitle from '../ui/Subtitle';

import { ContactText, ContactIcons } from '../constants';

const ContactSocialItem = ({ name, href, src }) => {
  return (
    <a href={href}>
      <div className='flex justify-center items-center w-10 h-10 rounded-full bg-blue-600'>
        <img width={20} height={20} src={src} alt={name} />
      </div>
    </a>
  );
};

const ContactInitial = () => {
  const { isLoading, isSuccess, error, sendEmail } = useEmailSender();

  return (
    <>
      <div className='container lg-container md:-mt-[55px] lgXl:mt-2'>
        <div className='flex flex-col-reverse lgXl:flex-row lgXl:gap-10'>
          <motion.div
            variants={slideIn('left', 'tween', 0.2, 0.5)}
            className='relative z-10 w-full bg-main-100 p-8 rounded-2xl sm:mt-[70px] lgXl:mt-0 xxs:mt-[20px]'
          >
            <div className='absolute right-5 top-5'>
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

      {StarsCanvas()}
    </>
  );
};

const Contact = SectionWrapper(ContactInitial, 'contact', {
  paddingBottom: '75px',
  marginTop: '75px',
});
export default Contact;
