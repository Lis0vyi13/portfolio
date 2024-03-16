import { useState, useEffect } from 'react';
import { Tilt } from 'react-tilt';

import { motion } from 'framer-motion';
import { fadeIn } from '../animations/motion';

import SectionWrapper from '../hoc/SectionWrapper';

import Title from '../ui/Title';
import Subtitle from '../ui/Subtitle';

import { StackText, StackCards } from '../constants';

const StackCard = ({ url, text, i }) => {
  return (
    <motion.div
      variants={fadeIn('', '', i * 0.2, 0.3)}
      viewport={{ once: true, amount: 0.35 }}
      className='w-full green-pink-gradient p-[2px] text-center rounded-[20px] shadow-card'
    >
      <div className='card-bg rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <img className='scale-[1.3]' src={url} alt={text} />
        <h3 className='text-white text-[22px] font-bold text-center'>{text}</h3>
      </div>
    </motion.div>
  );
};

const Stack = () => {
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    const cards = getCards();
    setCardList(cards);
  }, []);

  const getCards = () => {
    return StackCards.map((card) => {
      const { key, ...data } = card;
      return (
        <Tilt key={key}>
          <StackCard {...data} i={key} />
        </Tilt>
      );
    });
  };

  return (
    <section className='stack'>
      <div className='container'>
        <motion.div
          variants={fadeIn('up', '', 0, 0.3)}
          viewport={{ once: true, amount: 0.3 }}
          className='text-center'
        >
          <Title text={StackText.title} />
          <Subtitle text={StackText.subtitle} />
        </motion.div>

        <section className='grid grid-cols-1 xs:grid-cols-2 gap-4 md:grid-cols-3 lgXl:grid-cols-4 md:gap-7 lgXl:gap-10 px-1 mt-6'>
          {cardList}
        </section>
      </div>
    </section>
  );
};

const WrappedStack = SectionWrapper(Stack, 'stack');
export default WrappedStack;
