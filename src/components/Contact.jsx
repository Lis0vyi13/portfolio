import { useState } from 'react';
import emailjs from '@emailjs/browser';

import { SERVICE_KEY, TEMPLATE_KEY, USER_PUBLIC_KEY } from '../api/email';

import SectionWrapper from '../hoc/SectionWrapper';

import EarthCanvas from './canvas/Earth';
import StarsCanvas from './canvas/Stars';

import Title from '../ui/Title';
import Subtitle from '../ui/Subtitle';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';

import Modal from './Modal';

import { ContactText, ContactFormText } from '../constants';

const ContactInitial = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    try {
      emailjs
        .send(
          SERVICE_KEY,
          TEMPLATE_KEY,
          {
            from_name: formData.name,
            to_name: 'Olexandr',
            from_email: formData.email,
            to_email: 'lisovyy13@gmail.com',
            message: formData.message,
          },
          USER_PUBLIC_KEY,
        )
        .then(() => {
          setIsSuccess(true);
        })
        .then(
          setTimeout(() => {
            setIsSuccess(false);
          }, 5000),
        );
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className='container lg-container md:-mt-[55px] lgXl:mt-2'>
        <div className='flex flex-col-reverse lgXl:flex-row lgXl:gap-10'>
          <div className='relative z-10 lg:flex-[0.4] bg-main-100 p-8 rounded-2xl sm:mt-[70px] lgXl:mt-0 xxs:mt-[20px]'>
            <Title text={ContactText.title} />
            <Subtitle text={ContactText.subtitle} />
            <form
              onSubmit={onSubmitHandler}
              className='flex flex-col mt-5 gap-5'
            >
              <Input
                {...ContactFormText.inputName}
                value={formData.name}
                onChange={onChangeHandler}
              />
              <Input
                {...ContactFormText.inputEmail}
                value={formData.email}
                onChange={onChangeHandler}
              />
              <Textarea
                {...ContactFormText.textAreaMessage}
                value={formData.message}
                onChange={onChangeHandler}
              />
              <button
                type='submit'
                className={`transition-all bg-tertiary hover:bg-indigo-950 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary `}
              >
                {isLoading ? 'Sending...' : ContactFormText.submitButton}
              </button>
            </form>
          </div>
          <div className='relative z-0 lgXl:flex-[0.6] lgXl:h-auto md:h-[550px] h-[350px]'>
            {EarthCanvas()}
          </div>
        </div>
      </div>
      <Modal isActive={isSuccess} />
      {StarsCanvas()}
    </>
  );
};

const Contact = SectionWrapper(ContactInitial, 'contact', {
  paddingBottom: '75px',
  marginTop: '75px',
});
export default Contact;
