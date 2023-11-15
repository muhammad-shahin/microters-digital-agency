import PropTypes from 'prop-types';

const SectionTitle = ({ title, colorTitle, extraText, subText }) => {
  return (
    <div>
      <h2 className='text-secondary font-bold md:leading-[45px] lg:text-[36px] md:text-[28px] text-[20px] text-center'>
        {title} <span className='text-punch-600'>{colorTitle}</span> {extraText}
      </h2>
      <p className='base-text mx-auto text-center'>{subText}</p>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string,
  colorTitle: PropTypes.string,
  extraText: PropTypes.string,
  subText: PropTypes.string,
};

export default SectionTitle;
