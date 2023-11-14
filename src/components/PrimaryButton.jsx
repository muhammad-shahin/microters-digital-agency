import PropTypes from 'prop-types';

const PrimaryButton = ({ text, icon }) => {
  return (
    <button className='lg:px-5 px-2 lg:py-2 py-1 font-semibold lg:text-[18px] text-[14px] rounded-full bg-punch-500 text-white border-2 border-transparent hover:text-punch-500 hover:bg-transparent hover:border-punch-500 duration-500 uppercase flex justify-center items-center gap-2'>
      {icon}
      {text}
    </button>
  );
};

PrimaryButton.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.node,
};

export default PrimaryButton;
