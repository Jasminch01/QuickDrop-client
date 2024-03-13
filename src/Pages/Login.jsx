import Lottie from "lottie-react";
import loginAnimate from "../../public/login.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../Hooks/UseAuth";
import { useForm } from "react-hook-form";
const Login = () => {
  const { handleSubmit, reset, register } = useForm();
  const { signIn, signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const userLogin = async ({ email, password }) => {
    try {
      const result = await signIn(email, password);
      console.log(result);
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error);
    }
    reset();
  };
  const googleLogin = async () => {
    try {
      const result = await signInWithGoogle();
      console.log(result);
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex md:flex-row flex-col">
      <div className="bg-blue-200 flex-1">
        <div className="hero">
          <div className="flex items-center  flex-col lg:flex-row">
            <div className="flex-1">
              <Lottie
                animationData={loginAnimate}
                loop
                height={300}
                width={300}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="md:h-screen flex-1">
        <div className="flex-1 bg-white">
          <div className="hero min-h-screen">
            <div className="flex  items-center  gap-5 max-w-7xl mx-auto flex-col lg:flex-row-reverse">
              <div className="card shrink-0 w-full max-w-sm">
                <form onSubmit={handleSubmit(userLogin)} className="card-body">
                  <div className="mb-5">
                    <h1 className="text-2xl font-bold text-center">
                      Welcome Back to
                      <span className="text-blue-500"> QuickDrop</span>
                    </h1>
                    <p className="text-center">
                      {`Don't`} have Account yet?
                      <Link to={`/sign-up`} className="text-blue-500">
                        Sign up
                      </Link>
                    </p>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      {...register("email")}
                      id="email"
                      placeholder="email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      {...register("password")}
                      id="password"
                      placeholder="password"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control mt-6 space-y-5">
                    <button
                      type="submit"
                      className="p-3 rounded bg-blue-500 text-white uppercase font-bold"
                    >
                      Login
                    </button>
                  </div>
                  <p className="text-center">OR</p>
                  <div className="text-center">
                    <button
                      onClick={googleLogin}
                      className="py-2 bg-slate-200 rounded px-4 text-white uppercase font-bold"
                    >
                      <FcGoogle size={20} />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
