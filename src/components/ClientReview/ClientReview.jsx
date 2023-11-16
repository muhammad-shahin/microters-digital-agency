import axios from 'axios';
import { useEffect, useState } from 'react';
import ShowClientReview from './ShowClientReview';

const ClientReview = () => {
  const [reviewData, setReviewData] = useState([]);
  useEffect(() => {
    axios.get('/clientReview.json').then((response) => {
      setReviewData(response.data);
    });
  }, []);
  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 mt-10'>
      {reviewData.map((review, index) => (
        <ShowClientReview
          key={index}
          review={review}
        />
      ))}
    </div>
  );
};

export default ClientReview;
