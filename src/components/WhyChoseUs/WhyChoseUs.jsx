import axios from 'axios';
import { useEffect, useState } from 'react';
import ShowWhyUsCard from './ShowWhyUsCard';

const WhyChoseUs = () => {
  const [servicesData, setServicesData] = useState([]);
  useEffect(() => {
    axios.get('/whyus.json').then((response) => {
      setServicesData(response.data);
      console.log(response.data);
    });
  }, []);
  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 mt-10'>
      {servicesData.map((service, index) => (
        <ShowWhyUsCard
          key={index}
          service={service}
        />
      ))}
    </div>
  );
};

export default WhyChoseUs;
