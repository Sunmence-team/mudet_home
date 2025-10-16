import React from "react";
import assets from "../assets/assests";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { toast, Toaster } from "sonner";

// Validation schema
const emailValidationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Email is required"),
});

const API_URL = import.meta.env.VITE_API_BASE_URL;

const Footer = () => {
  return (
    <>
      <div className="w-full flex bg-pryClr items-center justify-center text-black py-12 md:py-16 border-t border-white/20">
        <div className="w-[90%] flex flex-col gap-8 md:flex-row md:h-[25vh] text-white">
          {/* Left Section */}
          <div className="flex-[2.5] flex flex-col justify-between gap-6 md:gap-0">
            <div>
              <p className="font-bold text-xl md:text-xl lg:text-2xl">
                Mudet Real <br /> Solution Limited
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-bold text-base">Follow Us</p>
              <div className="flex gap-5 md:gap-6">
                <img src={assets.pic19} className="w-6" alt="Social 1" />
                <img src={assets.pic20} className="w-6" alt="Social 2" />
                <img src={assets.pic21} className="w-6" alt="Social 3" />
              </div>
            </div>
          </div>

          {/* Middle Section */}
          <div className="flex-[5] flex flex-col justify-between gap-8 md:gap-0">
            <div className="grid grid-cols-2 gap-3 md:flex md:gap-3">
              <Link to="/" className="text-base hover:underline">Home</Link>
              <Link to="/about" className="text-base hover:underline">About Us</Link>
              <Link to="/product" className="text-base hover:underline">Products</Link>
              <Link to="/plan" className="text-base hover:underline">Compensation Plan</Link>
              <Link to="/contact" className="text-base hover:underline col-span-2">Contact Us</Link>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-bold text-base">About Us</p>
              <p className="text-sm md:w-[60%]">
                We exist to bridge the gap between nature and opportunity, offering products that promote better living.
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-[2.5] flex flex-col justify-between gap-8 md:gap-8">
            {/* Contact (mobile) */}
            <div className="md:hidden flex justify-between">
              <div className="flex flex-col">
                <span className="font-semibold">Contact:</span>
                <p className="text-base">+234 813 521 345</p>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Email:</span>
                <p className="text-base">Mudet@gmail.com</p>
              </div>
            </div>

            {/* Contact (desktop) */}
            <div className="hidden md:flex flex-col gap-8">
              <div className="flex flex-col">
                <p className="font-bold text-sm">Contact</p>
                <p className="text-sm">+234 813 521 345</p>
              </div>
              <div className="flex flex-col">
                <p className="font-bold text-sm">Email</p>
                <p className="text-sm">Mudet@gmail.com</p>
              </div>
            </div>

            {/* Newsletter Form */}
            <div className="w-full">
              <Formik
                initialValues={{ email: "" }}
                validationSchema={emailValidationSchema}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                  try {
                    const response = await fetch(`${API_URL}/api/newsletter`, {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({ email: values.email }), // ✅ matches your backend expectation
                    });

                    const data = await response.json();

                    if (response.ok) {
                      toast.success(data.message || "Email submitted successfully!");
                      resetForm();
                    } else {
                      throw new Error(data.message || "Failed to subscribe.");
                    }
                  } catch (err) {
                    toast.error(err.message || "Failed to subscribe.");
                  } finally {
                    setSubmitting(false);
                  }
                }}
              >
                {({ isSubmitting }) => (
                  <Form className="flex flex-col gap-2">
                    <div className="flex justify-between bg-[#D9D9D9] md:rounded-lg rounded-md">
                      <Field
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="w-full bg-transparent rounded-lg py-3 md:py-2 px-4 text-sm outline-none placeholder:text-black text-black"
                      />
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-secClr text-white font-semibold py-2 px-5 rounded-[inherit] hover:bg-secClr/90 transition"
                      >
                        {isSubmitting ? "Submitting..." : "Submit"}
                      </button>
                    </div>
                    <div className="text-red-500 text-xs">
                      <ErrorMessage name="email" component="div" />
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full flex bg-pryClr items-center justify-center text-black">
        <div className="w-[90%] border-t border-white/20 flex flex-col sm:flex-row sm:justify-between items-center text-white text-sm py-4 space-y-2 sm:space-y-0">
          <p>Mudetrealsolutions@2025 All rights Reserved</p>
          <Link to="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default Footer;
