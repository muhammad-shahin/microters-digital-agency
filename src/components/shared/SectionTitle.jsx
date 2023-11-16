import PropTypes from 'prop-types';

const SectionTitle = ({ title, colorTitle, extraText, subText, textColor }) => {
  return (
    <div>
      <h2
        className={`text-secondary font-bold md:leading-[45px] lg:text-[36px] md:text-[28px] text-[20px] text-center ${
          textColor && textColor
        }`}
      >
        {title} <span className='text-punch-600'>{colorTitle}</span> {extraText}
      </h2>
      <p
        className={`leading-8 text-[19px] max-w-[650px] mx-auto text-center ${
          textColor ? textColor : 'text-[#6a738e]'
        }`}
      >
        {subText}
      </p>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string,
  colorTitle: PropTypes.string,
  extraText: PropTypes.string,
  subText: PropTypes.string,
  textColor: PropTypes.string,
};

export default SectionTitle;
