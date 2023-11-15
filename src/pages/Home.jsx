import Banner from '../components/Banner/Banner';
import BrandLogos from '../components/BrandLogos/BrandLogos';
import PageTitle from '../components/shared/PageTitle';
import TwoSideContent from '../components/shared/TwoSideContent';
import statAnim from '../assets/animation/statisctics-anim.json';
import SectionTitle from '../components/shared/SectionTitle';
import ServiceCards from '../components/ServiceCards/ServiceCards';
import ParticlesBackground from '../components/ParticlesBackground/ParticlesBackground';

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
      <div className='max-screen mt-20 mb-10 px-[5%] lg:px-0'>
        <TwoSideContent animation={statAnim}>
          <div className='space-y-5'>
            <h2 className='font-bold lg:text-[2.5rem] text-2xl max-w-2xl leading-[45px] text-secondary'>
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

      {/* our affordable section */}
      <div className='my-10 max-screen px-[5%] lg:px-0'>
        <SectionTitle
          title='Our affordable'
          colorTitle='Search Engine Optimization services'
          subText='Through our years of experience, and top-notch SEO services, we’ll make your site stand apart from the crowd and reach the top position.'
        />
        <ServiceCards />
      </div>

      {/* our affordable section */}
      <div className='my-10 bg-black relative backdrop-blur-sm'>
        <div className='px-[5%] lg:px-0  py-10 max-screen'>
          <TwoSideContent image='https://microters.com/wp-content/uploads/2021/11/Why-Does-Your-Business-Need-SEO.png'>
            <div className='space-y-5'>
              <h2 className='font-bold lg:text-[2.5rem] text-2xl max-w-2xl leading-[45px] text-white'>
                Why does your business need SEO?
              </h2>
              <p className='leading-8 text-[19px] max-w-[650px] text-white'>
                From local to global, regardless of the size of your business,
                your primary goal should be to rank higher and reach more
                organic traffic. And to make this possible, SEO is one of the
                most reliable ways. SEO optimizes your website, boosts your
                online presence, reaches more people, and generates higher
                sales.
              </p>
            </div>
          </TwoSideContent>
        </div>
      </div>

      {/* why microters section */}
      <div className='my-10 max-screen px-[5%] lg:px-0'>
        <SectionTitle
          title='Why'
          colorTitle='Microters As Your SEO Company'
          extraText='?'
          subText='If you want to take your business to the next level, partnering with us can be profitable for you. We know how things work, and our proven record speaks for us.'
        />
        <ServiceCards />
      </div>
    </div>
  );
};

export default Home;
