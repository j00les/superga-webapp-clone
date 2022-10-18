import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from 'react-router-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
//components
import LoginPage from './pages/LoginPage';
import Root from './routes/Root';
import RegisterForm from './components/RegisterForm';
import TableProduct from './components/TableProduct';
import TableCategory from './components/TableCategory';

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
        path: 'categories',
        element: <TableCategory/>
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
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
