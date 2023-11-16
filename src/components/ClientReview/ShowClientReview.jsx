import PropTypes from 'prop-types';
import StarRating from '../StarRating/StarRating';

const ShowClientReview = ({ review }) => {
  const {
    reviewerName,
    reviewerDesignation,
    clinetReview,
    rating,
    reviewerImage,
  } = review;
  return (
    <div className='bg-punch-100 rounded-lg p-5 md:max-w-xs bg-opacity-50 backdrop-blur-lg'>
      <img
        src={reviewerImage}
        alt='Reviewer Image'
        loading='lazy'
        className='w-[150px] h-[150px] rounded-full object-cover mx-auto mb-3'
      />
      <StarRating initialRating={5} />
      <div className='text-center'>
        {/* name */}
        <p className='text-xl text-white font-bold my-2'>{reviewerName}</p>
        {/* designation */}
        <p className='text-md text-white font-medium'>{reviewerDesignation}</p>
        {/* review */}
        <p className='text-md text-white font-medium mt-3'>{clinetReview}</p>
      </div>
    </div>
  );
};

ShowClientReview.propTypes = {
  review: PropTypes.object,
};

export default ShowClientReview;
