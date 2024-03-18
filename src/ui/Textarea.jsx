const Textarea = ({ label, name, placeholder, onChange = '' }) => {
  return (
    <label className='flex flex-col' htmlFor={name}>
      <span>{label}</span>
      <textarea
        className='resize-y	bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        id={name}
        cols='30'
        rows='10'
      ></textarea>
    </label>
  );
};

export default Textarea;
