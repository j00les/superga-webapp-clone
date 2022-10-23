import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Button from './Button';
import { Header } from './Header';
import { Link, useNavigate } from 'react-router-dom';
const baseURL = 'https://superga-react-app.herokuapp.com/admin';

const RegisterPage = () => {
  const [input, setInput] = useState({
    username: '',
    email: '',
    password: '',
    phoneNumber: '',
    address: '',
  });

  const navigate = useNavigate();

  const [errors, setError] = useState([]);

  const handleChange = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch(`${baseURL}/register`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(input),
      });

      if (response.ok) {
        const toastId = toast.loading('Wait a minute..');
        toast.success('Register success');
        toast.dismiss(toastId);
      } else if (!response.ok) {
        const err = await response.json();
        throw err.message;
      }
      navigate('/');
    } catch (err) {
      setError([...err]);
    }
  };

  const renderedErrors = errors.map(el => {
    return (
      <>
        <div className="bg-red-300 ">
          <span className="text-red-700">{el}</span>
        </div>
      </>
    );
  });

  return (
    <>
      <Header view="register" />

      {errors && <div className="mt-5">{renderedErrors}</div>}

      <form onSubmit={handleSubmit} className="my-5">
        <div id="name-container w-full">
          <div className="flex grow flex-col w-full" id="form-input">
            Username
            <input
              value={input.username}
              onChange={handleChange}
              name="username"
              type="text"
              placeholder="Type here"
              className="input  input-bordered w-full max-w-s"
            />
          </div>
          <div className="flex grow flex-col w-full" id="form-input">
            Email
            <input
              value={input.email}
              onChange={handleChange}
              name="email"
              type="text"
              placeholder="Type here"
              className="input  input-bordered w-full max-w-s"
            />
          </div>
          <div className="flex grow flex-col w-full" id="form-input">
            Password
            <input
              value={input.password}
              onChange={handleChange}
              name="password"
              type="password"
              placeholder="Type here"
              className="input  input-bordered w-full max-w-s"
            />
          </div>
          <div className="flex grow flex-col w-full" id="form-input">
            Phone
            <input
              value={input.phoneNumber}
              onChange={handleChange}
              name="phoneNumber"
              type="phone"
              placeholder="Type here"
              className="input  input-bordered w-full max-w-s"
            />
          </div>
          <div className="flex grow flex-col w-full" id="form-input">
            Address
            <input
              value={input.address}
              onChange={handleChange}
              name="address"
              type="text"
              placeholder="Type here"
              className="input  input-bordered w-full max-w-s"
            />
          </div>
        </div>

        <div className="float float-right mt-5 mr-2">
          <Button type="submit" />
          <Link to="/" className=" btn btn-error btn-sm">
            CANCEL
          </Link>
        </div>
      </form>

      <Toaster
        position="top-right" // Used to adapt the animati
      />
    </>
  );
};
export default RegisterPage;
