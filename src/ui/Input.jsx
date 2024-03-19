const Input = ({
  label,
  name,
  placeholder,
  value,
  type = 'text',
  onChange = '',
}) => {
  return (
    <div className='form-element flex flex-col gap-1'>
      <label>
        <span>{label}</span>{' '}
      </label>

      <input
        required
        name={name}
        id={name}
        value={value}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
      />
    </div>
  );
};

export default Input;
