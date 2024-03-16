import { motion } from 'framer-motion';
import { fadeIn } from '../animations/motion';

const Card = ({ url, text, i }) => {
  return (
    <motion.div
      variants={fadeIn('', '', i * 0.2, 0.3)}
      viewport={{ once: true, amount: 0.35 }}
      className='w-full green-pink-gradient p-[2px] text-center rounded-[20px] shadow-card'
    >
      <div className='stack-card-bg rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <img className='scale-[1.3]' src={url} alt={text} />
        <h3 className='text-white text-[22px] font-bold text-center'>{text}</h3>
      </div>
    </motion.div>
  );
};

export default Card;
