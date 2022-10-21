import { useState } from 'react';
import Button from './Button';
import { Header } from './Header';

const RegisterPage = () => {
  const [input, setInput] = useState({
    username: '',
    email: '',
    password: '',
    phoneNumber: '',
    address: '',
  });

  const handleChange = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'post',
        mode: 'cors',
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(input),
      });

      if (!response.ok) throw new Error("Can't fetch data");

      const data = await response.json();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header view="register" />
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
              type="text"
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
              type="text"
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
          <Button type="cancel" />
        </div>
      </form>
    </>
  );
};
export default RegisterPage;
