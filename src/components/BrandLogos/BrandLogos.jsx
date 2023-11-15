import './BrandLogos.css';
import Marquee from 'react-fast-marquee';

const BrandLogos = () => {
  const logos = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Moz_logo.svg/2560px-Moz_logo.svg.png',
    'https://searchengineland.com/wp-content/seloads/2016/01/smx-logo.png',
    'https://www.smartinsights.com/wp-content/themes/smartinsights/images/smart/logo/si-logo-black.png',
    'https://ml.globenewswire.com/Resource/Download/168c58af-b99a-4ea5-978e-75ef70a5b954?size=2',
    'https://do3z7e6uuakno.cloudfront.net/uploads/event/logo/1090627/82eb8e6827f0cab8b1456bff30c6513b.jpg',
    ' https://res.cloudinary.com/softwarepundit/image/upload/c_lfill/dpr_1.0/f_auto/h_800/q_auto/w_800/v1/software/seranking-logo',
    'https://i.ibb.co/d2fjH76/6310bb301bd0e6d89cb369e9.png',
  ];
  return (
    <div className=''>
      <Marquee
        speed={100}
        className=''
      >
        <div className='flex justify-between items-center lg:gap-28 sm:gap-8 w-full'>
          {logos.map((logo, index) => (
            <img
              className='logo'
              src={logo}
              key={index}
              loading='lazy'
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default BrandLogos;
