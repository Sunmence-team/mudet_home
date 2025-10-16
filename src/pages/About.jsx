import React, { useEffect } from 'react';
import HeroComponent from '../component/HeroComponent';
import assets from '../assets/assests';
import { BiSupport } from 'react-icons/bi';
import { GrNotes } from "react-icons/gr";
import { LuEye } from "react-icons/lu";
import { FaGem, FaLeaf, FaEye, FaLightbulb, FaHeart, FaShieldAlt, FaBalanceScale } from 'react-icons/fa';
import { GiPowerGenerator } from 'react-icons/gi';
import { RiUserCommunityFill } from 'react-icons/ri';
import { FaShield } from 'react-icons/fa6';

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);


  const features = [
    {
      description: 'Our mission is to harness the natural power of cinnamon and herbal remedies to promote holistic wellness, strengthen immunity, and restore balance to the body.We are committed to delivering safe, effective, and affordable herbal solutions that enhance health, prevent chronic conditions, and improve everyday living.',
      bgColor: 'bg-pryClr',
      icon: <GrNotes className="text-white text-4xl md:text-5xl lg:text-6xl" />,
    },
    {
      description: 'To be a trusted global brand in natural health and wellness, empowering individuals and communities to embrace nature’s healing power for a healthier, stronger, and more sustainable future.',
      bgColor: 'bg-secClr',
      icon: <LuEye className="text-white text-4xl md:text-5xl lg:text-6xl" />,
    },
  ];

  const heroData = [
    {
      title: 'About Us',
      subtitle: 'We exist to bridge the gap between nature and opportunity, offering products that promote better living while creating a proven system for anyone to build wealth and achieve long-term financial independence.',
      imageSrc: assets.pic6,
      ctaText: 'Shop Now',
      ctaLink: '/shop',
      bgColor: 'bg-pryClr',
    },
  ];

  const qualityPoints = [
    {
      title: "Purity & Quality",
      description: "We carefully source, process, and deliver only the finest natural products, ensuring that every drop embodies excellence, safety, and effectiveness you can trust.",
      icon: <FaGem className="text-pryClr text-2xl" />,
    },
    {
      title: "Integrity",
      description: "Our foundation is built on honesty, transparency, and accountability, allowing us to uphold strong values and foster genuine trust with everyone we serve.",
      icon: <GiPowerGenerator className="text-pryClr text-2xl" />,
    },
    {
      title: "Balance",
      description: "We believe true wellness comes from harmon between body and mind, wealth and health, work and life, and we create solutions that help people achieve it.",
      icon: <FaBalanceScale className="text-pryClr text-2xl" />,
    },
    {
      title: "Community Balance",
      description: "Beyond products, we are committed to touching lives, empowering families, and contributing positively to communities around the world.",
      icon: <RiUserCommunityFill className="text-pryClr text-2xl" />,
    },
    {
      title: "Innovation",
      description: "We constantly embrace new ideas, research, and creative approaches to bring forward-thinking solutions that meet the needs of today and tomorrow.",
      icon: <FaLightbulb className="text-pryClr text-2xl" />,
    },
    {
      title: "Trust",
      description: "Every interaction, every product, and every promise is backed by reliability, giving our partners and customers confidence that they can depend on us always.",
      icon: <FaShield className="text-pryClr text-2xl" />,
    },
  ];


  const teamData = [
    {
      title: 'Herbal Experts',
      description: 'Our certified herbalists are at the heart of our innovation. With years of hands-on experience in natural medicine, they merge ancient knowledge with cutting-edge research to unlock the full therapeutic potential of cinnamon and other botanicals. From sourcing to formulation, they ensure every blend supports wellness, vitality, and balance in the most natural way possible.',
      image: assets.pic8,
    },
    {
      title: 'Research & Development',
      description: 'Our R&D team pushes the boundaries of herbal science, combining traditional wisdom with modern technology. They work tirelessly to discover new applications for botanicals, ensuring our products remain at the forefront of natural health solutions. Their rigorous testing guarantees safety and efficacy in every sip.',
      image: assets.pic9,
    },
    {
      title: 'Production Specialists',
      description: 'Our production team crafts each product with precision and care. Using state-of-the-art facilities, they ensure that every batch meets our high standards for quality and consistency, delivering the best herbal drinks to our customers.',
      image: assets.pic10,
    },
    {
      title: 'Community Engagement',
      description: 'Our community engagement team fosters meaningful connections with local communities, promoting health education and sustainable practices. Their initiatives empower individuals with knowledge about natural remedies, enhancing wellness across Nigeria.',
      image: assets.pic11,
    },
    {
      title: 'Quality Assurance',
      description: 'Our quality assurance team ensures that every product meets the highest standards of purity and potency. With meticulous attention to detail, they oversee every step of production, guaranteeing that our customers receive only the best.',
      image: assets.pic12,
    },
  ];

  // Function to render a single feature card for mobile
  const renderMobileFeatureCard = (index, isReverse = false) => {
    const feature = features[index];
    return (
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
            {index === 0 ? "Our Mission" : "Our Vision"}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            {feature.description}
          </p>
        </div>
      </div>
    );
  };

  // Original function for larger screens (unchanged)
  const renderFeatureCard = (index, reverse = false) => {
    const feature = features[index];
    return (
      <div
        key={index}
        className={`hidden md:flex ${reverse ? 'flex-row-reverse' : 'flex-row'} gap-3 md:gap-4 lg:gap-6 border border-black/20 shadow-sm p-3 md:p-3 rounded-full h-fit min-h-[120px] sm:min-h-[140px] md:min-h-[200px]`}
      >
        <div
          className={`flex-[3] w-full ${feature.bgColor} ${reverse ? 'rounded-br-full rounded-tr-full' : 'rounded-bl-full rounded-tl-full'} flex items-center justify-center`}
        >
          {feature.icon}
        </div>
        <div className={`flex-[7] flex flex-col gap-2 px-8 ${reverse ? 'text-start' : 'text-start'} justify-center`}>
          <p className="text-xs md:text-sm lg:text-base ">{feature.description}</p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <HeroComponent heroData={heroData} />
      <div className="w-full flex bg-white items-center justify-center text-black py-10 md:py-16">
        <div className="w-[90%] flex flex-col gap-6 md:gap-6 items-center text-center text-black">
          <p className="font-bold text-2xl md:text-4xl">Who we are</p>
          <p className="w-full lg:w-[90%] text-sm md:text-sm lg:text-base leading-7 lg:leading-8">
            We are a passionate team of herbal innovators, health enthusiasts, and wellness advocates, united by one mission: to harness the natural power of cinnamon and transform it into life-enhancing herbal solutions. Our team combines the knowledge of herbalists and nutritionists with the precision of quality control specialists, the creativity of product designers, and the guidance of wellness educators. Together, we ensure that every product reflects purity, potency, and proven results. By blending ancient herbal wisdom with modern science, we are committed to making natural wellness simple, effective, and accessible for people everywhere.
          </p>

          {/* Mobile section - only shows on small screens */}
          <div className="w-full md:hidden mt-8">
            <div className="space-y-8">
              {renderMobileFeatureCard(0)}
              {renderMobileFeatureCard(1)}
            </div>
          </div>

          {/* Desktop section - hidden on mobile */}
          <div className="w-full hidden md:flex flex-col gap-12 mt-8">
            <div className="w-full flex flex-col items-center md:flex-row">
              <div className="flex-[3] text-3xl md:text-5xl font-semibold mb-4 md:mb-0">
                Our Mission
              </div>
              <div className="flex-[7] flex flex-col gap-4">{renderFeatureCard(0)}</div>
            </div>

            <div className="w-full hidden md:flex flex-col items-center md:flex-row-reverse">
              <div className="flex-[3] text-3xl md:text-5xl font-semibold mb-4 md:mb-0">
                My Vision
              </div>
              <div className="flex-[7] flex flex-col gap-4">{renderFeatureCard(1, true)}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex bg-pryClr items-center justify-center text-white py-8 md:py-16">
        <div className="w-[90%] flex flex-col gap-4 md:gap-6 items-center text-center ">
          <p className='font-bold text-2xl md:text-4xl'>Our Core Values</p>
          <p className='w-full lg:w-[65%] text-sm md:text-lg leading-7 lg:leadind-5'>Choosing Modet means choosing better health, better income, and a better future, we make sure you have everything you need to succeed.</p>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-8">
            {qualityPoints.map((point, index) => (
              <div
                key={index}
                className="w-full bg-white flex flex-col gap-2 p-6 md:p-8 shadow-lg rounded-lg text-black text-start"
              >
                <div className="flex items-center gap-3">
                  {point.icon}
                  <p className="font-bold text-lg md:text-2xl">{point.title}</p>
                </div>
                <p className="text-sm md:text-lg">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className="w-full flex bg-white items-center justify-center text-black py-8 md:py-16">
        <div className="w-[90%] flex flex-col gap-4 md:gap-6 items-center text-center ">
          <p className='font-bold text-2xl md:text-4xl'>Meet the Team</p>
          <p className='w-full lg:w-[65%] text-sm md:text-lg leading-7 lg:leadind-5'>Our strength lies in the talent and passion of our team</p>
          <div className="w-full flex flex-col gap-8 mt-8">
            <div className="w-full">
              <div className="w-full flex flex-col md:flex-row md:gap-6 bg-white shadow-lg rounded-lg sm:shadow-none sm:rounded-none">
                <div className="flex-[3] overflow-hidden h-[400px] md:h-auto md:shadow-lg md:rounded-lg">
                  <img
                    src={assets.pic7}
                    className="w-full h-full object-cover"
                    alt="CEO Portrait"
                  />
                </div>
                <div className="flex-[7] p-4 md:p-6 md:shadow-lg md:rounded-lg flex flex-col text-start gap-2 ">
                  <p className="font-bold italic text-sm md:text-lg">
                    CEO, Mudet Real Solution Limited <br /> Alhaji Mutiu Oladejo
                  </p>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed leading-normal">
                    Alhaji Mutiu Oladejo is a distinguished Nigerian businessman, philanthropist, and community leader whose influence extends far beyond the boardroom. As CEO of Mudet Real Solution Nigeria Ltd., makers of the popular Kick & Start and Tiwan Tiwa herbal drinks, he has built a reputation for innovation, quality, and impact. Deeply committed to social progress, he has invested in education, youth empowerment, and grassroots development, touching countless lives across the country. His remarkable contributions have earned him international recognition, including an award from Umm al-Qura University in Mecca for his outstanding service to education and humanity. Known for his generosity, humility, and hands-on approach to community welfare, Alhaji Oladejo embodies leadership with a human touch, inspiring trust and admiration wherever he goes.
                  </p>
                </div>
              </div>
            </div>


            <div className="w-full flex flex-col gap-8">
              {teamData.map((item, index) => (
                <div
                  key={index}
                  className={`w-full flex flex-col md:flex-row md:gap-6 bg-transparent shadow-lg rounded-lg  md:shadow-none md:rounded-none ${index % 2 === 0 ? 'md:flex-row-reverse lg:flex-row-reverse' : ''}`}
                >
                  {/* Image container */}
                  <div className="flex-[3] overflow-hidden h-[400px] md:h-auto md:shadow-base md:rounded-lg lg:rounded-lg">
                    <img
                      src={item.image}
                      className="w-full h-full object-cover"
                      alt={item.title}
                    />
                  </div>

                  {/* Text container */}
                  <div className="flex-[7.5] p-4 md:p-6 lg:p-6  md:border md:border-black/10 lg:border lg:border-black/10 md:shadow-lg md:rounded-lg lg:rounded-lg flex flex-col text-start gap-3">
                    <p className="font-bold text-sm md:text-lg lg:text-lg">{item.title}</p>
                    <p className="text-sm md:text-base lg:text-base text-gray-700 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;