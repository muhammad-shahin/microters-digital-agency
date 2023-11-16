import axios from 'axios';
import { useEffect, useState } from 'react';
import BlogPostCard from './BlogPostCard';
import SecondaryButton from '../shared/SecondaryButton';

const BlogPost = () => {
  const [blogPostData, setBlogPostData] = useState([]);
  const [currentBlog, setCurrentBlog] = useState(3);

  const handleLoadMore = () => {
    if (currentBlog <= 3) {
      setCurrentBlog(blogPostData.length);
    } else {
      setCurrentBlog(3);
    }
  };
  useEffect(() => {
    axios.get('/blogPosts.json').then((response) => {
      console.log(response.data);
      setBlogPostData(response.data);
    });
  }, []);
  return (
    <div className='w-full space-y-6'>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-10'>
        {blogPostData.slice(0, currentBlog).map((post, index) => (
          <BlogPostCard
            key={index}
            post={post}
          />
        ))}
      </div>
      <div className='mx-auto w-fit'>
        <SecondaryButton
          text={`${currentBlog <= 3 ? 'See More' : 'See Less'}`}
          handleClick={handleLoadMore}
        />
      </div>
    </div>
  );
};

export default BlogPost;
