import PropTypes from 'prop-types';
import { useState } from 'react';
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi';

const SelectOptions = ({
  label,
  isRequired,
  placeholder,
  name,
  type,
  onChange,
  defaultValue,
  errorMessage,
  readOnly,
  defaultOption,
  options = [],
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className='w-full flex flex-col gap-2 my-3'>
      <label
        htmlFor={name}
        className='lg:text-[20px] text-[14px] text-gray-400 font-medium'
      >
        {label}{' '}
        {isRequired && label && (
          <span className='text-red-600 text-[22px] font-medium'>*</span>
        )}{' '}
      </label>
      <div className='relative'>
        <select
          defaultValue={defaultOption}
          className='w-[100%] border-2 border-gray bg-gray-100 px-5 lg:py-4 py-2 text-[18px] font-medium text-black placeholder:text-[16px] rounded outline-2 outline-punch-500 cursor-pointer appearance-none'
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          required={isRequired}
          id={name}
          readOnly={readOnly}
          onClick={() => {
            setOpen(!open);
          }}
          onBlur={() => {
            setOpen(false);
          }}
        >
          <option
            value={defaultOption}
            className='text-gray-100'
          >
            {defaultOption}
          </option>
          {options.map((option, index) => (
            <option
              key={index}
              value={option}
            >
              {option}
            </option>
          ))}
        </select>
        {errorMessage && (
          <p className='text-[14px] text-red-500'>{errorMessage}</p>
        )}

        <div
          htmlFor='select'
          className='absolute top-[50%] right-[20px] translate-y-[-50%]'
        >
          {open ? (
            <BiSolidUpArrow className='text-text-gray text-[14px]' />
          ) : (
            <BiSolidDownArrow className='text-text-gray text-[14px]' />
          )}
        </div>
      </div>
    </div>
  );
};

SelectOptions.propTypes = {
  label: PropTypes.string,
  isRequired: PropTypes.bool,
  readOnly: PropTypes.bool,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  defaultValue: PropTypes.string,
  errorMessage: PropTypes.string,
  defaultOption: PropTypes.string,
  options: PropTypes.array,
};

export default SelectOptions;
