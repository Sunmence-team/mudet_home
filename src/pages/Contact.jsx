import React, { useEffect } from 'react';
import HeroComponent from '../component/HeroComponent';
import assets from '../assets/assests';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation schema using Yup
const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    phone: Yup.string()
        .matches(/^\+?[\d\s-]{10,}$/, 'Invalid phone number')
        .required('Phone Number is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().required('Message is required'), // Changed from subject to message to match backend
});

const Contact = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []); // Removed [location] assuming it was a typo; import useLocation if needed

    const heroData = [
        {
            title: 'Contact Us',
            subtitle:
                'We exist to bridge the gap between nature and opportunity, offering products that promote better living while creating a proven system for anyone to build wealth and achieve long-term financial independence.',
            imageSrc: assets.pic18,
            ctaText: 'Shop Now',
            ctaLink: '/shop',
            bgColor: 'bg-pryClr',
        },
    ];

    const API_URL = import.meta.env.VITE_API_BASE_URL;

    return (
        <div>
            <HeroComponent heroData={heroData} />

            <div className="w-full flex bg-white items-center justify-center text-black py-8 md:py-16">
                <div className="w-[90%] md:w-[75%] flex flex-col gap-4 md:gap-6 items-center text-center text-black">
                    <p className="font-bold text-2xl md:text-4xl">Get in Touch With Us</p>
                    <p className="w-full lg:w-[65%] text-sm md:text-lg leading-7 lg:leading-5">
                        Your journey to financial freedom starts here, earn more.
                    </p>

                    {/* Form */}
                    <Formik
                        initialValues={{
                            firstName: '',
                            lastName: '',
                            phone: '',
                            email: '',
                            message: '', // Changed from subject to message to match backend
                        }}
                        validationSchema={validationSchema}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                            const payload = {
                                first_name: values.firstName,
                                last_name: values.lastName,
                                phone: values.phone,
                                email: values.email,
                                message: values.message,
                            };

                            fetch(`${API_URL}/api/contact/create`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify(payload),
                            })
                            .then(response => {
                                if (response.ok) {
                                    alert('Form submitted successfully!');
                                    resetForm();
                                } else {
                                    alert('Error submitting form. Please try again.');
                                }
                            })
                            .catch(error => {
                                console.error('Error:', error);
                                alert('Error submitting form. Please try again.');
                            })
                            .finally(() => {
                                setSubmitting(false);
                            });
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form className="w-full flex flex-col gap-6 p-4 mt-6">
                                {/* FirstName and LastName Grid */}
                                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                                    <div className="flex flex-col">
                                        <Field
                                            type="text"
                                            name="firstName"
                                            placeholder="First Name"
                                            className=" bg-pryClr/5 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                        />
                                        <ErrorMessage
                                            name="firstName"
                                            component="div"
                                            className="text-red-500 text-xs mt-1"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <Field
                                            type="text"
                                            name="lastName"
                                            placeholder="Last Name"
                                            className=" bg-pryClr/5 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                        />
                                        <ErrorMessage
                                            name="lastName"
                                            component="div"
                                            className="text-red-500 text-xs mt-1"
                                        />
                                    </div>
                                </div>

                                {/* Phone and Email Side by Side */}
                                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                                    <div className="flex flex-col">
                                        <Field
                                            type="text"
                                            name="phone"
                                            placeholder="Phone Number"
                                            className=" bg-pryClr/5 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                        />
                                        <ErrorMessage
                                            name="phone"
                                            component="div"
                                            className="text-red-500 text-xs mt-1"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <Field
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            className=" bg-pryClr/5 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                        />
                                        <ErrorMessage
                                            name="email"
                                            component="div"
                                            className="text-red-500 text-xs mt-1"
                                        />
                                    </div>
                                </div>

                                {/* Message Container */}
                                <div className="flex flex-col">
                                    <Field
                                        as="textarea"
                                        name="message" // Changed from subject to message
                                        placeholder="Message" // Changed placeholder to Message
                                        className=" bg-pryClr/5 rounded-lg p-3 text-sm h-32 resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                    />
                                    <ErrorMessage
                                        name="message" // Changed from subject to message
                                        component="div"
                                        className="text-red-500 text-xs mt-1"
                                    />
                                </div>

                                {/* Submit Button */}
                                <div className="flex justify-start">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="bg-pryClr text-white font-medium py-2 px-8 rounded-lg hover:bg-pryClr/50 transition-colors duration-300 disabled:bg-pryClr/20"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default Contact;