import axios from 'axios';
import { useEffect, useState } from 'react';
import ShowServiceCard from './ShowServiceCard';

const ServiceCards = () => {
  const [servicesData, setServicesData] = useState([]);
  useEffect(() => {
    axios.get('/services.json').then((response) => {
      setServicesData(response.data);
    });
  }, []);
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-10'>
      {servicesData.map((service, index) => (
        <ShowServiceCard
          key={index}
          service={service}
        />
      ))}
    </div>
  );
};

export default ServiceCards;
