import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <main className='font-realway'>
      <Outlet />
    </main>
  );
};

export default Root;
