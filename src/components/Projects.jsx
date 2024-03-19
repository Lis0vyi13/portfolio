import { motion } from 'framer-motion';
import { fadeIn } from '../animations/motion';

import { Tilt } from 'react-tilt';

import Title from '../ui/Title';
import Subtitle from '../ui/Subtitle';
import Description from '../ui/Description';

import SectionWrapper from '../hoc/SectionWrapper';
import { ProjectsText, projects } from '../constants';

const ProjectCard = ({ title, description, img, url, i }) => {
  return (
    <a href={url}>
      <motion.div
        variants={fadeIn('', '', i * 0.2, 0.3)}
        viewport={{ once: true, amount: 0.35 }}
        className='w-full rounded-[20px]'
      >
        <Tilt options={{ max: 45, scale: 1, speed: 450 }}>
          <div className='card-bg rounded-[20px] p-4 min-h-[480px] flex flex-col'>
            <div className='relative w-full h-[300px] md:h-[230px]'>
              <img
                className={'w-full h-full bg-cover object-cover rounded-2xl'}
                src={img}
                alt={title}
              />
              <div className='absolute right-2 top-2'>
                <img
                  width={35}
                  src='https://skillicons.dev/icons?i=github'
                  alt=''
                />
              </div>
            </div>
            <h3 className='text-white text-[22px] mt-4 font-bold'>{title}</h3>
            <p className='mt-4 text-secondary text-[14px]'>{description}</p>
          </div>
        </Tilt>
      </motion.div>
    </a>
  );
};

const ProjectsInitial = () => {
  const getCards = () => {
    return projects.map((card) => {
      const { key, ...data } = card;
      return <ProjectCard key={key} i={key} {...data} />;
    });
  };
  return (
    <div className='container lg-container'>
      <motion.div
        variants={fadeIn('up', '', 0, 0.3)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.1 }}
      >
        <Title text={ProjectsText.title} />
        <Subtitle text={ProjectsText.subtitle} />
        <Description text={ProjectsText.description} />
      </motion.div>
      <section className='grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 md:gap-6 px-1 mt-6'>
        {getCards()}
      </section>
    </div>
  );
};

const Projects = SectionWrapper(ProjectsInitial, 'projects', {
  marginTop: '75px',
});
export default Projects;
