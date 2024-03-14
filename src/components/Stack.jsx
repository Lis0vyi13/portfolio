import { useState, useEffect } from 'react';
import { Tilt } from 'react-tilt';

import { motion } from 'framer-motion';
import SectionWrapper from '../hoc/SectionWrapper';

import Title from '../ui/Title';
import Subtitle from '../ui/Subtitle';
import Card from './Card';

import { StackCards } from '../constants';
import { fadeIn } from '../animations/motion';

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
          <Card {...data} i={key} />
        </Tilt>
      );
    });
  };

  return (
    <section className='stack mt-[25px] mb-10'>
      <div className='container'>
        <motion.div
          variants={fadeIn('up', '', 0.05, 0.25)}
          viewport={{ once: true, amount: 0.25 }}
          className='text-center'
        >
          <Title text={'WHAT DO I WORK WITH'} />
          <Subtitle text={'Tech stack'} />
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
