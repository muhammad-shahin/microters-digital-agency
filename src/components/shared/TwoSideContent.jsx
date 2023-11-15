import PropTypes from 'prop-types';
import Lottie from 'lottie-react';
import logo from '../../assets/microters-logo.png';

const TwoSideContent = ({ children, animation, image }) => {
  return (
    <div className={`flex lg:justify-between justify-center items-center`}>
      {/* left side text content */}
      <div>{children}</div>

      {/* right side iamge or animation content */}
      <div className='hidden lg:block'>
        {animation && (
          <div>
            <img
              src={logo}
              alt='Digital Agency Logo'
              className='mx-auto mt-8'
            />
            <Lottie
              loop
              animationData={animation}
            />
          </div>
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
  animation: PropTypes.any,
  image: PropTypes.string,
};

export default TwoSideContent;
