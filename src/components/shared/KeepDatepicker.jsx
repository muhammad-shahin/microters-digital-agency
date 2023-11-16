import PropTypes from 'prop-types';
import { useState } from 'react';
import { AiFillEye } from 'react-icons/ai';
import { DatePicker } from 'keep-react';

const KeepDatepicker = ({
  label,
  isRequired,
  name,
  type,
  errorMessage,
  setDate,
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
      <div className='h-full w-full overflow-auto'>
        <DatePicker singleDatePicker={setDate}>
          <DatePicker.SingleDate />
        </DatePicker>
      </div>
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

KeepDatepicker.propTypes = {
  label: PropTypes.string,
  isRequired: PropTypes.bool,
  readOnly: PropTypes.bool,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  defaultValue: PropTypes.string,
  errorMessage: PropTypes.string,
  setDate: PropTypes.func,
};

export default KeepDatepicker;
