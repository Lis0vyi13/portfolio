import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { motion } from 'framer-motion';
import { fadeIn } from '../animations/motion';

import Title from '../ui/Title';

import Subtitle from '../ui/Subtitle';

import SectionWrapper from '../hoc/SectionWrapper';

import { experiences } from '../constants';

const BenefitsCard = ({ title, description, i }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#1d1836',
        borderRadius: '10px',
        color: '#fff',
      }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      icon={
        <div className='flex w-full h-full justify-center items-center text-[21px]'>
          {i}
        </div>
      }
      iconStyle={{ backgroundColor: '#050816' }}
    >
      <div>
        <h3 className='text-[21px] xs:text-[24px] font-bold'>{title}</h3>
        <h6 className='text-[14px] xs:text-[15px] text-white-100 mt-[1em] leading-[1.6] pl-1 tracking-wider'>
          {description}
        </h6>
      </div>
    </VerticalTimelineElement>
  );
};

const BenefitsInitial = () => {
  return (
    <div className='container'>
      <motion.div
        variants={fadeIn('up', '', 0, 0.3)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.1 }}
        className='text-center'
      >
        <Title text={'Why should I be part of your team'} />
        <Subtitle text={'Benefits'} />
      </motion.div>
      <VerticalTimeline>
        {experiences.map((exp) => {
          return <BenefitsCard key={exp.i} {...exp} />;
        })}
      </VerticalTimeline>
    </div>
  );
};

const Benefits = SectionWrapper(BenefitsInitial, 'benefits', '75px');
export default Benefits;
