import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import assets from "../assets/assests";
import { RiHeartAdd2Fill } from "react-icons/ri";
import { FaAsterisk } from "react-icons/fa6";
import { MdPersonAdd } from "react-icons/md";
import { FaSpinner } from "react-icons/fa";
import { toast } from "sonner";

const SingleProduct = () => {
  const { slug } = useParams();

  const API_URL = import.meta.env.VITE_API_BASE_URL;
  const STORAGE_BASE_URL = import.meta.env.VITE_STORAGE_BASE_URL;

  const [testimonials, setTestimonials] = useState([]);
  const [loadingTestimonials, setLoadingTestimonials] = useState(true);

  // ✅ Local product details (NO fetching)
  const PRODUCTS = useMemo(
    () => ({
      "cinnamon-herbal-extract": {
        hero: {
          title: "Cinnamon \nHerbal Extract",
          desc: `Discover the power of nature’s healing touch. Cinnamon Herbal
Extract is a 100% natural supplement designed to restore balance,
boost immunity, and promote complete body wellness. Backed by
centuries of herbal tradition and modern wellness needs, it’s more
than just a supplement, it’s your partner in healthy living.`,
          image: assets.pic13,
          mobileBgImage: assets.pic13,
        },
        about: {
          title: "About the product",
          text: `Cinnamon herbal extract is derived from the bark of the cinnamon
tree and contains powerful bioactive compounds with medicinal
properties. It is used both as a health supplement and in
traditional herbal medicine for its numerous therapeutic benefits.`,
        },
        whoFor: {
          title: "Who Is It For?",
          text: `Cinnamon Herbal Extract is ideal for anyone looking to naturally
support wellness, improve digestion, balance blood sugar, and boost
overall vitality.`,
          sideImage: assets.pic14,
          benefits: [
            {
              id: 1,
              text: "Individuals seeking natural alternatives to maintain good health.",
              icon: RiHeartAdd2Fill,
              iconColor: "text-secClr",
              bgColor: "bg-secClr/30",
            },
            {
              id: 2,
              text: "People with digestive, hormonal, or inflammatory challenges.",
              icon: FaAsterisk,
              iconColor: "text-pryClr",
              bgColor: "bg-pryClr/30",
            },
            {
              id: 3,
              text: "Wellness enthusiasts looking for detoxification & vitality.",
              icon: RiHeartAdd2Fill,
              iconColor: "text-secClr",
              bgColor: "bg-secClr/30",
            },
            {
              id: 4,
              text: "Anyone who wants to strengthen immunity & fight chronic conditions.",
              icon: RiHeartAdd2Fill,
              iconColor: "text-pryClr",
              bgColor: "bg-pryClr/30",
            },
          ],
        },
        whyChoose: {
          title: "Why Choose Cinnamon Herbal Extract?",
          text: `Cinnamon Herbal Extract is ideal for anyone looking to naturally
support wellness, improve digestion, balance blood sugar, and boost
overall vitality.`,
          features: [
            {
              id: 1,
              text: "<span class='font-bold'>All-Natural & Safe</span> – No artificial additives or harmful chemicals.",
              bgColor: "bg-pryClr",
              icon: MdPersonAdd,
              iconColor: "text-pryClr",
              align: "justify-end",
            },
            {
              id: 2,
              text: "<span class='font-bold'>Scientifically Supported Benefits</span> – Rich in antioxidants, anti-inflammatory, and immune-boosting properties.",
              bgColor: "bg-secClr",
              icon: MdPersonAdd,
              iconColor: "text-pryClr",
              align: "justify-start",
            },
            {
              id: 3,
              text: "<span class='font-bold'>Supports Balance & Vitality</span> – Helps keep the body functioning at its best daily.",
              bgColor: "bg-pryClr",
              icon: MdPersonAdd,
              iconColor: "text-pryClr",
              align: "justify-end",
            },
            {
              id: 4,
              text: "<span class='font-bold'>Easy Daily Wellness</span> – Simple routine support for busy lifestyles.",
              bgColor: "bg-secClr",
              icon: MdPersonAdd,
              iconColor: "text-pryClr",
              align: "justify-start",
            },
          ],
        },
        keyBenefits: {
          title: "Key Health Benefits",
          image: assets.pic15,
          items: [
            {
              title: "1. Natural Detoxifier",
              desc: "Helps flush out toxins from the body, supporting overall wellness",
            },
            {
              title: "2. Boosts Immune System",
              desc: "Strengthens the body’s defense mechanisms against infections and diseases.",
            },
            {
              title: "3. Rich in Antioxidants",
              desc: "Contains compounds that protect cells from oxidative stress and slow down aging",
            },
            {
              title: "4. Supports Liver and Kidney Health",
              desc: "Promotes proper organ function and helps remove harmful waste from the body.",
            },
            {
              title: "5. Antimicrobial Properties",
              desc: "Fights bacteria, fungi, viruses, and parasites; can help in preventing certain infections",
            },
          ],
        },
        ctaBanner: {
          image: assets.pic16,
          text: `Take charge of your health today. Order your bottle of Cinnamon
Herbal Extract and enjoy the natural way to lasting wellness.`,
          buttonText: "Buy Now",
        },
      },

      "armor-herbal-extract": {
        hero: {
          title: "ARMOR \nHERBAL EXTRACT",
          desc: `Armor Herbal Extract is a powerful natural formula designed to support complete wellness for men and women. It works from the inside out to help your body perform at its best — naturally and effectively.`,
          // 🔁 replace these with your real armor images
          image: assets.armor,
          mobileBgImage: assets.armor,
        },
        about: {
          title: "About the product",
          text: `Armor Herbal Extract is promoted as a natural herbal wellness supplement formulated to support overall body health in both men and women.`,
        },
        whoFor: {
          title: "Who Is It For?",
          text: `Armor Herbal Extract is ideal for adults who want daily wellness support, better energy, and improved vitality as part of a healthy lifestyle.`,
          // 🔁 replace with your armor side image
          sideImage: assets.armor,
          benefits: [
            {
              id: 1,
              text: "Individuals looking for daily wellness support and better overall vitality.",
              icon: RiHeartAdd2Fill,
              iconColor: "text-secClr",
              bgColor: "bg-secClr/30",
            },
            {
              id: 2,
              text: "People who want improved energy, strength, and stamina for active days.",
              icon: FaAsterisk,
              iconColor: "text-pryClr",
              bgColor: "bg-pryClr/30",
            },
            {
              id: 3,
              text: "Adults seeking reproductive health support (male fertility support).",
              icon: RiHeartAdd2Fill,
              iconColor: "text-secClr",
              bgColor: "bg-secClr/30",
            },
            {
              id: 4,
              text: "Men and women who want to support healthy libido and sexual wellness.",
              icon: RiHeartAdd2Fill,
              iconColor: "text-pryClr",
              bgColor: "bg-pryClr/30",
            },
          ],
        },
        whyChoose: {
          title: "Why Choose Armor Herbal Extract?",
          text: `Your daily shield for total body wellness — designed to support performance, vitality, and whole-body balance.`,
          features: [
            {
              id: 1,
              text: "<span class='font-bold'>Daily Wellness Support</span> – Designed to support total body balance and resilience.",
              bgColor: "bg-pryClr",
              icon: MdPersonAdd,
              iconColor: "text-pryClr",
              align: "justify-end",
            },
            {
              id: 2,
              text: "<span class='font-bold'>Energy & Vitality Boost</span> – Helps reduce fatigue and supports stamina for everyday performance.",
              bgColor: "bg-secClr",
              icon: MdPersonAdd,
              iconColor: "text-pryClr",
              align: "justify-start",
            },
            {
              id: 3,
              text: "<span class='font-bold'>Fertility Support (Men)</span> – Supports male reproductive health and healthy sperm function.",
              bgColor: "bg-pryClr",
              icon: MdPersonAdd,
              iconColor: "text-pryClr",
              align: "justify-end",
            },
            {
              id: 4,
              text: "<span class='font-bold'>Libido & Sexual Wellness</span> – Supports healthy sexual drive and overall wellness for men and women.",
              bgColor: "bg-secClr",
              icon: MdPersonAdd,
              iconColor: "text-pryClr",
              align: "justify-start",
            },
          ],
        },
        keyBenefits: {
          title: "Key Health Benefits",
          // 🔁 replace with your armor key benefits image
          image: assets.armor,
          items: [
            {
              title: "1. Boosts Natural Energy Levels",
              desc: "Helps improve daily strength, vitality, and stamina, reducing fatigue and supporting active lifestyles.",
            },
            {
              title: "2. Supports Male Fertility",
              desc: "Assists in improving low sperm count and supports overall male reproductive health.",
            },
            {
              title: "3. Enhances Libido and Sexual Wellness",
              desc: "Supports healthy sexual drive and performance in both men and women.",
            },
          ],
        },
        ctaBanner: {
          // 🔁 replace with your armor banner image
          image: assets.pic16,
          text: `Build your daily routine around wellness. Order Armor Herbal Extract today and support your body’s performance — naturally.`,
          buttonText: "Buy Now",
        },
      },
    }),
    [],
  );

  const product = PRODUCTS?.[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Testimonials fetch (NOT product fetching)
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(`${API_URL}/api/testimonial/all`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();
        const fetchedTestimonials = data.data?.data || [];

        const sortedTestimonials = fetchedTestimonials
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
          .slice(0, 4) // ✅ newest 4
          .map((t, index) => ({
            name: t.full_name || "N/A",
            title: t.position || "N/A",
            testimonial: t.comment || "No comment provided",
            imageSrc: t.image
              ? `${STORAGE_BASE_URL}/${t.image}`
              : assets.placeholder,
            barBgColor: index % 2 === 0 ? "bg-pryClr" : "bg-secClr",
          }));

        setTestimonials(sortedTestimonials);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        toast.error(error.message || "Failed to fetch testimonials.");
      } finally {
        setLoadingTestimonials(false);
      }
    };

    fetchTestimonials();
  }, [API_URL, STORAGE_BASE_URL]);

  if (!product) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-white text-black p-6 text-center">
        <p className="text-2xl font-bold">Product not found</p>
        <p className="text-sm text-black/60 mt-2">
          The product you are trying to view does not exist.
        </p>
        <Link to="/products/cinnamon-herbal-extract" className="mt-6">
          <button className="px-8 py-2 rounded-full bg-pryClr text-white font-semibold">
            Go to Cinnamon
          </button>
        </Link>
      </div>
    );
  }

  const { hero, about, whoFor, whyChoose, keyBenefits, ctaBanner } = product;

  return (
    <div className="w-full flex flex-col items-center">
      {/* HERO */}
      <section className="w-full bg-white flex items-center justify-center h-screen relative overflow-hidden">
        {/* Background Image with Green Overlay for sm and md Screens */}
        <div
          className="lg:hidden absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${hero.mobileBgImage})` }}
        >
          <div className="absolute inset-0 bg-pryClr/75" />
        </div>

        <div className="w-[90%] mx-auto h-full flex flex-col md:flex-col lg:grid lg:grid-cols-2 lg:gap-6 items-center justify-center lg:justify-start relative">
          <div className="w-full md:w-[90%] lg:w-full flex flex-col items-center lg:items-start text-center lg:text-left gap-4 lg:gap-6 z-10 bg-white/10 lg:bg-transparent py-12 lg:p-0 px-4 rounded-t-[200px] lg:rounded-none backdrop-blur-xs lg:backdrop-blur-none border border-white/20 lg:border-none text-white lg:text-black justify-center">
            <h1 className="font-bold text-3xl md:text-6xl lg:text-6xl leading-10 md:leading-12 lg:leading-16 whitespace-pre-line">
              {hero.title}
            </h1>

            <p className="text-sm md:text-xl lg:text-lg leading-7 md:leading-12 lg:leading-8 whitespace-pre-line">
              {hero.desc}
            </p>

            <div className="w-full flex justify-center lg:justify-start">
              <Link to="/login">
                <button className="px-12 bg-white lg:bg-pryClr rounded-3xl lg:rounded-full py-2 border-2 border-white lg:border-pryClr text-pryClr lg:text-white font-semibold lg:font-medium hover:bg-white hover:text-pryClr transition-colors duration-200">
                  Shop With Us
                </button>
              </Link>
            </div>
          </div>

          {/* Desktop Image */}
          <div className="hidden lg:flex w-full h-full items-center">
            <img src={hero.image} alt="Product" className="object-cover" />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <div className="w-full flex bg-white items-center justify-center text-white mt-12 md:py-0">
        <div className="w-[90%] bg-pryClr flex flex-col gap-4 md:gap-6 items-center text-center p-4 py-8 rounded-xl">
          <p className="font-bold text-3xl md:text-5xl">{about.title}</p>
          <p className="w-full lg:w-[70%] text-xs md:text-base leading-7 lg:leadind-5">
            {about.text}
          </p>
        </div>
      </div>

      {/* WHO FOR */}
      <div className="w-full flex bg-white items-center justify-center text-black py-8 md:py-16">
        <div className="w-[90%] flex flex-col gap-4 md:gap-6 items-center text-center">
          <p className="font-bold text-2xl md:text-4xl">{whoFor.title}</p>
          <p className="w-full lg:w-[65%] text-sm md:text-lg leading-7 lg:leadind-5">
            {whoFor.text}
          </p>

          <section className="w-full mx-auto flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 mt-8 items-center">
            <div className="flex-[6] w-full flex flex-col gap-3 items-center md:items-start">
              {whoFor.benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={benefit.id}
                    className="w-full sm:w-[90%] md:w-full flex gap-3 md:gap-6 px-4 py-4 border border-black/10 shadow-lg rounded-xl items-center"
                  >
                    <div
                      className={`${benefit.bgColor} p-3 rounded-full flex items-center justify-center`}
                    >
                      <Icon className={`${benefit.iconColor} text-3xl`} />
                    </div>
                    <p className="text-sm md:text-lg text-start">
                      {benefit.text}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="flex-[4] w-full flex justify-center md:justify-end">
              <img
                src={whoFor.sideImage}
                alt="Product Benefits"
                className="w-full object-cover"
              />
            </div>
          </section>
        </div>
      </div>

      {/* WHY CHOOSE */}
      <div className="w-full flex bg-white items-center justify-center text-black py-8 md:py-16">
        <div className="w-[90%] flex flex-col gap-4 md:gap-6 items-center text-center">
          <p className="font-bold text-2xl md:text-4xl">{whyChoose.title}</p>
          <p className="w-full lg:w-[65%] text-sm md:text-lg leading-7 lg:leadind-5">
            {whyChoose.text}
          </p>

          <div className="w-full flex flex-col gap-8 mt-6 px-3">
            {whyChoose.features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.id} className={`flex ${feature.align}`}>
                  <div
                    className={`w-full py-8 px-4 ${feature.bgColor} rounded-xl md:rounded-full flex flex-col items-center text-white md:text-start gap-4 shadow-md hover:shadow-lg transition-shadow duration-300 sm:flex-row sm:items-center sm:gap-4 sm:px-3 sm:py-3 md:w-[80%] md:px-6 md:gap-6 lg:w-[60%]`}
                  >
                    <div className="p-3 bg-white rounded-full flex items-center justify-center -ml-2">
                      <Icon className={`${feature.iconColor} text-4xl`} />
                    </div>

                    <p
                      className="text-sm font-medium leading-relaxed sm:text-sm md:text-base"
                      dangerouslySetInnerHTML={{ __html: feature.text }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* KEY BENEFITS */}
      <div className="w-full flex bg-white items-center justify-center text-black py-8 md:py-16">
        <div className="w-[90%] bg-pryClr flex flex-col sm:flex-row gap-4 md:gap-6 items-center text-center">
          <div className="flex-[4] bg-[#75A852]/50 sm:block hidden">
            <img src={keyBenefits.image} alt="Key Benefits" />
          </div>

          <div className="flex-[6] flex flex-col gap-6 text-start text-white px-4 md:px-12 py-12 md:py-6 sm:p-0 rounded-xl bg-pryClr/95 sm:bg-transparent shadow-xl sm:shadow-none transition-all duration-300">
            <p className="font-bold text-2xl sm:text-lg md:text-5xl tracking-tight">
              {keyBenefits.title}
            </p>

            <div className="flex flex-col gap-4 sm:gap-1 md:gap-2 lg:gap-3">
              {keyBenefits.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col gap-1 bg-white/20 p-3 rounded-lg sm:bg-transparent sm:p-0"
                >
                  <p className="text-base sm:text-sm md:text-base font-bold">
                    {item.title}
                  </p>
                  <p className="text-base sm:text-sm md:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA BANNER */}
      <div className="w-full flex bg-white items-center justify-center text-black py-8 md:py-16">
        <div className="w-[90%] relative flex items-center justify-center text-center rounded-lg overflow-hidden">
          <img
            src={ctaBanner.image}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 flex flex-col items-center justify-center gap-4 p-8 md:p-16 text-white">
            <p className="text-lg md:text-3xl font-semibold leading-7 md:leading-10">
              {ctaBanner.text}
            </p>
            <Link to="/login">
              <button className="font-semibold text-lg border border-white rounded-full py-2 px-12 hover:bg-white hover:text-secClr">
                {ctaBanner.buttonText || "Buy Now"}
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="w-full flex bg-white items-center justify-center text-black py-8 md:py-16">
        <div className="w-[90%] flex flex-col gap-4 md:gap-6 items-center text-center text-black">
          <p className="font-bold text-2xl md:text-4xl">Testimonials</p>
          <p className="w-full lg:w-[65%] text-sm md:text-lg leading-7 lg:leading-5">
            From first-time users to loyal customers, here’s what people are
            saying about their journey with us.
          </p>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {loadingTestimonials ? (
              <div className="flex items-center justify-center py-8 col-span-2">
                <FaSpinner className="animate-spin h-8 w-8 text-primary flex-shrink-0" />
              </div>
            ) : testimonials.length > 0 ? (
              testimonials.map((t, index) => (
                <div
                  key={index}
                  className="w-full border border-black/20 rounded-lg p-4 gap-6 flex flex-col items-center"
                >
                  <div className="w-full flex items-center gap-6">
                    <img
                      src={t.imageSrc}
                      className="w-16 h-16 rounded-full"
                      alt={t.name}
                    />
                    <div className="flex flex-col text-start">
                      <p className="text-base md:text-lg font-bold">{t.name}</p>
                      <p className="text-base md:text-lg font-bold text-black/50">
                        {t.title}
                      </p>
                    </div>
                  </div>

                  <div className="w-[90%] flex gap-6">
                    <div
                      className={`w-6 md:w-4 h-18 ${t.barBgColor} rounded-lg`}
                    />
                    <p className="text-sm text-start md:text-base">
                      {t.testimonial}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 py-8 col-span-2">
                No testimonials available
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
