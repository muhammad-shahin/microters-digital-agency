import PropTypes from 'prop-types';
const TextBox = ({
  label,
  name,
  placeholder,
  value,
  handleChange,
  isRequired,
  message,
  readOnly,
  defaultValue,
}) => {
  return (
    <div className='flex flex-col gap-2 w-full'>
      <label className='lg:text-[20px] text-[14px] text-gray-400 font-medium'>
        {label}{' '}
        {isRequired && label && (
          <span className='text-red-600 text-[22px] font-medium'>*</span>
        )}{' '}
      </label>
      <div className='relative'>
        <textarea
          className='w-[100%] border-2 border-gray bg-gray-100 px-5 lg:py-4 py-2 text-[18px] font-medium text-[#000]  placeholder:text-[16px] rounded outline-2 outline-punch-500'
          name={name}
          cols='20'
          rows='4'
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          required={isRequired}
          readOnly={readOnly}
          defaultValue={defaultValue}
        ></textarea>
      </div>
      {message && (
        <p className='text-[14px] font-medium text-purple mt-2 max-w-[300px] mx-auto'>
          {message}
        </p>
      )}
    </div>
  );
};
TextBox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  message: PropTypes.string,
  handleChange: PropTypes.func,
  isRequired: PropTypes.bool,
  readOnly: PropTypes.bool,
  defaultValue: PropTypes.string,
};
export default TextBox;
