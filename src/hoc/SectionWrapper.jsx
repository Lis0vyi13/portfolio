import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { Waypoint } from 'react-waypoint';

import { motion } from 'framer-motion';
import { staggerContainer } from '../animations/motion';

import { Context } from '../context/context';

const SectionWrapper = (Component, id, styles) =>
  function HOC(props) {
    const { setIsActive } = useContext(Context);
    const navigate = useNavigate();

    const onEnterHandler = () => {
      setIsActive(id);
      navigate(`${id.toLowerCase()}`);
    };

    return (
      <Waypoint onEnter={onEnterHandler} bottomOffset={'75%'}>
        <motion.section
          variants={staggerContainer()}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.1 }}
          className={`${id} relative z-10`}
          style={{ ...styles }}
        >
          <span className='anchor-span' id={id}>
            &nbsp;
          </span>
          <Component {...props} />
        </motion.section>
      </Waypoint>
    );
  };

export default SectionWrapper;
