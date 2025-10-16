import React from "react";

const HeroComponent = ({ heroData }) => {
  return (
    <>
      {heroData.map((hero, index) => (
        <section
          key={index}
          className={`w-full mt-12 ${hero.bgColor} flex items-center justify-center h-[55vh] md:h-[50vh] lg:h-[55vh] relative overflow-hidden`}
        >
          {/* Background Image with Green Overlay for Small Screens */}
          {hero.imageSrc && (
            <div 
              className="lg:hidden absolute inset-0 bg-cover bg-center z-0 scale-130 "
              style={{ backgroundImage: `url(${hero.imageSrc})` }}
            >
              <div className="absolute inset-0 bg-pryClr/60" />
            </div>
          )}

          {/* Content Wrapper */}
          <div className="w-[90%] h-full flex flex-col md:flex-row items-center justify-center relative">
            {/* Text Content in Glass Container for Small Screens, Adjusted for md */}
            <div className="w-full md:w-[90%] lg:w-[55%]  flex flex-col items-center lg:items-start text-center lg:text-start gap-4 z-10 bg-white/10 lg:bg-transparent p-10 md:py-8 rounded-t-[200px] lg:rounded-none  lg:backdrop-blur-none border border-white/20 lg:border-none text-white">
              <h1 className="text-3xl md:text-6xl lg:text-4xl font-bold w-[90%] whitespace-pre-wrap">
                {hero.title}
              </h1>
              <p className="text-sm md:text-xl lg:text-base leading-7 md:leading-12 lg:leading-8">
                {hero.subtitle}
              </p>
            </div>

            {/* Desktop Image - Adjusted for md, Original for lg */}

            {hero.imageSrc && (
              <div className="hidden lg:flex w-[50%] h-full items-end justify-end">
                <img
                  src={hero.imageSrc}
                  alt={`${hero.title} hero`}
                  className="w-full md:max-w-[450px] lg:max-w-[370px] h-auto max-h-full object-contain object-bottom"
                  style={{ transform: 'translateY(0)' }}
                />
              </div>
            )}
          </div>
        </section>
      ))}
    </>
  );
};

export default HeroComponent;