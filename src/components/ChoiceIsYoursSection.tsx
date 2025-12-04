export default function ChoiceIsYoursSection() {
  return (
    <section
      style={{
        backgroundColor: 'rgb(6, 14, 21)',
      }}
      className="w-full flex flex-col items-center justify-center gap-16 px-4 py-24 md:py-32"
    >
      {/* Main Title */}
      <div className="flex flex-col items-center">
        <h2
          style={{
            fontFamily: '"General Sans", sans-serif',
            fontSize: '48px',
            lineHeight: '66px',
            color: 'rgb(255, 255, 255)',
            whiteSpace: 'pre',
          }}
          className="font-normal"
        >
          THE CHOICE IS YOURS
        </h2>
      </div>

      {/* Video Section */}
      <div className="w-full flex items-center justify-center">
        <div
          style={{
            borderRadius: '10px',
            boxShadow: 'rgba(255, 255, 255, 0.14) 0px 2px 70px 1px',
            height: '536px',
            width: '950px',
            maxWidth: '100%',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Dark Overlay */}
          <div
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              aspectRatio: '1.7633 / 1',
              zIndex: 10,
            }}
          />

          {/* Video Container */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '100%',
              overflow: 'hidden',
            }}
          >
            <iframe
              src="https://player.vimeo.com/video/861012892?autopause=0&app_id=122963"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="YOU HAVE TWO OPTIONS"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
            />
          </div>
        </div>
      </div>

      {/* Main Content Card */}
      <div
        style={{
          backgroundColor: 'rgb(19, 27, 35)',
          borderRadius: '10px',
          padding: '56px',
          display: 'flex',
          flexDirection: 'column',
          gap: '48px',
          width: 'fit-content',
          maxWidth: '100%',
        }}
        className="flex-shrink-0"
      >
        {/* Header Section */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
            alignItems: 'center',
          }}
        >
          {/* Title and Description */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              alignItems: 'center',
            }}
          >
            <h3
              style={{
                fontFamily: '"General Sans", sans-serif',
                fontSize: '40px',
                fontWeight: 700,
                lineHeight: '47px',
                color: 'rgb(255, 255, 255)',
                whiteSpace: 'pre',
              }}
            >
              TAKE ACTION
            </h3>
            <p
              style={{
                fontFamily: '"General Sans", sans-serif',
                fontSize: '27px',
                fontWeight: 700,
                lineHeight: '31px',
                color: 'rgb(255, 255, 255)',
                whiteSpace: 'pre',
              }}
            >
              You need to act now.
            </p>
          </div>

          {/* Pricing Section */}
          <div
            style={{
              display: 'flex',
              gap: '12px',
              alignItems: 'center',
            }}
          >
            <p
              style={{
                fontFamily: '"General Sans", sans-serif',
                fontSize: '35px',
                fontWeight: 600,
                lineHeight: '40px',
                color: 'rgba(255, 255, 255, 0.66)',
                textDecoration: 'line-through',
                whiteSpace: 'pre',
              }}
            >
              $147
            </p>
            <p
              style={{
                fontFamily: '"General Sans", sans-serif',
                fontSize: '35px',
                fontWeight: 600,
                lineHeight: '40px',
                color: 'rgb(255, 207, 35)',
                whiteSpace: 'pre',
              }}
            >
              $49.99
            </p>
          </div>
        </div>

        {/* Features List */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            alignItems: 'flex-start',
            alignSelf: 'stretch',
          }}
        >
          {[
            'Simple-step-by-step tutorials',
            '19 wealth creation methods',
            'Access to millionaire mentors',
            'Community chat groups',
            'No experience',
            'Custom-made learning app',
            'Cancel anytime, risk-free',
            '$49.99/month forever',
          ].map((feature, idx) => {
            const isSpecialFeature = idx === 6 || idx === 7;
            const iconWidth = isSpecialFeature ? 26 : 31;
            const iconHeight = isSpecialFeature ? 32 : 25;
            const iconSrc =
              idx === 6
                ? 'https://framerusercontent.com/images/oHEZH0c9ZooBJrdqMUMU6Q0zoc.svg?width=26&height=32'
                : idx === 7
                  ? 'https://framerusercontent.com/images/5zLicH57magQctPu8Q5swD0rvik.svg?width=25&height=32'
                  : 'https://framerusercontent.com/images/sOdW2IUxCQE5reYErU95utmbjk.svg?width=31&height=25';

            return (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'center',
                  width: '100%',
                }}
              >
                <div
                  style={{
                    width: iconWidth,
                    aspectRatio: `${iconWidth} / ${iconHeight}`,
                    position: 'relative',
                    flexShrink: 0,
                  }}
                >
                  <img
                    decoding="auto"
                    loading="lazy"
                    width={iconWidth}
                    height={iconHeight}
                    alt=""
                    src={iconSrc}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <p
                  style={{
                    fontFamily: '"General Sans", sans-serif',
                    fontSize: '24px',
                    lineHeight: '28.8px',
                    color: 'rgba(255, 255, 255, 0.7)',
                    whiteSpace: 'pre',
                  }}
                >
                  {feature}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            alignItems: 'center',
          }}
        >
          {/* Button */}
          <a
            rel="noopener"
            href="/checkout"
            style={{
              backgroundImage: 'linear-gradient(95deg, rgb(255, 169, 48) 0%, rgb(255, 171, 35) 51.2387%, rgb(213, 170, 18) 113.52%)',
              borderRadius: '10px',
              padding: '20px 34px',
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
                fontSize: '19.2px',
                fontWeight: 700,
                letterSpacing: '1.2px',
                lineHeight: '24px',
                textAlign: 'center',
                textTransform: 'uppercase',
                whiteSpace: 'pre',
              }}
              className="text-black"
            >
              JOIN THE REAL WORLD
            </p>
          </a>

          {/* Urgency Message */}
          <div
            style={{
              display: 'flex',
              gap: '8px',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div style={{ width: '16px', aspectRatio: '0.592593 / 1' }} className="relative">
              <img
                decoding="auto"
                loading="lazy"
                width="16"
                height="27"
                alt=""
                src="https://framerusercontent.com/images/JsI5CAvy5xqUtXAh73O67xpLws.svg?width=16&height=27"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
            <p
              style={{
                fontFamily: '"General Sans", sans-serif',
                fontSize: '18px',
                lineHeight: '20px',
                color: 'rgba(255, 255, 255, 0.6)',
                whiteSpace: 'pre',
              }}
            >
              Lock-in your price before it increases.{' '}
              <span style={{ color: 'rgb(255, 207, 35)' }}>Act fast.</span>
            </p>
          </div>
        </div>
      </div>

      {/* OR DO NOTHING Section */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          alignItems: 'center',
        }}
      >
        <p
          style={{
            fontFamily: '"General Sans", sans-serif',
            fontSize: '40px',
            fontWeight: 500,
            lineHeight: '47px',
            color: 'rgb(255, 255, 255)',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
            overflowWrap: 'break-word',
            textAlign: 'center',
          }}
        >
          OR DO NOTHING..
        </p>
        <p
          style={{
            fontFamily: '"General Sans", sans-serif',
            fontSize: '27px',
            lineHeight: '35px',
            color: 'rgb(255, 255, 255)',
            textAlign: 'center',
            whiteSpace: 'pre',
          }}
        >
          Go watch Netflix. Work a 9-5.
        </p>
      </div>
    </section>
  );
}
