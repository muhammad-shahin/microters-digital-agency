import Banner from '../components/Banner/Banner';
import BrandLogos from '../components/BrandLogos/BrandLogos';
import PageTitle from '../components/shared/PageTitle';

const Home = () => {
  PageTitle('Microters | Digital Agency');
  return (
    <div className=''>
      <Banner />

      {/* have seen on section */}
      <div className='my-10'>
        <h2 className='lg:text-5xl text-2xl text-gray-400 font-bold uppercase text-center mb-6'>
          You May Have Seen Us On
        </h2>
        <BrandLogos />
      </div>
    </div>
  );
};

export default Home;
