'use client';

export default function NewSkillsSection() {
  return (
    <section className="w-full bg-[#060e15] py-16 md:py-32 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-12 md:gap-12">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-8 w-full">
          {/* Title with Icon */}
          <div className="flex flex-col md:flex-row items-center gap-4 justify-center w-full">
            <div className="w-12 h-13 flex-shrink-0">
              <img
                decoding="auto"
                loading="lazy"
                width="50"
                height="52"
                alt="New Skills Icon"
                src="https://framerusercontent.com/images/3zej97IIW4iboGwUh4ah7MlRzBw.svg?width=50&height=52"
                className="w-full h-auto object-contain"
              />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white font-sans tracking-wide">
              NEW SKILLS
            </h3>
          </div>

          {/* Description */}
          <p className="max-w-2xl text-lg md:text-xl text-gray-400 text-center leading-relaxed">
            We are constantly adding new skills and wealth creation methods that we
            couldn't previously disclose. Join The Real World and level up now.
          </p>
        </div>

        {/* Feature Card Section */}
        <div className="w-full relative">
          {/* Background gradient container */}
          <div
            className="w-full rounded-xl overflow-hidden"
            style={{
              background: `linear-gradient(
                106deg,
                rgb(6, 14, 21) 4%,
                rgba(28, 36, 42, 0) 32%,
                rgba(8, 16, 23, 0) 71%,
                rgb(6, 14, 21) 96%
              )`,
              
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              padding: '24px 16px',
              gap: '16px',
            }}
          >
            {/* Feature Card - Left */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 max-w-xs md:max-w-md flex-shrink-0">
              {/* Icon */}
              <div className="w-11 h-11 flex-shrink-0">
                <img
                  decoding="auto"
                  loading="lazy"
                  width="44"
                  height="44"
                  alt="Artificial Intelligence Icon"
                  src="https://framerusercontent.com/images/0Ms1CioEElYNJiy9OhvKEbyd8.svg?width=44&height=44"
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-2">
                <p className="text-xl md:text-2xl font-bold text-white font-sans">
                  Artificial Intelligence
                </p>
                <p className="text-lg md:text-xl text-gray-300 font-sans">
                  Integrated in all Campuses
                </p>
              </div>
            </div>

            {/* Feature Image - Right (Positioned absolutely) */}
            <div
              className="absolute right-[20%] top-[49%] transform -translate-y-1/2 hidden md:block"
              style={{ width: 'auto', maxWidth: '600px', zIndex: 10 }}
            >
              <img
                decoding="auto"
                loading="lazy"
                width="809"
                height="140"
                alt="AI Feature Visualization"
                src="https://framerusercontent.com/images/aiAJNfT874zy2ufIfnCLOOWrIc.webp?width=809&height=140"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Gradient Overlay */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                top: 0,
                background: `linear-gradient(
                  106deg,
                  rgb(6, 14, 21) 4%,
                  rgba(28, 36, 42, 0) 32%,
                  rgba(8, 16, 23, 0) 71%,
                  rgb(6, 14, 21) 91.3382%
                )`,
                zIndex: 20,
                pointerEvents: 'none',
              }}
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col items-center gap-6 w-full">
          {/* Main Button */}
          <a
            href="/checkout"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-5 md:px-10 md:py-6 bg-gradient-to-r from-[#ffa930] to-[#d5aa12] rounded-xl font-bold text-black text-xl md:text-2xl tracking-wider hover:shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 transform hover:scale-105 uppercase"
          >
            Join The Real World
          </a>

          {/* Secondary CTA */}
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-8 flex-shrink-0">
              <img
                decoding="auto"
                loading="lazy"
                width="31"
                height="31"
                alt="Campus Icon"
                src="https://framerusercontent.com/images/I18Xl5BCgh2g9xqaniMW3K4c1s.svg?width=31&height=31"
                className="w-full h-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm md:text-base">
              Get access to all 10+ Campuses
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
