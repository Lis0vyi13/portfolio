import { motion } from 'framer-motion';
import { staggerContainer } from '../animations/motion';

const SectionWrapper = (Component, id, marginTop) =>
  function HOC(props) {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.1 }}
        className={`${id} relative z-10`}
        style={{ marginTop }}
      >
        <span className='anchor-span' id={id}>
          &nbsp;
        </span>
        <Component {...props} />
      </motion.section>
    );
  };

export default SectionWrapper;
