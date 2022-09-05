import React from "react";
import wave from "../public/wave.png";
import unlockSvg from "../public/unlock.svg";
import avatarSvg from "../public/avatar.svg";
import Input from "../components/ui/Input";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../redux/action/user";
const Login = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onLoginClick = (data) => {
    dispatch(login(data));
  };
  return (
    <div>
      <img
        src={wave.src}
        className="fixed hidden lg:block inset-0 h-full"
        style={{ zIndex: -1 }}
      />
      <div className="w-screen h-screen flex flex-col justify-center items-center lg:grid lg:grid-cols-2">
        <img
          src={unlockSvg.src}
          className="hidden lg:block w-1/2 hover:scale-150 transition-all duration-500 transform mx-auto"
        />
        <form className="flex flex-col justify-center  items-center w-1/2 max-w-sm">
          <img src={avatarSvg.src} className="w-32" />
          <h2 className="my-8 font-display font-bold text-3xl text-gray-700 text-center">
            Welcome to you
          </h2>
          <div className="relative w-full">
            <Input
              error={errors.email}
              label="Email"
              placeholder="email@address.com"
              {...register("email", {
                required: {
                  value: true,
                  message: "Please enter a email address",
                },
                pattern: {
                  value:
                    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
                  message: "Please enter a valid email address",
                },
              })}
            />
          </div>
          <div className="relative w-full mt-8">
            <Input
              type="password"
              error={errors.password}
              label="Password"
              placeholder="Password"
              {...register("password", {
                required: {
                  value: true,
                  message: "Please enter a password",
                },
                minLength: {
                  value: 6,
                  message: "Please enter a minimum 6 character password ",
                },
              })}
            />
          </div>
          <a href="#" className="self-end mt-4 text-gray-600 font-bold">
            Forgot password?
          </a>
          <a
            onClick={handleSubmit(onLoginClick)}
            href="#"
            className="py-3 px-20 bg-[#F9A826] rounded-full text-white font-bold uppercase text-base mt-4 transform hover:translate-y-1 transition-all duration-500"
          >
            Login
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
