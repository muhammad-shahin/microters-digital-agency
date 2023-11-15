import PropTypes from 'prop-types';

const ShowWhyUsCard = ({ service }) => {
  const { serviceName, serviceDescription, serviceImage } = service;
  return (
    <div className='border rounded p-5 text-center shadow-md w-fit space-y-6 max-w-[350px]'>
      <img
        src={serviceImage}
        alt={serviceName}
        loading='lazy'
        className='mx-auto'
      />
      <h3 className='text-secondary md:text-xl text-lg font-bold'>
        {serviceName}
      </h3>
      <p className='base-text'>{serviceDescription}</p>
    </div>
  );
};

ShowWhyUsCard.propTypes = {
  service: PropTypes.object,
};

export default ShowWhyUsCard;
