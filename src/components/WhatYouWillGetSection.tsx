export default function WhatYouWillGetSection() {
  return (
    <section
      style={{
        backgroundImage: 'linear-gradient(rgb(9, 16, 27) 0%, rgb(10, 17, 28) 79%, rgb(10, 17, 28) 100%)',
        backgroundColor: 'rgb(6, 14, 21)',
      }}
      className="w-full flex flex-col items-center justify-center gap-10 sm:gap-12 md:gap-16 px-4 py-16 sm:py-24 md:py-32"
    >
      {/* Header Section */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 h-auto flex-col sm:flex-row">
        <div style={{ width: 'clamp(24px, 6vw, 35px)', aspectRatio: '0.7 / 1' }} className="relative">
          <img
            decoding="async"
            loading="lazy"
            width="35"
            height="50"
            alt=""
            src="https://framerusercontent.com/images/mvaOEgs9Hu9ZGmsgxFeRZG7isE.svg?width=35&height=50"
            className="w-full h-full object-cover"
          />
        </div>
        <h2
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(28px, 7vw, 55px)',
            lineHeight: 'clamp(28px, 7vw, 55px)',
            textTransform: 'uppercase',
            color: 'rgb(255, 255, 255)',
          }}
          className="font-bold text-center sm:text-left"
        >
          You Will Get{' '}
          <span style={{ fontWeight: 700 }}>Access To</span>
        </h2>
      </div>

      {/* Main Content Container */}
      <div className="w-full max-w-5xl flex flex-col gap-0">
        {/* First Row - STEP-BY-STEP LEARNING */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-0">
          {/* Image Column */}
          <div
            className="w-full lg:flex-1 flex items-center justify-center order-2 lg:order-1"
            style={{ opacity: 0.55 }}
          >
            <div
              style={{
                aspectRatio: '1.04225 / 1',
              }}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md relative"
            >
              <img
                decoding="async"
                loading="lazy"
                width="640"
                height="452"
                alt="image of the real world step by step learning"
                src="https://framerusercontent.com/images/WFSJh0SPfkYfWx6XtirFMSdivIY.webp?width=640&height=452"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Column */}
          <div
            className="w-full lg:flex-1 flex flex-col gap-4 sm:gap-5 md:gap-6 px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-20 order-1 lg:order-2"
            style={{ alignItems: 'flex-start', justifyContent: 'center' }}
          >
            {/* Title */}
            <div>
              <h3
                style={{
                  fontFamily: '"General Sans", sans-serif',
                  fontSize: 'clamp(20px, 5vw, 28px)',
                  fontWeight: 700,
                  lineHeight: '1.3',
                  color: 'rgb(255, 255, 255)',
                }}
              >
                STEP-BY-STEP LEARNING
              </h3>
            </div>

            {/* Description */}
            <div className="w-full">
              <p
                style={{
                  fontFamily: '"General Sans", sans-serif',
                  fontSize: 'clamp(16px, 4vw, 24px)',
                  lineHeight: '1.6',
                  color: 'rgba(255, 255, 255, 0.64)',
                }}
              >
                You will get{' '}
                <span style={{ color: 'rgb(255, 255, 255)', fontWeight: 600 }}>
                  access to 100+ video courses
                </span>{' '}
                and well-structured tutorials covering everything from the
                fundamentals of modern business to{' '}
                <span style={{ color: 'rgb(255, 255, 255)', fontWeight: 600 }}>
                  niche money-making strategies.
                </span>
              </p>
            </div>

            {/* Bullet Points */}
            <div className="w-full flex flex-col gap-2 sm:gap-3">
              {[
                'Easy-to-follow program for financial success',
                'New high income skills',
                'Hyper advanced learning application',
              ].map((text, idx) => (
                <div
                  key={idx}
                  className="w-full flex items-center gap-3 sm:gap-4 bg-[rgb(19,27,35)] rounded-lg px-4 sm:px-6 py-3 sm:py-4"
                  style={{ minHeight: 'auto' }}
                >
                  <div style={{ width: '24px', aspectRatio: '1.24 / 1' }} className="relative flex-shrink-0">
                    <img
                      decoding="async"
                      loading="lazy"
                      width="31"
                      height="25"
                      alt=""
                      src="https://framerusercontent.com/images/sOdW2IUxCQE5reYErU95utmbjk.svg?width=31&height=25"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: 'clamp(14px, 3vw, 20px)',
                      fontWeight: 600,
                      lineHeight: '1.4',
                      color: 'rgb(255, 255, 255)',
                    }}
                  >
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second Row - DAILY LIVE SESSIONS */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-0">
          {/* Content Column */}
          <div
            className="w-full lg:flex-1 flex flex-col gap-4 sm:gap-5 md:gap-6 px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-20"
            style={{ alignItems: 'flex-start', justifyContent: 'center' }}
          >
            {/* Title */}
            <div>
              <h3
                style={{
                  fontFamily: '"General Sans", sans-serif',
                  fontSize: 'clamp(20px, 5vw, 28px)',
                  fontWeight: 700,
                  lineHeight: '1.3',
                  color: 'rgb(255, 255, 255)',
                }}
              >
                DAILY LIVE SESSIONS WITH MILLIONAIRE COACHES
              </h3>
            </div>

            {/* Description */}
            <div className="w-full flex flex-col gap-3 sm:gap-4">
              <p
                style={{
                  fontFamily: '"General Sans", sans-serif',
                  fontSize: 'clamp(16px, 4vw, 24px)',
                  lineHeight: '1.6',
                  color: 'rgba(255, 255, 255, 0.64)',
                }}
              >
                Each of our{' '}
                <span style={{ color: 'rgb(255, 255, 255)', fontWeight: 600 }}>
                  professors have made over $1M USD profit
                </span>{' '}
                using the methods they teach inside of our curriculum.
              </p>

              <p
                style={{
                  fontFamily: '"General Sans", sans-serif',
                  fontSize: 'clamp(16px, 4vw, 24px)',
                  fontWeight: 600,
                  lineHeight: '1.6',
                  color: 'rgb(255, 255, 255)',
                }}
              >
                <br />
              </p>

              <p
                style={{
                  fontFamily: '"General Sans", sans-serif',
                  fontSize: 'clamp(16px, 4vw, 24px)',
                  lineHeight: '1.6',
                  color: 'rgba(255, 255, 255, 0.64)',
                }}
              >
                They are hyper-motivated,{' '}
                <span style={{ color: 'rgb(255, 255, 255)', fontWeight: 600 }}>
                  experienced professionals
                </span>{' '}
                who will provide you with organized coursework, daily new
                lessons and constant{' '}
                <span style={{ color: 'rgb(255, 255, 255)', fontWeight: 600 }}>
                  mentoring throughout your entrepreneurship.
                </span>
              </p>

              <p
                style={{
                  fontFamily: '"General Sans", sans-serif',
                  fontSize: 'clamp(16px, 4vw, 24px)',
                  fontWeight: 600,
                  lineHeight: '1.6',
                  color: 'rgb(255, 255, 255)',
                }}
              >
                <br />
              </p>

              <p
                style={{
                  fontFamily: '"General Sans", sans-serif',
                  fontSize: 'clamp(16px, 4vw, 24px)',
                  fontWeight: 600,
                  lineHeight: '1.6',
                  color: 'rgb(255, 255, 255)',
                }}
              >
                <span style={{ color: 'rgba(255, 255, 255, 0.64)' }}>
                  From learning how to make your first dollar,
                </span>{' '}
                to scaling to a multi million dollar business, THE REAL WORLD is
                unmatched.
              </p>
            </div>
          </div>

          {/* Image Column */}
          <div
            className="w-full lg:flex-1 flex items-center justify-center"
            style={{ opacity: 0.55 }}
          >
            <div
              style={{
                aspectRatio: '1.04225 / 1',
              }}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md relative"
            >
              <img
                decoding="async"
                loading="lazy"
                width="640"
                height="459"
                alt="image of the real world live sessions"
                src="https://framerusercontent.com/images/rtAqc4QjnylNpWdunND5E3NvH9s.webp?width=640&height=459"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Third Row - EXCLUSIVE COMMUNITY */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-0">
          {/* Image Column */}
          <div
            className="w-full lg:flex-1 flex items-center justify-center order-2 lg:order-1"
            style={{ opacity: 0.55 }}
          >
            <div
              style={{
                aspectRatio: '1.04225 / 1',
              }}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md relative"
            >
              <img
                decoding="async"
                loading="lazy"
                width="640"
                height="529"
                alt="image of the real world community"
                src="https://framerusercontent.com/images/5qeJmi3ALthM0cIa4OXf6Fm2K9M.webp?width=640&height=529"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Column */}
          <div
            className="w-full lg:flex-1 flex flex-col gap-4 sm:gap-5 md:gap-6 px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-20 order-1 lg:order-2"
            style={{ alignItems: 'flex-start', justifyContent: 'center' }}
          >
            {/* Title */}
            <div>
              <h3
                style={{
                  fontFamily: '"General Sans", sans-serif',
                  fontSize: 'clamp(20px, 5vw, 28px)',
                  fontWeight: 700,
                  lineHeight: '1.3',
                  color: 'rgb(255, 255, 255)',
                }}
              >
                AN EXCLUSIVE COMMUNITY WITH 113K+ LIKE-MINDED STUDENTS
              </h3>
            </div>

            {/* Description */}
            <div className="w-full">
              <p
                style={{
                  fontFamily: '"General Sans", sans-serif',
                  fontSize: 'clamp(16px, 4vw, 24px)',
                  lineHeight: '1.6',
                  color: 'rgba(255, 255, 255, 0.76)',
                }}
              >
                Our online community is a supportive, high-focus environment.
                Everyone is on the same mission: acquiring an abundance of
                wealth.
              </p>
            </div>

            {/* Bullet Points */}
            <div className="w-full flex flex-col gap-2 sm:gap-3">
              {[
                {
                  label: 'Network with',
                  text: '113,000+ people on the same mission',
                },
                {
                  label: 'Make',
                  text: 'like-minded friends',
                  fullText: 'on your financial journey',
                },
                {
                  label: 'Celebrate your wins',
                  text: 'with people who understand ambition',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="w-full flex items-center gap-3 sm:gap-4 bg-[rgb(19,27,35)] rounded-lg px-4 sm:px-6 py-3 sm:py-4"
                  style={{ minHeight: 'auto' }}
                >
                  <div style={{ width: '24px', aspectRatio: '1.24 / 1' }} className="relative flex-shrink-0">
                    <img
                      decoding="async"
                      loading="lazy"
                      width="31"
                      height="25"
                      alt=""
                      src="https://framerusercontent.com/images/sOdW2IUxCQE5reYErU95utmbjk.svg?width=31&height=25"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div
                    className="flex-1 flex flex-col justify-start"
                  >
                    <p
                      style={{
                        fontFamily: '"General Sans", sans-serif',
                        fontSize: 'clamp(14px, 3vw, 20px)',
                        fontWeight: 600,
                        lineHeight: '1.4',
                        color: 'rgb(255, 255, 255)',
                      }}
                    >
                      {item.label === 'Network with' ? (
                        <>
                          <span style={{ color: 'rgba(255, 255, 255, 0.76)' }}>
                            {item.label}
                          </span>
                          <br />
                          {item.text}
                        </>
                      ) : item.label === 'Make' ? (
                        <>
                          {item.label}{' '}
                          <span style={{ color: 'white', fontWeight: 600 }}>
                            {item.text}
                          </span>
                          <br />
                          {item.fullText}
                        </>
                      ) : (
                        <>
                          <span style={{ color: 'white', fontWeight: 600 }}>
                            {item.label}
                          </span>
                          <br />
                          {item.text}
                        </>
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="flex flex-col items-center justify-center gap-2 sm:gap-3 mt-6 sm:mt-8 px-4">
        {/* Button */}
        <a
          href="/checkout"
          rel="noopener noreferrer"
          style={{
            backgroundImage: 'linear-gradient(95deg, rgb(255, 169, 48) 0%, rgb(255, 171, 35) 51.2387%, rgb(213, 170, 18) 113.52%)',
            borderRadius: '10px',
            padding: 'clamp(14px, 3vw, 20px) clamp(24px, 6vw, 34px)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            willChange: 'transform',
            zIndex: 1,
          }}
          className="hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        >
          <p
            style={{
              fontFamily: '"General Sans", sans-serif',
              fontSize: 'clamp(14px, 3.5vw, 19.2px)',
              fontWeight: 700,
              letterSpacing: '1.2px',
              lineHeight: '24px',
              textAlign: 'center',
              textTransform: 'uppercase',
            }}
            className="text-black"
          >
            JOIN THE REAL WORLD
          </p>
        </a>

        {/* Urgency Message */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-center">
          <div style={{ width: '14px', aspectRatio: '0.592593 / 1' }} className="relative flex-shrink-0 hidden sm:block">
            <img
              decoding="async"
              loading="lazy"
              width="16"
              height="27"
              alt=""
              src="https://framerusercontent.com/images/JsI5CAvy5xqUtXAh73O67xpLws.svg?width=16&height=27"
              className="w-full h-full object-cover"
            />
          </div>
          <p
            style={{
              fontFamily: '"General Sans", sans-serif',
              fontSize: 'clamp(13px, 3vw, 18px)',
              lineHeight: '1.4',
              color: 'rgba(255, 255, 255, 0.6)',
            }}
          >
            Lock-in your price before it increases.{' '}
            <span style={{ color: 'rgb(255, 207, 35)' }}>Act fast.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
