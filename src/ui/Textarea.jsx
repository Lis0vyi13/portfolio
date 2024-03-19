const Textarea = ({ label, name, placeholder, value, onChange = '' }) => {
  return (
    <div className='form-element flex flex-col gap-1'>
      <label>
        <span>{label}</span>
      </label>

      <textarea
        className='resize-y w-full bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
        name={name}
        id={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        required
        cols='30'
        rows='7'
      ></textarea>
    </div>
  );
};

export default Textarea;
