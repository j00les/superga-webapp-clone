import {useAppDispatch} from 'hooks/hooks'
import {type FormEvent, useRef} from 'react'
import {useNavigate} from 'react-router-dom'
import {register} from 'store/actions/user'
import {Toast} from '../apis/sweetAlert'

export default function RegisterPage() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const username = useRef<HTMLInputElement>(null)
  const email = useRef<HTMLInputElement>(null)
  const password = useRef<HTMLInputElement>(null)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      await dispatch(
        register({
          username: username.current!.value,
          email: email.current!.value,
          password: password.current!.value
        })
      ).unwrap()
      Toast.fire({
        icon: 'success',
        title: 'Register success'
      })
      navigate('/')
    } catch (error) {
      Toast.fire({
        icon: 'error',
        title: 'Register error'
      })
    }
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={async e => {await handleSubmit(e)}} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                ref={username}
                type="text"
                placeholder="username"
                className="input input-bordered"
              />
            </div>
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
              <input
                ref={password}
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
