const Input = ({ label, name, placeholder, type = 'text', onChange = '' }) => {
  return (
    <label className='flex flex-col' htmlFor={name}>
      <span>{label}</span>
      <input
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
      />
    </label>
  );
};

export default Input;
