import './Loader.css';

const Loader = () => {
  return (
    <div className='preloader bg-main transition-all opacity-1 bg-blur z-[10000]'>
      <div className='preloader__box'>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Loader;
