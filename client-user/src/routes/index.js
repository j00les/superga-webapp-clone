import { createBrowserRouter } from 'react-router-dom';
import { DetailPage } from '../pages/DetailPage';
import LandingPage from '../pages/LandingPage';
import Root from './Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '/', element: <LandingPage /> },
      { path: 'detail/:id', element: <DetailPage /> },
      // { path: 'detail', element: <DetailPage /> },
      // { path: 'detail', element: <DetailPage /> },
    ],
  },
]);

export default router;
