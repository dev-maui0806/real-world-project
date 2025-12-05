interface LockInPriceSectionProps {
  heading?: string;
  description?: React.ReactNode;
  buttonText?: string;
  buttonUrl?: string;
  socialProofText?: string;
}

export default function LockInPriceSection({
  heading = 'LOCK-IN YOUR PRICE OF $49.99',
  description = (
    <>
      The price will increase to $147 a month, it's your last chance.
      <br />
      <br />
      Hundreds of thousands of students have already joined THE REAL WORLD
      and are on their way to financial freedom.
      <br />
      <br />
      Join now before the price increases to $147 a month.
      <br />
      Don't miss out on this opportunity.
    </>
  ),
  buttonText = 'JOIN THE REAL WORLD',
  buttonUrl = '/checkout',
  socialProofText = 'Join 113,000+ like-minded students',
}: LockInPriceSectionProps = {}) {
  return (
    <section
      style={{
        backgroundColor: 'rgb(6, 14, 21)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'clamp(1.5rem, 6vw, 2.5rem)',
        paddingTop: 'clamp(1rem, 4vw, 1.5rem)',
        paddingBottom: 'clamp(2rem, 8vw, 4rem)',
        paddingLeft: 'clamp(1rem, 5vw, 2rem)',
        paddingRight: 'clamp(1rem, 5vw, 2rem)',
        width: '100%',
      }}
      className="relative"
    >
      {/* Main Container */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'clamp(1.25rem, 5vw, 2.5rem)',
          maxWidth: '830px',
          width: '100%',
          position: 'relative',
        }}
      >
        {/* Icon Section with Glow */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            position: 'relative',
            width: 'fit-content',
          }}
        >
          {/* Glow Effect Background */}
          <div
            style={{
              position: 'absolute',
              width: 'clamp(50px, 12vw, 100px)',
              height: 'clamp(50px, 12vw, 100px)',
              backgroundColor: 'rgba(255, 207, 35, 0.28)',
              filter: 'blur(40px)',
              top: 'clamp(-5px, -2vw, -10px)',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 0,
              borderRadius: '50%',
            }}
          />

          {/* Icon Container */}
          <div
            style={{
              position: 'relative',
              width: 'clamp(40px, 10vw, 68px)',
              aspectRatio: '1.11475 / 1',
              zIndex: 1,
            }}
          >
            <img
              decoding="auto"
              loading="lazy"
              width="68"
              height="61"
              alt="Price lock icon"
              src="https://framerusercontent.com/images/Q5hOuRnQgnoZhElcOKtTockJS8Q.webp?width=68&height=61"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
        </div>

        {/* Heading */}
        <h2
          style={{
            fontFamily: '"General Sans", sans-serif',
            fontSize: 'clamp(1.5rem, 6vw, 2.75rem)',
            fontWeight: 700,
            lineHeight: 'clamp(2rem, 7vw, 3.3rem)',
            color: 'rgb(255, 255, 255)',
            textAlign: 'center',
            whiteSpace: 'normal',
            wordBreak: 'break-word',
            overflowWrap: 'break-word',
            zIndex: 5,
            position: 'relative',
          }}
        >
          {heading}
        </h2>

        {/* Description Text */}
        <p
          style={{
            fontFamily: '"General Sans", sans-serif',
            fontSize: 'clamp(0.875rem, 3.5vw, 1.5rem)',
            lineHeight: 'clamp(1.5rem, 4vw, 2.25rem)',
            color: 'rgba(255, 255, 255, 0.71)',
            textAlign: 'center',
            whiteSpace: 'normal',
            wordBreak: 'break-word',
            overflowWrap: 'break-word',
            width: '100%',
            margin: 0,
          }}
        >
          {description}
        </p>
      </div>

      {/* CTA Section */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'clamp(0.5rem, 2vw, 0.625rem)',
          position: 'relative',
          width: '100%',
          maxWidth: '600px',
        }}
      >
        {/* Main Button */}
        <a
          rel="noopener"
          href={buttonUrl}
          style={{
            backgroundImage: 'linear-gradient(95deg, rgb(255, 169, 48) 0%, rgb(255, 171, 35) 51.2387%, rgb(213, 170, 18) 113.52%)',
            borderRadius: '10px',
            padding: 'clamp(1rem, 2.5vw, 1.25rem) clamp(1.25rem, 5vw, 2.125rem)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            willChange: 'transform',
            zIndex: 1,
            width: '100%',
          }}
          className="hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        >
          <p
            style={{
              fontFamily: '"General Sans", sans-serif',
              fontSize: 'clamp(0.875rem, 3.5vw, 1.5rem)',
              fontWeight: 700,
              letterSpacing: 'clamp(0.4px, 0.8vw, 1.2px)',
              lineHeight: 'clamp(1rem, 3vw, 1.5rem)',
              textAlign: 'center',
              textTransform: 'uppercase',
              whiteSpace: 'normal',
              margin: 0,
              wordBreak: 'break-word',
            }}
            className="text-black"
          >
            {buttonText}
          </p>
        </a>

        {/* Social Proof Section */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'clamp(0.4rem, 1.5vw, 0.5rem)',
            minHeight: 'clamp(20px, 5vw, 32px)',
            position: 'relative',
            flexWrap: 'wrap',
            width: '100%',
          }}
        >
          {/* User Avatars */}
          <div
            style={{
              position: 'relative',
              width: 'clamp(60px, 12vw, 100px)',
              aspectRatio: '3.17143 / 1',
              flexShrink: 0,
            }}
          >
            <img
              decoding="auto"
              loading="lazy"
              width="111"
              height="35"
              alt="Student avatars"
              src="https://framerusercontent.com/images/VTr2kDuZjyrrr32wNrJaUIadk.webp"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>

          {/* Text */}
          <p
            style={{
              fontFamily: '"General Sans", sans-serif',
              fontSize: 'clamp(0.75rem, 2.5vw, 1.125rem)',
              lineHeight: 'clamp(1rem, 3vw, 1.25rem)',
              color: 'rgba(255, 255, 255, 0.6)',
              whiteSpace: 'normal',
              margin: 0,
              textAlign: 'center',
              wordBreak: 'break-word',
            }}
          >
            {socialProofText}
          </p>
        </div>
      </div>
    </section>
  );
}
