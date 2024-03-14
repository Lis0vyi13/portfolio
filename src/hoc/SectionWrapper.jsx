import { motion } from 'framer-motion';
import { staggerContainer } from '../animations/motion';

const SectionWrapper = (Component, id) =>
  function HOC(props) {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
      >
        <span className='anchor-span' id={id}>
          &nbsp;
        </span>
        <Component {...props} />
      </motion.section>
    );
  };

export default SectionWrapper;
