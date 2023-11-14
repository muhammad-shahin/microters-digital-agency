import PropTypes from 'prop-types';

const PrimaryButton = ({ text, icon }) => {
  return (
    <button className='primary-button'>
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
