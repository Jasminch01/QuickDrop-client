import Lottie from "lottie-react";
import loginAnimate from "../../public/login.json";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../Hooks/UseAuth";
import { saveUser } from "../api/auth";

const SignUp = () => {
  const { handleSubmit, reset, register } = useForm();
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  const createUserSubmit = async ({ name, email, password }) => {
    try {
      const result = await createUser(email, password);
      console.log(result.email);
      await updateUserProfile(name);
      const res = await saveUser(result?.user);
      console.log(res);
      if (res.acknowledged && res.upsertedCount) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
    reset();
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
                <form
                  onSubmit={handleSubmit(createUserSubmit)}
                  className="card-body"
                >
                  <div className="mb-5">
                    <h1 className="text-2xl font-bold text-center">
                      Welcome Back to
                      <span className="text-blue-500"> QuickDrop</span>
                    </h1>
                    <p className="text-center">
                      {`Don't`} Already have Account?
                      <Link to={`/login`} className="text-blue-500">
                        log in
                      </Link>
                    </p>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      {...register("name")}
                      placeholder="Name"
                      id="name"
                      className="input input-bordered"
                      required
                    />
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
                      <span className="label-text">Set Password</span>
                    </label>
                    <input
                      type="password"
                      {...register("password")}
                      id="password"
                      placeholder="set password"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control mt-6 space-y-5">
                    <button
                      type="submit"
                      className="p-3 rounded bg-blue-500 text-white uppercase font-bold"
                    >
                      Sign Up
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

export default SignUp;
