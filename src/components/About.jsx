import { useState, useEffect } from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import Title from '../ui/Title';
import Subtitle from '../ui/Subtitle';
import Description from '../ui/Description';

import Card from './Card';

import { AboutText, StackCards } from '../constants';

const About = () => {
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
          <Card {...data} />
        </Tilt>
      );
    });
  };
  return (
    <motion.section className='relative mb-[100px] z-10 mt-[-180px] pt-[200px] xs:mt-[-10px] xs:pt-[150px] sm:mt-[20px] md:mt-[220px] md:pt-[90px] xl:mt-[-160px] xl:pt-[190px]'>
      <div className='container'>
        <Title text={AboutText.title} />
        <Subtitle text={AboutText.subtitle} />
        <Description text={AboutText.description} />
        <section className='grid grid-cols-4 gap-10 px-1 mt-6'>
          {cardList}
        </section>
      </div>
    </motion.section>
  );
};

export default About;
