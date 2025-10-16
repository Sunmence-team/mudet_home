import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import assets from "../assets/assests";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import axios from "axios";
import { encryptToken } from "../helpers/tokenHelper";
import { toast } from "sonner";
import { MdHome } from "react-icons/md";

const API_URL = import.meta.env.VITE_API_BASE_URL;

const loginSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Username must be at least 3 characters")
    .required("Username is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      rememberMe: false,
    },
    validationSchema: loginSchema,
    onSubmit: async (values, { setSubmitting }) => {
      // console.log("Form submitted:", values);
      setIsSubmitting(true)
      try {
        const response = await axios.post(`${API_URL}/api/login`, values);
        // console.log("Login response data:", response.data);
        if (response.status === 200) {
          const { token, role, user } = response.data;
          const encrypted = encryptToken(token, 5);

          const redirectURL =
            response.data.role === 'admin'
              ? `https://app.mudetrealsolution.com/#/auth-redirect?token=${encodeURIComponent(encrypted)}&role=${role}`
              : `https://app.mudetrealsolution.com/#/auth-redirect?token=${encodeURIComponent(encrypted)}&role=${role}`;
          
          toast.success('Login successful');
          setTimeout(() => {
            toast('Redirecting to dashboard...');
            setTimeout(() => {
              window.location.href = redirectURL;
              setTimeout(() => {
                setIsSubmitting(false)
              }, 200000);
            }, 2000);
          }, 1000);
        }

      } catch (err) {
        console.error("Error during logging in:", err);
        if (axios.isAxiosError(err) && err.response && err.response.status === 401) {
          toast.error(err.response.data.message || "Validation error. Please check your inputs.");
        } else {
          toast.error("An unexpected error occurred while logging in. " + err?.response?.data?.message || err?.message || "Please try again later.");
          console.error("Error during logging in:", err);
        }
      }
    },
  });

  return (
    <div 
      className="min-h-screen flex items-center justify-between relative z-1 md:p-8 p-4 gap-8"
      style={{ 
        backgroundImage: `url(${assets.pic22})`,
        backgroundPosition: "center",
        backgroundSize: "cover" 
      }}  
    >
      <div className="absolute inset-0 bg-black/60 -z-1 p-8 md:px-8 px-4">
        <Link
          to={"/"}
          className="bg-pryClr flex items-center gap-2 px-4 py-2 w-max text-white font-medium rounded-md"
        >
          <MdHome />
          <span>Back to Home</span>
        </Link>
      </div>
      <div className="lg:flex hidden md:w-2/5 w-full flex-col gap-2 text-white">
        <h1 className="md:text-4xl lg:text-5xl font-medium">
          Hello, <br /> Welcome back
        </h1>
        <p className="mt-4 font-extralight md:text-xl lg:text-xl">
          Welcome back! Log in to continue your journey to better health and
          wealth.
        </p>
      </div>
      <div className="flex lg:w-1/2 w-full h-full items-center justify-center bg-white/10 md:p-12 p-8 rounded-4xl backdrop-blur-lg border border-white/20 text-white">
        <div className="w-full space-y-6">
          <h2 className="lg:block hidden text-4xl font-bold text-center md:text-left">
            Login
          </h2>
          <div className="lg:hidden flex w-full flex-col items-center gap-2 text-center text-white">
            <h1 className="font-bold capitalize text-3xl">Welcome back</h1>
            <p className="font-extralight text-lg">Log in to continue your journey.
            </p>
          </div>
          <form onSubmit={formik.handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="block font-extralight mb-2">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pryClr transition duration-300 bg-transparent"
              />
              {formik.touched.username && formik.errors.username ? (
                <p className="text-red-500 text-sm mt-1.5">
                  {formik.errors.username}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor="password" className="block font-extralight mb-2">
                Password
              </label>
              <div className="relative w-full">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pryClr transition duration-300 bg-transparent pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
                >
                  {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                </button>
              </div>
              {formik.touched.password && formik.errors.password ? (
                <p className="text-red-500 text-sm mt-1.5">
                  {formik.errors.password}
                </p>
              ) : null}
            </div>

            <div className="flex items-center justify-between text-sm">
              <label htmlFor="rememberMe" className="flex items-center">
                <input
                  id="rememberMe"
                  name="rememberMe"
                  type="checkbox"
                  onChange={formik.handleChange}
                  checked={formik.values.rememberMe}
                  className="mr-2 accent-pryClr h-4 w-4 rounded appearance-none checked:appearance-auto border border-white bg-transparent"
                />
                Remember me
              </label>
              <a
                href="#"
                className="text-white hover:text-pryClr-dark transition duration-200 hover:underline"
              >
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              disabled={!formik.isValid || isSubmitting}
              className="w-full bg-pryClr hover:bg-pryClr text-white font-medium py-3 rounded-full transition duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;