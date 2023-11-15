import ParticlesBackground from '../ParticlesBackground/ParticlesBackground';
import Input from '../shared/Input';
import SelectOptions from '../shared/SelectOptions';
import { useState } from 'react';
import { DatePicker } from 'keep-react';
import TextBox from '../shared/TextBox';
import PrimaryButton from '../shared/PrimaryButton';

const Banner = () => {
  const [date, setDate] = useState(null);
  return (
    <section className='min-h-[90vh] relative backdrop-blur-sm  bg-black xl:px-[8%] xl:py-20 px-[5%] py-10'>
      {/* overlay */}
      {/* particles */}
      <div className='absolute top-0 left-0'>
        <ParticlesBackground />
      </div>
      <div className='max-screen flex lg:justify-between lg:items-start lg:flex-row flex-col justify-center items-center gap-10'>
        {/* left side */}
        <div className='capitalize text-white space-y-6 relative max-w-[517px] '>
          <h1 className='font-semibold text-2xl w-full lg:text-4xl'>
            Affordable SEO Packages For Small Business
          </h1>
          <p className='lg:text-lg text-sm text-offWhite'>
            Finding a High-quality and reputed SEO consulting firm for online
            business marketing and promotion can be a daunting task, especially
            if you own a small business. If you use the wrong promotional
            tactics, it will cost you much, and you may lose your position in
            Google’s SERPs also. So, if you are looking for Affordable SEO
            Package for your small business, we are here for you.
          </p>
          <p className='lg:text-lg text-sm text-offWhite lg:block hidden'>
            We are Microters LLC, a leading and affordable Search Engine
            Optimization services company in the United States. Microters
            provides top-notch and high-quality service at quite affordable
            prices. We are proud to accommodate all businesses and provide the
            best organic SEO services without breaking your bank. Here are the
            SEO packages that you’ll get from us.
          </p>
          <p className='lg:text-lg text-sm text-offWhite lg:block hidden'>
            Finding a High-quality and reputed SEO consulting firm for online
            business marketing and promotion can be a daunting task, especially
            if you own a small business. If you use the wrong promotional
            tactics, it will cost you much, and you may lose your position in
            Google’s SERPs also. So, if you are looking for Affordable SEO
            Package for your small business, we are here for you.
          </p>
        </div>

        {/* right side */}
        <div className='relative'>
          <form className='px-10 py-8 bg-white w-full border-2 border-punch-500 rounded space-y-4 max-w-2xl'>
            <h1 className='font-bold lg:text-[32px] lg:leading-10 text-xl uppercase'>
              Schedule My 30 Minute Consultation Call
            </h1>
            <div className='relative'>
              <hr className='w-[35%] h-[5px] bg-punch-500 relative z-40' />
              <hr className='w-full h-[5px] bg-secondary absolute top-0 left-0' />
            </div>
            <div className='flex justify-center items-center gap-4 lg:flex-row flex-col'>
              <Input
                label='Name'
                type='text'
                isRequired={true}
                name='name'
                placeholder='Your Name'
              />
              <Input
                label='Email'
                type='eamil'
                isRequired={true}
                name='email'
                placeholder='Your Email'
              />
            </div>
            <div className='flex justify-center items-center gap-4 lg:flex-row flex-col'>
              <SelectOptions
                label='Service Type'
                isRequired={true}
                name='serviceType'
                defaultOption='Select Service Type'
                options={[
                  'Amazon Affiliate Website',
                  'WP Speed Optimization',
                  ' Monthly SEO Packages',
                  'Profile Backlink',
                  'AI Content Writing',
                  'Expired WEB 2.0',
                  'Consultation',
                ]}
              />
              <Input
                label='Best Time To Reach'
                type='date'
                isRequired={true}
                name='email'
              />
            </div>
            <TextBox
              label='How can we help you?'
              type='message'
              isRequired={true}
              name='message'
              placeholder='Please decribe your so that we can help you'
            />
            <input
              type='submit'
              value='Submit'
              className='primary-button w-full cursor-pointer'
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Banner;
