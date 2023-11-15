import Banner from '../components/Banner/Banner';
import BrandLogos from '../components/BrandLogos/BrandLogos';
import PageTitle from '../components/shared/PageTitle';
import TwoSideContent from '../components/shared/TwoSideContent';
import statAnim from '../assets/animation/statisctics-anim.json';

const Home = () => {
  PageTitle('Microters | Digital Agency');
  return (
    <div className=''>
      <Banner />

      {/* have seen on section */}
      <div className='py-10 bg-[#F1F1F1]'>
        <h2 className='lg:text-5xl text-2xl text-gray-400 font-bold uppercase text-center mb-6'>
          You May Have Seen Us On
        </h2>
        <BrandLogos />
      </div>

      {/* improve your business section */}
      <div className='max-screen my-20 px-[5%] lg:px-0'>
        <TwoSideContent animation={statAnim}>
          <div className='space-y-5'>
            <h2 className='font-bold lg:text-[2.5rem] text-2xl max-w-2xl leading-[45px]'>
              Improve Your Business With a Trusted SEO Provider Company
            </h2>
            <p className='base-text'>
              Microters has worked with over 500 businesses worldwide with
              top-quality SEO services. We have been helping businesses for more
              than 10 years with our best SEO services to make their business
              more profitable. Our team members are highly experienced to design
              and execute SEO strategies for various platforms like Google,
              Bing, SMM, YouTube, and more.
            </p>
            <p className='base-text'>
              The best part is, our efforts are not limited to creating SEO
              strategies only, but we can also ensure comprehensive digital
              marketing services. Microters is a certified digital marketing
              company with more than 30 team members. All of our team members
              have years of experience in providing digital marketing services.
            </p>
            <p className='base-text'>
              If you have a business and want to know how digital marketing can
              help your business to grow, we are offering you digital marketing
              consultation at very affordable charges.
            </p>
          </div>
        </TwoSideContent>
      </div>
    </div>
  );
};

export default Home;
