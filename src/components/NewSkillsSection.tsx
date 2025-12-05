'use client';

export default function NewSkillsSection() {
  return (
    <section className="w-full bg-[#060e15] py-8 sm:py-12 md:py-20 lg:py-32 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8 w-full">
          {/* Title with Icon */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 md:gap-4 justify-center w-full">
            <div
              style={{
                width: 'clamp(36px, 8vw, 50px)',
                aspectRatio: '1 / 1.04',
                flexShrink: 0,
              }}
            >
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
            <h3
              style={{
                fontSize: 'clamp(24px, 6vw, 36px)',
                lineHeight: 'clamp(30px, 8vw, 44px)',
              }}
              className="font-bold text-white font-sans tracking-wide text-center sm:text-left"
            >
              NEW SKILLS
            </h3>
          </div>

          {/* Description */}
          <p
            style={{
              fontSize: 'clamp(14px, 3.5vw, 20px)',
              lineHeight: 'clamp(20px, 5vw, 28px)',
            }}
            className="max-w-2xl text-gray-400 text-center leading-relaxed px-2"
          >
            We are constantly adding new skills and wealth creation methods that we
            couldn't previously disclose. Join The Real World and level up now.
          </p>
        </div>

        {/* Feature Card Section */}
        <div className="w-full relative">
          {/* Background gradient container */}
          <div
            className="w-full rounded-lg sm:rounded-xl overflow-hidden relative"
            style={{
              background: `linear-gradient(
                106deg,
                rgb(6, 14, 21) 4%,
                rgba(28, 36, 42, 0) 32%,
                rgba(8, 16, 23, 0) 71%,
                rgb(6, 14, 21) 96%
              )`,

              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              padding: 'clamp(16px, 5vw, 32px)',
              gap: 'clamp(12px, 4vw, 20px)',
              minHeight: 'clamp(200px, 50vw, 350px)',
            }}
          >
            {/* Feature Card - Left */}
            <div className="flex flex-col items-start gap-2 sm:gap-3 md:gap-4 w-full lg:w-1/2 relative z-10">
              {/* Icon */}
              <div
                style={{
                  width: 'clamp(32px, 8vw, 44px)',
                  aspectRatio: '1 / 1',
                  flexShrink: 0,
                }}
              >
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
              <div className="flex flex-col gap-1 sm:gap-2">
                <p
                  style={{
                    fontSize: 'clamp(18px, 5vw, 24px)',
                    lineHeight: 'clamp(24px, 6vw, 30px)',
                  }}
                  className="font-bold text-white font-sans"
                >
                  Artificial Intelligence
                </p>
                <p
                  style={{
                    fontSize: 'clamp(14px, 4vw, 18px)',
                    lineHeight: 'clamp(18px, 5vw, 24px)',
                  }}
                  className="text-gray-300 font-sans"
                >
                  Integrated in all Campuses
                </p>
              </div>
            </div>

            {/* Feature Image - Right */}
            <div
              className="hidden lg:flex w-1/2 absolute right-0 top-1/2 transform -translate-y-1/2 justify-end pr-4"
              style={{
                maxWidth: '50%',
                zIndex: 5,
              }}
            >
              <img
                decoding="auto"
                loading="lazy"
                width="809"
                height="140"
                alt="AI Feature Visualization"
                src="https://framerusercontent.com/images/aiAJNfT874zy2ufIfnCLOOWrIc.webp?width=809&height=140"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                }}
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
                zIndex: 0,
                pointerEvents: 'none',
              }}
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col items-center gap-3 sm:gap-4 md:gap-6 w-full">
          {/* Main Button */}
          <a
            href="/checkout"
            rel="noopener noreferrer"
            style={{
              padding: 'clamp(14px, 3vw, 20px) clamp(20px, 6vw, 36px)',
              fontSize: 'clamp(14px, 3.5vw, 20px)',
              letterSpacing: 'clamp(0.6px, 1vw, 1px)',
              lineHeight: 'clamp(18px, 5vw, 24px)',
            }}
            className="inline-flex items-center justify-center bg-gradient-to-r from-[#ffa930] to-[#d5aa12] rounded-lg sm:rounded-xl font-bold text-black tracking-wider hover:shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 transform hover:scale-105 uppercase whitespace-normal text-center"
          >
            Join The Real World
          </a>

          {/* Secondary CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 flex-wrap px-2">
            <div
              style={{
                width: 'clamp(20px, 5vw, 31px)',
                aspectRatio: '1 / 1',
                flexShrink: 0,
              }}
            >
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
            <p
              style={{
                fontSize: 'clamp(12px, 3vw, 16px)',
                lineHeight: 'clamp(16px, 4vw, 20px)',
              }}
              className="text-gray-400 text-center"
            >
              Get access to all 10+ Campuses
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
