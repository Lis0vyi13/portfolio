const Card = ({ url, text }) => {
  return (
    <div className='w-full green-pink-gradient p-[2px] text-center rounded-[20px] shadow-card'>
      <div className='stack-card-bg rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <img className='scale-[1.3]' src={url} alt={text} />
        <h3 className='text-white text-[22px] font-bold text-center'>{text}</h3>
      </div>
    </div>
  );
};

export default Card;
