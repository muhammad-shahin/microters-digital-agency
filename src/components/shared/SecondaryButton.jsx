import PropTypes from 'prop-types';

const SecondaryButton = ({ text, icon }) => {
  return (
    <button className='lg:px-5 px-2 lg:py-2 py-1 font-semibold lg:text-[18px] text-[14px]  rounded-full hover:bg-punch-500  hover:text-white border-2 hover:border-transparent text-punch-500 bg-transparent border-punch-500 duration-500 uppercase flex justify-center items-center gap-2'>
      {icon}
      {text}
    </button>
  );
};

SecondaryButton.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.node,
};

export default SecondaryButton;
