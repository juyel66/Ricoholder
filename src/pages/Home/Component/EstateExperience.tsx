const EstateExperience = () => {
  const stats = [
    { src: "https://res.cloudinary.com/dqkczdjjs/image/upload/v1760815143/Frame_48095987_luvjtw.png", alt: "10+ Years Stat" },
    { src: "https://res.cloudinary.com/dqkczdjjs/image/upload/v1760815180/Frame_48095988_1_iqjop1.png", alt: "100% List to Rent Ratio Stat" },
    { src: "https://res.cloudinary.com/dqkczdjjs/image/upload/v1760389542/Frame_48095990_nt2hfo.png", alt: "$1Bn+ Curated Portfolio Stat" },
  ];

  return (
    <div className="bg-[#00575d] mt-20 p-5 text-white py-16 md:py-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT COLUMN */}
          <div className="lg:pr-12">
            <h2 className="text-4xl md:text-5xl xl:text-5xl font-extrabold font-serif leading-tight mb-8">
              Where Estate Expertise Meets Aesthetic Excellence
            </h2>

            <p className="text-lg md:text-xl xl:text-base leading-relaxed mb-12">
              Eastmond Villas, a multi-award-winning luxury real estate and villa
              rental service in Barbados, epitomizes excellence in elevated living.
              With a focus on timeless beauty and personalized client experiences,
              we craft tailored residences and premium vacation properties for those
              who seek the exceptional. Our portfolio showcases our signature approach:
              understated luxury, flawlessly executed.
            </p>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row justify-between items-start gap-y-8 sm:gap-x-4 lg:gap-x-8 xl:gap-x-12">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center w-full sm:w-1/3 lg:w-auto">
                  <img
                    src={stat.src}
                    alt={stat.alt}
                    className="w-44 h-44 sm:w-40 sm:h-40 lg:w-48 lg:h-48 xl:w-44 xl:h-44 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="relative flex justify-center lg:justify-end h-[500px] lg:h-[600px] mt-12 lg:mt-0">
            <div className="relative w-[300px] h-[500px] sm:w-[350px] sm:h-[550px] lg:w-[450px] lg:h-[600px] xl:w-[400px] xl:h-[580px] overflow-hidden ">
              <img
                src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1760815236/Rectangle_278_ocm988.png"
                alt="Luxury Villa"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EstateExperience;
