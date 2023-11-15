import PropTypes from 'prop-types';
import PrimaryButton from '../shared/PrimaryButton';

const ShowServiceCard = ({ service }) => {
  const { serviceName, serviceDescription, serviceImage } = service;
  return (
    <div className='border rounded p-5 text-center shadow-md w-fit space-y-6'>
      <img
        src={serviceImage}
        alt={serviceName}
        loading='lazy'
        className='mx-auto'
      />
      <h3 className='text-secondary md:text-3xl text-xl font-semibold'>
        {serviceName}
      </h3>
      <p className='base-text'>{serviceDescription}</p>
      <div className='w-fit mx-auto'>
        <PrimaryButton text='Discover More' />
      </div>
    </div>
  );
};

ShowServiceCard.propTypes = {
  service: PropTypes.object,
};

export default ShowServiceCard;
