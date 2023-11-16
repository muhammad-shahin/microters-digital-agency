import PropTypes from 'prop-types';
import PrimaryButton from '../shared/PrimaryButton';

const BlogPostCard = ({ post }) => {
  const { postTitle, postShortDescription, postDate, postThumbnail } = post;
  return (
    <div className='max-w-[450px] bg-white shadow-lg'>
      {/* post image */}
      <div>
        <img
          src={postThumbnail}
          alt=''
          className='w-full object-cover h-[300px]'
          loading='lazy'
        />
      </div>

      {/* date, title, and short reading */}
      <div className='mt-6 space-y-3 px-5 pb-5'>
        <p className='text-sm text-[#6a738e]'>{postDate}</p>
        <p className='lg:text-2xl text-lg text-secondary  h-[70px]'>
          {postTitle}
        </p>
        <p className='base-text mb-auto'>
          {postShortDescription.slice(0, 110)}..
        </p>
        <PrimaryButton text='Read More' />
      </div>
    </div>
  );
};

BlogPostCard.propTypes = {
  post: PropTypes.object,
};

export default BlogPostCard;
