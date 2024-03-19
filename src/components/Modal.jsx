const Modal = ({ isActive }) => {
  return (
    <div
      className={`${
        isActive
          ? 'bottom-10 opacity-100 pointer-events-auto'
          : 'bottom-[-100%] opacity-0 pointer-events-none'
      } transition-all duration-500 bg-tertiary p-8 z-50 rounded-lg fixed -translate-x-1/2 left-1/2`}
    >
      <p className='text-xl font-bold'>Congratulations! Sent successfully!</p>
    </div>
  );
};

export default Modal;
