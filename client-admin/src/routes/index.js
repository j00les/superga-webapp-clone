import React from 'react';
import { createBrowserRouter, redirect } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import RegisterForm from '../components/RegisterForm';
import TableProduct from '../components/TableProduct';
import TableCategory from '../components/TableCategory';
import ModalForm from '../components/ModalForm';

import Root from './Root';

const router = createBrowserRouter([
  {
    path: '/',
    loader: () => {
      const token = localStorage.getItem('access_token');
      if (!token) throw redirect('/login');
    },
    element: <Root />,
    children: [
      {
        path: 'register',
        element: <RegisterForm />,
      },
      {
        path: '/',
        element: <TableProduct />,
      },

      {
        path: 'add',
        element: <ModalForm />,
      },
      {
        path: 'categories',
        element: <TableCategory />,
      },
    ],
  },

  {
    path: '/login',
    loader: () => {
      const token = localStorage.getItem('access_token');
      if (token) throw redirect('/');
    },
    element: <LoginPage />,
  },

  // {
  //   path: '/add-product',
  //   element: <ModalForm />,
  // },
]);

export default router;
