import { motion } from 'framer-motion';

import LaptopCanvas from './canvas/Laptop';
import { HeroText } from '../constants';
const Hero = () => {
  return (
    <div className='min-h-[800px] mt-[-180px] sm:mt-[-155px]'>
      <div className='hero-content relative pt-[85px]'>
        <div className='container relative z-10'>
          <div className='flex absolute top-[130px] sm:left-[30px] md:left-[50px] lg:left-[100px] gap-[30px]'>
            <div className='flex self-start flex-col justify-center items-center'>
              <div className='rounded-full w-[20px] h-[20px] bg-violet' />
              <div className='h-[220px] xs:h-[240px] sm:h-[270px] md:h-[300px] lg:h-[380px] w-[5px] violet-gradient' />
            </div>
            <div className='pr-[15px] sm:pr-[40px]'>
              <h1 className='font-black text-[27px] xxs:text-[30px] xs:text-[40px] sm:text-[48px] md:text-[58px] lg:text-[68px]'>
                Hi! I&apos;m &nbsp;
                <span className='text-violet text-[27px] xxs:text-[30px] xs:text-[40px] sm:text-[48px] md:text-[58px] lg:text-[68px]'>
                  Olexandr
                </span>
              </h1>
              <h3 className='font-medium text-[16px] xxs:mt-2 xs:mt-0 xxs:text-[17.5px] xs:text-[19px] sm:text-[21px] md:text-[23px] lg:text-[26px] md:max-w-[700px] xl:max-w-[580px] max-w-[550px]'>
                {HeroText.description}
              </h3>
            </div>
          </div>
        </div>
        <div className='absolute z-20 left-1/2 flex justify-center items-start cursor-pointer -translate-x-1/2 bottom-[375px] xs:bottom-[210px] md:bottom-[100px] xl:bottom-[385px] rounded-3xl w-[34px] h-[60px] border-[3px] border-secondary'>
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop',
            }}
            className='w-3 h-3 mt-[8px] rounded-full bg-secondary'
          />
        </div>

        {LaptopCanvas()}
      </div>
    </div>
  );
};

export default Hero;
