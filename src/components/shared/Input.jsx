import PropTypes from 'prop-types';
import { useState } from 'react';
import { AiFillEye } from 'react-icons/ai';

const Input = ({
  label,
  isRequired,
  placeholder,
  name,
  type,
  onChange,
  defaultValue,
  errorMessage,
  readOnly,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className='w-[100%] relative'>
      <label
        htmlFor={name}
        className='lg:text-[20px] text-[14px] text-gray-400 font-medium'
      >
        {label}{' '}
        {isRequired && label && (
          <span className='text-red-600 text-[22px] font-medium'>*</span>
        )}{' '}
      </label>
      <input
        className='w-[100%] border-2 border-gray bg-gray-100 px-5 lg:py-4 py-2 text-[18px] font-medium text-[#000]  placeholder:text-[16px] rounded outline-2 outline-punch-500'
        type={showPassword ? 'text' : type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        required={isRequired}
        id={name}
        readOnly={readOnly}
        defaultValue={defaultValue}
      />
      {type === 'password' && (
        <AiFillEye
          title='Click To Show or Hide Password'
          onClick={() => {
            setShowPassword(!showPassword);
          }}
          className={`absolute top-[40px] md:top-[35px] md:right-[20px] right-[10px] text-[24px] md:text-[32px] ${
            showPassword ? 'text-sky-500' : 'text-gray-700'
          } cursor-pointer`}
        />
      )}
      {errorMessage && (
        <p className='text-[14px] text-red-500'>{errorMessage}</p>
      )}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  isRequired: PropTypes.bool,
  readOnly: PropTypes.bool,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  defaultValue: PropTypes.string,
  errorMessage: PropTypes.string,
};

export default Input;
