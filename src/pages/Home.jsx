import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import assets from '../assets/assests';
import { CgLivePhoto } from 'react-icons/cg';
import { RiSparkling2Line } from 'react-icons/ri';
import { MdHealthAndSafety } from 'react-icons/md';
import { BiSupport } from 'react-icons/bi';
import { MdPeopleAlt } from 'react-icons/md';
import { IoPersonAdd } from 'react-icons/io5';
import { FaMoneyBill1 } from 'react-icons/fa6';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { BsArrowDownRight, BsArrowUpRight } from 'react-icons/bs';
import { FaSpinner } from 'react-icons/fa';
import { toast } from "sonner";

const Home = () => {
  const API_URL = import.meta.env.VITE_API_BASE_URL;
  const STORAGE_BASE_URL = import.meta.env.VITE_STORAGE_BASE_URL;

  const [testimonials, setTestimonials] = useState([]);
  const [loadingTestimonials, setLoadingTestimonials] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(`${API_URL}/api/testimonial/all`, {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const fetchedTestimonials = data.data?.data || [];
        // Sort by created_at (descending) and take the last 4
        const sortedTestimonials = fetchedTestimonials
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
          .slice(-4)
          .map((testimonial, index) => ({
            name: testimonial.full_name || "N/A",
            title: testimonial.position || "N/A",
            testimonial: testimonial.comment || "No comment provided",
            imageSrc: testimonial.image ? `${STORAGE_BASE_URL}/${testimonial.image}` : assets.placeholder,
            barBgColor: index % 2 === 0 ? 'bg-pryClr' : 'bg-secClr',
          }));
        setTestimonials(sortedTestimonials);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        // toast.error(error.message || "Failed to fetch testimonials.");
      } finally {
        setLoadingTestimonials(false);
      }
    };
    fetchTestimonials();
  }, []);

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What makes your products different from others in the market?',
      answer: 'Our products are made from 100% natural ingredients, carefully sourced and backed by both traditional herbal knowledge and modern science. We avoid artificial additives or preservatives, ensuring pure, safe, and effective wellness solutions.'
    },
    {
      question: 'What payment methods are accepted?',
      answer: 'We accept various payment methods including credit/debit cards, bank transfers, and mobile payments. You can select your preferred method during checkout.'
    },
    {
      question: 'How can I reset my password?',
      answer: 'To reset your password, go to the login page and click "Forgot Password." Enter your email address, and we’ll send you a link to reset your password.'
    },
    {
      question: 'Is there a refund policy?',
      answer: 'Yes, we offer a 30-day refund policy for eligible purchases. Please review our refund policy page for detailed terms and conditions.'
    }
  ];

  const features = [
    {
      title: '100% Natural Ingredients',
      description: 'Pure, handpicked natural ingredients from trusted farms for maximum goodness without compromise.',
      bgColor: 'bg-pryClr',
      icon: <CgLivePhoto className="text-white text-4xl md:text-5xl lg:text-6xl" />,
    },
    {
      title: 'No Artificial Additives or Preservatives',
      description: 'Free from harmful chemicals, additives, and preservatives, just what your body truly needs.',
      bgColor: 'bg-secClr',
      icon: <RiSparkling2Line className="text-white text-4xl md:text-5xl lg:text-6xl" />,
    },
    {
      title: 'Herbal Science & Tradition',
      description: 'Blending ancient herbal wisdom with modern research for safe, effective results',
      bgColor: 'bg-secClr',
      icon: <MdHealthAndSafety className="text-white text-4xl md:text-5xl lg:text-6xl" />,
    },
    {
      title: 'Customer Support That Cares',
      description: 'Guidance and assistance to help you achieve your health goals with confidence.',
      bgColor: 'bg-pryClr',
      icon: <BiSupport className="text-white text-4xl md:text-5xl lg:text-6xl" />,
    },
  ];

  const steps = [
    {
      step: 'Step 1',
      title: 'Create an Account',
      description: 'Start earning by creating an account by registration.',
      icon: MdPeopleAlt,
      iconColor: 'text-secClr',
      iconBgColor: 'bg-secClr/30'
    },
    {
      step: 'Step 2',
      title: 'Invite People',
      description: 'Once your account is set up, invite friends,family and others to join ',
      icon: IoPersonAdd,
      iconColor: 'text-pryClr',
      iconBgColor: 'bg-pryClr/30'
    },
    {
      step: 'Step 3',
      title: 'Earn Commission',
      description: 'By joining our referral program, you can earn commissions for every successful referral',
      icon: FaMoneyBill1,
      iconColor: 'text-secClr',
      iconBgColor: 'bg-secClr/30'
    }
  ];

  const packages = [
    {
      name: 'Lunch Package',
      nameBgColor: 'bg-pryClr',
      nameTextColor: 'text-white',
      price: '14,000',
      pointValue: '10PV',
      buttonBgColor: 'bg-trdClr',
      buttonTextColor: 'text-black',
      borderColor: 'border-trdClr'
    },
    {
      name: 'Ignite Package',
      nameBgColor: 'bg-secClr',
      nameTextColor: 'text-white',
      price: '28,000',
      pointValue: '30PV',
      buttonBgColor: 'bg-secClr',
      buttonTextColor: 'text-white',
      borderColor: 'border-secClr'
    },
    {
      name: 'Momentum Package',
      nameBgColor: 'bg-pryClr',
      nameTextColor: 'text-white',
      price: '70,000',
      pointValue: '80PV',
      buttonBgColor: 'bg-trdClr',
      buttonTextColor: 'text-black',
      borderColor: 'border-trdClr'
    },
    {
      name: 'Power Package',
      nameBgColor: 'bg-secClr',
      nameTextColor: 'text-white',
      price: '182,000',
      pointValue: '200PV',
      buttonBgColor: 'bg-secClr',
      buttonTextColor: 'text-white',
      borderColor: 'border-secClr'
    },
    {
      name: 'Scale Package',
      nameBgColor: 'bg-pryClr',
      nameTextColor: 'text-white',
      price: '406,000',
      pointValue: '500PV',
      buttonBgColor: 'bg-trdClr',
      buttonTextColor: 'text-black',
      borderColor: 'border-trdClr'
    },
    {
      name: 'Turbo Package',
      nameBgColor: 'bg-secClr',
      nameTextColor: 'text-white',
      price: '700,000',
      pointValue: '700PV',
      buttonBgColor: 'bg-secClr',
      buttonTextColor: 'text-white',
      borderColor: 'border-secClr'
    },
    {
      name: 'Legend Package',
      nameBgColor: 'bg-pryClr',
      nameTextColor: 'text-white',
      price: '1,050,000',
      pointValue: '1000PV',
      buttonBgColor: 'bg-trdClr',
      buttonTextColor: 'text-black',
      borderColor: 'border-trdClr'
    },
  ];

  const fallbackTestimonials = [
    {
      imageSrc: assets.pic1,
      name: "Grace Adeyemi",
      title: "Health Enthusiast",
      testimonial: "I feel Healthier and More Energized! Since I started using their herbal supplements, my energy level has improved, and I feel more alive everyday"
    },
    {
      imageSrc: assets.pic2,
      name: "Chinedu Okeke",
      title: "Fitness Coach",
      testimonial: "These products have transformed my daily routine,I’ve noticed a significant boost in my stamina and overall wellness since incorporating them."
    },
    {
      imageSrc: assets.pic3,
      name: "Aisha Bello",
      title: "Wellness Blogger",
      testimonial: "The natural ingredients in these supplements make all the difference, I feel rejuvenated and my skin has never locked better!"
    },
    {
      imageSrc: assets.pic4,
      name: "Christianah Ogor",
      title: "Nutritionist",
      testimonial: "As a professional, I recommend these herbal supplements to my clients. They’ve helped me maintain my energy and focus throughout the day."
    },
  ]

  const finalTestimonials = (loadingTestimonials || !testimonials || testimonials.length < 2) ? fallbackTestimonials : testimonials

  return (
    <div className="w-full flex flex-col">
      {/* Hero Section */}
      <div className="w-full h-screen lg:h-auto relative">
        <img
          src={assets.bg}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 md:bg-transparent">
          <div className="w-full flex flex-col items-center justify-center">
            <div className="w-[90%] flex flex-col text-white items-center lg:items-start">
              <div className="w-full md:w-[80%] lg:w-[40%] flex flex-col gap-6 md:gap-8">
                <p className="text-3xl md:text-4xl lg:text-5xl leading-10 md:leading-12 lg:leading-14 text-center lg:text-left">
                  Empowering You to Earn & Live Better
                </p>
                <p className="text-sm md:text-base lg:text-lg leading-6 md:leading-7 text-center lg:text-left">
                  Discover premium wellness products and a powerful referral system that lets you create sustainable income, all in one platform.
                </p>
                {/* Buttons */}
                <div className="w-full flex gap-4 md:gap-6 flex-col md:flex-row items-center justify-center lg:items-start lg:justify-start font-semibold">

                  <Link to="/login">
                    <button className="w-56 lg:w-48 h-12 bg-white border-2 border-white text-pryClr rounded-3xl hover:bg-transparent hover:text-white transition-colors duration-200">
                      Get Started
                    </button>
                  </Link>

                  <Link to="/login">
                    <button className="w-56 lg:w-48 h-12 bg-transparent border-2 border-white text-white rounded-3xl hover:bg-white hover:text-pryClr transition-colors duration-200">
                      Member Login
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Cards Section */}
      <div className="w-full flex flex-col gap-24 items-center justify-center text-black py-8 md:py-16">
        <div className="w-[90%] flex flex-col gap-8 items-center text-center">
          <div className="w-full md:w-[60%] flex flex-col gap-3 items-center">
            <p className="font-bold text-2xl md:text-4xl">
              Why Choose Us?
            </p>
            <p className="w-full text-sm md:text-lg leading-7 lg:leadind-5">
              Choosing Modet means choosing better health, better income, and a better future, we make sure you have everything you need to succeed.
            </p>
          </div>
          <div className="w-full">
            {/* Mobile section - only shows on small screens */}
            <div className="md:hidden mt-8 space-y-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="w-full bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 mb-6"
                >
                  {/* Icon header with colored background */}
                  <div className={`${feature.bgColor} h-24 flex items-center justify-center`}>
                    <div className="bg-white/20 p-4 rounded-full">
                      {feature.icon}
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold mb-3 text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop section - hidden on mobile */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 lg:gap-12 mt-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-row gap-3 md:gap-4 lg:gap-6 border border-black/20 shadow-sm p-3 md:p-3 rounded-full h-fit min-h-[120px] sm:min-h-[140px] md:min-h-[160px]"
                >
                  <div
                    className={`flex-[3] w-full ${feature.bgColor} rounded-bl-full rounded-tl-full flex items-center justify-center`}
                  >
                    {feature.icon}
                  </div>
                  <div className="flex-[7] flex flex-col gap-2 text-start justify-center">
                    <p className="text-sm md:text-base lg:text-2xl font-bold">
                      {feature.title}
                    </p>
                    <p className="text-xs md:text-sm lg:text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-[90%] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-18">
          <div>
            <img src={assets.pic5} alt="" />
          </div>
          <div className="flex flex-col gap-2 md:gap-8 justify-center">
            <p className='text-3xl md:text-4xl font-semibold'>Our Promise</p>
            <p className='text-sm md:text-lg leading-7'>We are committed to delivering only the best. products made with care, passion, and integrity. Every step of our process, from sourcing the finest ingredients to ensuring sustainable practices, is guided by our dedication to your well-being and satisfaction. When you choose us, you’re choosing quality you can trust, service you can rely on, and a brand that values you every step of the way.</p>
          </div>
        </div>
      </div>

      <div className="w-full flex bg-pryClr items-center justify-center text-black py-8 md:py-16">
        <div className="w-[90%] flex flex-col gap-4 md:gap-6 items-center text-center text-white">
          <p className='font-bold text-2xl md:text-4xl'>How You Can Earn Profits</p>
          <p className='w-full lg:w-[50%] text-sm md:text-lg leading-7 lg:leadind-5'>Follow these three simple steps to start earning with us. It’s fast easy, and rewarding</p>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 text-black text-start mt-8">
            {steps.map((step, index) => (
              <div key={index} className="w-full bg-white p-6 flex flex-col gap-4 rounded-xl">
                <div className="flex gap-6 items-center">
                  <div className={`${step.iconBgColor} rounded-full`}>
                    <step.icon className={`${step.iconColor} text-3xl m-4`} />
                  </div>
                  <p className="text-black/80 text-lg md:text-xl">{step.step}</p>
                </div>
                <p className="text-lg md:text-xl font-semibold">{step.title}</p>
                <p className="text-lg md:text-xl">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full flex bg-white items-center justify-center text-black py-8 md:py-16">
        <div className="w-[90%] flex flex-col gap-4 md:gap-6 items-center text-center text-black">
          <p className='font-bold text-2xl md:text-4xl'>Business Packages</p>
          <p className='w-full lg:w-[65%] text-sm md:text-lg leading-7 lg:leadind-5'>Your journey to wealth generation begins here, select the package that works best for you.</p>
          <div className="w-full overflow-x-auto mt-8">
            <div className="flex gap-6 min-w-max">
              {packages.map((pkg, index) => (
                <div key={index} className={`w-[320px] md:w-[300px] border ${pkg.borderColor} flex flex-col rounded-2xl`}>
                  <div className={`w-full h-18 ${pkg.nameBgColor} rounded-t-2xl flex items-center justify-center ${pkg.nameTextColor} text-center`}>
                    <p className="text-xl md:text-2xl font-bold exclude">{pkg.name}</p>
                  </div>
                  <div className="py-6 flex flex-col gap-4 items-center justify-center">
                    <p className="text-3xl md:text-4xl font-bold exclude">{pkg.price}<span className="text-sm font-light text-black/50">NGN</span></p>
                    <p className="text-black/70 text-[12px]">Point Value: {pkg.pointValue}</p>
                    <div>
                      <Link to="/login">
                        <button className={`${pkg.buttonBgColor} ${pkg.buttonTextColor} px-6 py-2 text-lg font-medium rounded-full`}>Get Started</button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex bg-white items-center justify-center text-black py-8 md:py-16">
        <div className="w-[90%] flex flex-col gap-4 md:gap-6 items-center text-center text-black">
          <p className='font-bold text-2xl md:text-4xl'>Frequently Asked Questions</p>
          <p className='w-full lg:w-[65%] text-sm md:text-lg leading-7 lg:leadind-5'>Find clear and straightforward answers to the most common questions about our products, business model, and how you can start your journey with us</p>
          <div className="w-full flex flex-col gap-6 mt-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`w-full border border-black/20 rounded-lg p-4 cursor-pointer transition-all duration-300 shadow-xs ${activeIndex === index ? 'bg-pryClr' : 'bg-transparent'}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <p
                    className={`text-base md:text-lg text-start w-full md:w-auto max-w-[75%] font-semibold transition-all duration-300 ${activeIndex === index ? 'text-white' : 'text-black'}`}
                  >
                    {faq.question}
                  </p>
                  <div
                    className={`rounded-full p-3 transition-all duration-300 ${activeIndex === index ? 'bg-white' : 'bg-[#D9D9D9]/20'}`}
                  >
                    {activeIndex === index ? (
                      <BsArrowUpRight className="text-black text-xl" />
                    ) : (
                      <BsArrowDownRight className="text-black text-xl" />
                    )}
                  </div>
                </div>
                {activeIndex === index && (
                  <p
                    className={`mt-4 text-sm md:text-base w-full md:w-auto md:max-w-[80%] text-start transition-all duration-300 ${activeIndex === index ? 'text-white' : 'text-black/70'}`}
                  >
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full flex bg-white items-center justify-center text-black py-8 md:py-16">
        <div className="w-[90%] flex flex-col gap-4 md:gap-6 items-center text-center text-black">
          <p className="font-bold text-2xl md:text-4xl">Testimonials</p>
          <p className="w-full lg:w-[65%] text-sm md:text-lg leading-7 lg:leading-5">
            From first-time users to loyal customers, here’s what people are saying about their journey with us.
          </p>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* {loadingTestimonials ? (
              <div className="flex items-center justify-center py-8 col-span-2">
                <FaSpinner className="animate-spin h-8 w-8 text-primary flex-shrink-0" />
              </div>
            ) : testimonials.length > 0 ? (
            ) : (
              <p className="text-center text-gray-500 py-8 col-span-2">No testimonials available</p>
            )} */}
            {
              finalTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full border border-black/20 rounded-lg p-4 gap-6 flex flex-col items-center"
                >
                  <div className="w-full flex items-center gap-6">
                    <img src={testimonial.imageSrc} className="w-16 h-16 rounded-full object-cover" alt={testimonial.name} />
                    <div className="flex flex-col text-start">
                      <p className="text-base md:text-lg font-bold capitalize">{testimonial.name}</p>
                      <p className="text-base md:text-lg font-bold text-black/50 capitalize">{testimonial.title}</p>
                    </div>
                  </div>
                  <div className="w-[90%] flex items-center gap-2">
                    <div className={`w-6 md:w-2 min-h-18 max-h-[calc(100%+5px)] ${index % 2 === 0 ? 'bg-pryClr' : 'bg-secClr'} rounded-lg`}></div>
                    <p className="w-[calc(100%-24px)] text-sm text-start md:text-base">{testimonial.testimonial}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;