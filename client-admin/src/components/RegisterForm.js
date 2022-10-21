import { useState } from 'react';
import Button from './Button';

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
      <h1>Register</h1>
      <form onSubmit={handleSubmit} className="">
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
        </div>

        <div className="flex flex-col" id="left-side">
          <div className="flex flex-col" id="form-input">
            Email
            <input
              value={input.email}
              onChange={handleChange}
              type="text"
              name="email"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </div>

        <div className="flex flex-col" id="right-side">
          <div className="flex flex-col" id="form-input">
            Password
            <input
              value={input.password}
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="flex flex-col" id="form-input">
            Phone
            <input
              value={input.phoneNumber}
              onChange={handleChange}
              type="phone"
              name="phoneNumber"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="flex flex-col" id="form-input">
            Address
            <input
              value={input.address}
              onChange={handleChange}
              type="text"
              name="address"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
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
