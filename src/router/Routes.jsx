import Root from '../layout/Root';
import Home from '../pages/Home';

const routes = [
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
];

export default routes;
