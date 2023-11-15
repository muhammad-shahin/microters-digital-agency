import PropTypes from 'prop-types';
import Lottie from 'lottie-react';

const TwoSideContent = ({ children, animation, image }) => {
  return (
    <div
      className={`flex lg:justify-between lg:items-start justify-center items-center`}
    >
      {/* left side text content */}
      <div>{children}</div>

      {/* right side iamge or animation content */}
      <div className='hidden lg:block'>
        {animation && (
          <Lottie
            loop
            animationData={animation}
          />
        )}
        {image && (
          <img
            src={image}
            alt='Statistics Image'
            loading='lazy'
          />
        )}
      </div>
    </div>
  );
};

TwoSideContent.propTypes = {
  children: PropTypes.node,
};

export default TwoSideContent;
