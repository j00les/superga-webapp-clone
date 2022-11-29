import { useRef } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Toast } from "../apis/sweetAlert";
import { login } from "../store/actions/user";

export default function LoginPage() {
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(login({ email: email.current.value, password: password.current.value }))
      .then(() => {
        navigate("/");
        Toast.fire({
          icon: "success",
          title: "Login Success",
        });
      })
      .catch(() => {
        Toast.fire({
          icon: "error",
          title: "Check your email/password",
        });
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form
            onSubmit={e => {
              handleSubmit(e);
            }}
            className="card-body"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input ref={email} type="text" placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input ref={password} type="password" placeholder="password" className="input input-bordered" />
              <label className="label">
                <span className="label-text-alt link link-hover">Forgot password?</span>
              </label>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
              <p>
                don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
