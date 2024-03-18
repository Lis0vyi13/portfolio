import { useState, useRef } from 'react';

import Title from '../ui/Title';
import Subtitle from '../ui/Subtitle';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';

import { ContactText, ContactFormText } from '../constants';

import SectionWrapper from '../hoc/SectionWrapper';

const ContactInitial = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const onChangeHandler = () => {};
  const onSubmitHandler = () => {};
  return (
    <div className='container lg-container md:mt-2'>
      <div className='pt-20 flex gap-10'>
        <div className='flex-[0.45] bg-main-100 p-8 rounded-2xl'>
          <Title text={ContactText.title} />
          <Subtitle text={ContactText.subtitle} />
          <form className='flex flex-col gap-5'>
            <Input {...ContactFormText.inputName} onChange={onChangeHandler} />
            <Input {...ContactFormText.inputEmail} onChange={onChangeHandler} />
            <Textarea
              {...ContactFormText.textAreaMessage}
              onChange={onChangeHandler}
            />
            <button
              type='submit'
              onSubmit={onSubmitHandler}
              className='bg-tertiary transition-all hover:bg-indigo-950 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
            >
              {ContactFormText.submitButton}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const Contact = SectionWrapper(ContactInitial, 'contact');
export default Contact;
