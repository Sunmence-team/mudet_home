import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import assets from "../assets/assests";

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ✅ Local products (no fetch)
  const products = [
    {
      id: 1,
      slug: "cinnamon-herbal-extract",
      name: "Cinnamon Herbal Extract",
      tagline: "Natural wellness support for balance, digestion, and vitality.",
      image: assets.pic13,
    },
    {
      id: 2,
      slug: "armor-herbal-extract",
      name: "Armor Herbal Extract",
      tagline: "Your daily shield for total body wellness — for men & women.",
      image: assets.armor, // 🔁 replace with Armor image when you have it
    },
  ];

  return (
    <div className="w-full bg-white flex flex-col items-center">
      {/* Header */}
      <div className="w-[90%] py-12 md:py-16 text-center">
        <p className="text-3xl md:text-5xl font-bold text-black">
          Our Products
        </p>
        <p className="mt-3 text-sm md:text-lg text-black/70 max-w-2xl mx-auto">
          Explore our natural herbal extracts designed to support everyday
          wellness and vitality.
        </p>
      </div>

      {/* Products Grid */}
      <div className="w-[90%] grid grid-cols-1 md:grid-cols-2 gap-8 pb-16">
        {products.map((p) => (
          <div
            key={p.id}
            className="w-full border border-black/10 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="w-full h-[260px] bg-black/5 overflow-hidden">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 flex flex-col gap-3">
              <p className="text-xl md:text-2xl font-bold text-black">
                {p.name}
              </p>
              <p className="text-sm md:text-base text-black/70 leading-7">
                {p.tagline}
              </p>

              <div className="mt-3">
                <Link to={`/products/${p.slug}`}>
                  <button className="px-8 py-2 rounded-full bg-pryClr text-white font-semibold hover:bg-pryClr/90 transition-colors">
                    View Product
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="w-[90%] mb-16 rounded-2xl bg-pryClr text-white p-8 md:p-12 text-center">
        <p className="text-2xl md:text-4xl font-bold">
          Ready to start your wellness journey?
        </p>
        <p className="mt-3 text-sm md:text-lg text-white/90 max-w-2xl mx-auto">
          Choose a product that fits your goal and take the next step toward
          better daily wellness.
        </p>

        <div className="mt-6">
          <Link to="/login">
            <button className="px-10 py-2 rounded-full bg-white text-pryClr font-semibold hover:bg-white/90 transition-colors">
              Shop With Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
