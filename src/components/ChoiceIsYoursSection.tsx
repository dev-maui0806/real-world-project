export default function ChoiceIsYoursSection() {
  const features = [
    { text: 'Simple-step-by-step tutorials', iconWidth: 31, iconHeight: 25 },
    { text: '19 wealth creation methods', iconWidth: 31, iconHeight: 25 },
    { text: 'Access to millionaire mentors', iconWidth: 31, iconHeight: 25 },
    { text: 'Community chat groups', iconWidth: 31, iconHeight: 25 },
    { text: 'No experience', iconWidth: 31, iconHeight: 25 },
    { text: 'Custom-made learning app', iconWidth: 31, iconHeight: 25 },
    { text: 'Cancel anytime, risk-free', iconWidth: 26, iconHeight: 32 },
    { text: '$49.99/month forever', iconWidth: 25, iconHeight: 32 },
  ];

  const getIconSrc = (idx: number): string => {
    if (idx === 6) {
      return 'https://framerusercontent.com/images/oHEZH0c9ZooBJrdqMUMU6Q0zoc.svg?width=26&height=32';
    }
    if (idx === 7) {
      return 'https://framerusercontent.com/images/5zLicH57magQctPu8Q5swD0rvik.svg?width=25&height=32';
    }
    return 'https://framerusercontent.com/images/sOdW2IUxCQE5reYErU95utmbjk.svg?width=31&height=25';
  };

  return (
    <section
      style={{
        backgroundColor: 'rgb(6, 14, 21)',
      }}
      className="w-full flex flex-col items-center justify-center gap-8 sm:gap-12 md:gap-16 px-4 py-12 sm:py-20 md:py-24 lg:py-32"
    >
      <div className="flex flex-col items-center w-full">
        <h2
          style={{
            fontFamily: '"General Sans", sans-serif',
            fontSize: 'clamp(32px, 7vw, 48px)',
            lineHeight: 'clamp(42px, 9vw, 66px)',
            color: 'rgb(255, 255, 255)',
          }}
          className="font-normal text-center"
        >
          THE CHOICE IS YOURS
        </h2>
      </div>

      <div className="w-full flex items-center justify-center px-0 sm:px-2 md:px-4">
        <div
          style={{
            borderRadius: '10px',
            boxShadow: 'rgba(255, 255, 255, 0.14) 0px 2px 70px 1px',
            aspectRatio: '16 / 9',
            width: '100%',
            maxWidth: '950px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
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

      <div
        style={{
          backgroundColor: 'rgb(19, 27, 35)',
          borderRadius: '10px',
          padding: 'clamp(24px, 8vw, 56px)',
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          alignItems: 'center',
          gap: 'clamp(24px, 6vw, 48px)',
          maxWidth: '950px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(20px, 5vw, 32px)',
            alignItems: 'center',
          }}
        >
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
                fontSize: 'clamp(28px, 6vw, 40px)',
                fontWeight: 700,
                lineHeight: 'clamp(36px, 8vw, 47px)',
                color: 'rgb(255, 255, 255)',
                textAlign: 'center',
                margin: 0,
              }}
            >
              TAKE ACTION
            </h3>
            <p
              style={{
                fontFamily: '"General Sans", sans-serif',
                fontSize: 'clamp(20px, 5vw, 27px)',
                fontWeight: 700,
                lineHeight: 'clamp(26px, 6vw, 31px)',
                color: 'rgb(255, 255, 255)',
                textAlign: 'center',
                margin: 0,
              }}
            >
              You need to act now.
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              gap: '12px',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <p
              style={{
                fontFamily: '"General Sans", sans-serif',
                fontSize: 'clamp(24px, 5vw, 35px)',
                fontWeight: 600,
                lineHeight: 'clamp(30px, 6vw, 40px)',
                color: 'rgba(255, 255, 255, 0.66)',
                textDecoration: 'line-through',
                margin: 0,
              }}
            >
              $147
            </p>
            <p
              style={{
                fontFamily: '"General Sans", sans-serif',
                fontSize: 'clamp(24px, 5vw, 35px)',
                fontWeight: 600,
                lineHeight: 'clamp(30px, 6vw, 40px)',
                color: 'rgb(255, 207, 35)',
                margin: 0,
              }}
            >
              $49.99
            </p>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(12px, 3vw, 16px)',
            alignItems: 'flex-start',
            alignSelf: 'stretch',
          }}
        >
          {features.map((feature, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                gap: 'clamp(12px, 3vw, 16px)',
                alignItems: 'flex-start',
                width: '100%',
              }}
            >
              <div
                style={{
                  width: `clamp(20px, 4vw, ${feature.iconWidth}px)`,
                  aspectRatio: `${feature.iconWidth} / ${feature.iconHeight}`,
                  position: 'relative',
                  flexShrink: 0,
                }}
              >
                <img
                  decoding="auto"
                  loading="lazy"
                  width={feature.iconWidth}
                  height={feature.iconHeight}
                  alt=""
                  src={getIconSrc(idx)}
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
                  fontSize: 'clamp(16px, 4vw, 24px)',
                  lineHeight: 'clamp(22px, 5vw, 28.8px)',
                  color: 'rgba(255, 255, 255, 0.7)',
                  margin: 0,
                }}
              >
                {feature.text}
              </p>
            </div>
          ))}
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(8px, 3vw, 10px)',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <a
            rel="noopener"
            href="/checkout"
            style={{
              backgroundImage: 'linear-gradient(95deg, rgb(255, 169, 48) 0%, rgb(255, 171, 35) 51.2387%, rgb(213, 170, 18) 113.52%)',
              borderRadius: '10px',
              padding: 'clamp(16px, 3vw, 20px) clamp(20px, 6vw, 34px)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              willChange: 'transform',
              zIndex: 1,
              textDecoration: 'none',
            }}
            className="hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <p
              style={{
                fontFamily: '"General Sans", sans-serif',
                fontSize: 'clamp(14px, 4vw, 19.2px)',
                fontWeight: 700,
                letterSpacing: 'clamp(0.6px, 1vw, 1.2px)',
                lineHeight: 'clamp(18px, 5vw, 24px)',
                textAlign: 'center',
                textTransform: 'uppercase',
                margin: 0,
                color: 'rgb(0, 0, 0)',
              }}
            >
              JOIN THE REAL WORLD
            </p>
          </a>

          <div
            style={{
              display: 'flex',
              gap: 'clamp(6px, 2vw, 8px)',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: 'clamp(12px, 3vw, 16px)',
                aspectRatio: '0.592593 / 1',
                position: 'relative',
                flexShrink: 0,
              }}
            >
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
                fontSize: 'clamp(14px, 3vw, 18px)',
                lineHeight: 'clamp(18px, 4vw, 20px)',
                color: 'rgba(255, 255, 255, 0.6)',
                textAlign: 'center',
                margin: 0,
              }}
            >
              Lock-in your price before it increases.{' '}
              <span style={{ color: 'rgb(255, 207, 35)' }}>Act fast.</span>
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(8px, 3vw, 10px)',
          alignItems: 'center',
        }}
      >
        <p
          style={{
            fontFamily: '"General Sans", sans-serif',
            fontSize: 'clamp(28px, 6vw, 40px)',
            fontWeight: 500,
            lineHeight: 'clamp(36px, 8vw, 47px)',
            color: 'rgb(255, 255, 255)',
            textAlign: 'center',
            margin: 0,
          }}
        >
          OR DO NOTHING..
        </p>
        <p
          style={{
            fontFamily: '"General Sans", sans-serif',
            fontSize: 'clamp(20px, 5vw, 27px)',
            lineHeight: 'clamp(28px, 6vw, 35px)',
            color: 'rgb(255, 255, 255)',
            textAlign: 'center',
            margin: 0,
          }}
        >
          Go watch Netflix. Work a 9-5.
        </p>
      </div>
    </section>
  );
}
