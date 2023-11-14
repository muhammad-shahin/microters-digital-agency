import { NavLink } from 'react-router-dom';
import logo from '../assets/microters-logo.png';
import { IoIosArrowDown } from 'react-icons/io';
import SecondaryButton from '../components/shared/SecondaryButton';
import { Twirl as Hamburger } from 'hamburger-react';
import { useState } from 'react';
const Navbar = () => {
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const handleOpenSubMenu = () => {
    setOpenSubMenu(!openSubMenu);
  };
  return (
    <nav className='py-6 max-w-[1340px] mx-auto flex justify-between items-center relative px-[5%] lg:px-0'>
      {/* logo */}
      <div>
        <img
          src={logo}
          alt='Website Logo'
          className='lg:w-full w-[120px]'
        />
      </div>

      {/* nav items */}

      {/* home */}
      <ul
        className={`flex lg:flex-row flex-col bg-punch-50 lg:bg-transparent justify-center items-center gap-6 absolute lg:static top-0 ${
          isOpen ? 'right-0' : 'right-[-100%]'
        } w-full lg:w-auto h-screen lg:h-auto duration-500`}
      >
        <NavLink to='/'>
          <li className='nav-item'>Home</li>
        </NavLink>

        {/* services */}
        <NavLink
          onMouseEnter={() => setOpenSubMenu(true)}
          onMouseLeave={() => setOpenSubMenu(false)}
          onClick={handleOpenSubMenu}
        >
          <div className='relative'>
            <li className='nav-item flex justify-center items-center gap-1'>
              Services
              <IoIosArrowDown />
            </li>
            <ul
              className={`absolute lg:top-10 lg:bottom-0 lg:left-0 lg:translate-x-0 min-w-[280px] ${
                openSubMenu ? 'scale-100 origin-top' : 'scale-0 origin-top'
              } duration-500 botoom-[100%] left-[50%] translate-x-[-50%] bg-white`}
            >
              <hr className='w-full h-[6px] bg-punch-500' />
              <hr />
              <li className='nav-item nasted-nav-item'>
                <NavLink to='/amazon-affiliate-website'>
                  Amazon Affiliate Website
                </NavLink>
              </li>
              <hr />
              <li className='nav-item nasted-nav-item'>
                <NavLink to='/wp-speed-optimization'>
                  WP Speed Optimization
                </NavLink>
              </li>
              <hr />
              <li className='nav-item nasted-nav-item'>
                <NavLink to='/monthly-seo-packages'>
                  Monthly SEO Packages
                </NavLink>
              </li>
              <hr />
              <li className='nav-item nasted-nav-item'>
                <NavLink to='/profile-backlink'>Profile Backlink</NavLink>
              </li>
              <hr />
              <li className='nav-item nasted-nav-item'>
                <NavLink to='/ai-content-writing'>AI Content Writing</NavLink>
              </li>
              <hr />
              <li className='nav-item nasted-nav-item'>
                <NavLink to='/expired-web-2'>Expired WEB 2.0</NavLink>
              </li>
              <hr className='w-full h-[8px] bg-punch-500' />
            </ul>
          </div>
        </NavLink>

        {/* about */}
        <NavLink to='/about'>
          <li className='nav-item'>About Us</li>
        </NavLink>

        {/* contact */}
        <NavLink to='/contact'>
          <li className='nav-item'>Contact Us</li>
        </NavLink>
      </ul>

      {/* action button */}
      <div className='hidden sm:block'>
        <SecondaryButton text='Get A Free Quote' />
      </div>

      {/* hamburger icon */}
      <div className='lg:hidden block'>
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={26}
        />
      </div>
    </nav>
  );
};

export default Navbar;
