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
        gap: '40px',
        paddingTop: '24px',
        paddingBottom: '64px',
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
          gap: '40px',
          maxWidth: '830px',
          width: '100%',
          position: 'relative',
          paddingLeft: '16px',
          paddingRight: '16px',
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
              width: '100px',
              height: '100px',
              backgroundColor: 'rgba(255, 207, 35, 0.28)',
              filter: 'blur(40px)',
              top: '-10px',
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
              width: '68px',
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
            fontSize: '44px',
            fontWeight: 700,
            lineHeight: '52.8px',
            color: 'rgb(255, 255, 255)',
            textAlign: 'center',
            whiteSpace: 'pre-wrap',
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
            fontSize: '24px',
            lineHeight: '36px',
            color: 'rgba(255, 255, 255, 0.71)',
            textAlign: 'center',
            whiteSpace: 'pre-wrap',
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
          gap: '10px',
          position: 'relative',
        }}
      >
        {/* Main Button */}
        <a
          rel="noopener"
          href={buttonUrl}
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
              fontSize: '24px',
              fontWeight: 700,
              letterSpacing: '1.2px',
              lineHeight: '24px',
              textAlign: 'center',
              textTransform: 'uppercase',
              whiteSpace: 'pre',
              margin: 0,
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
            gap: '8px',
            height: '32px',
            position: 'relative',
          }}
        >
          {/* User Avatars */}
          <div
            style={{
              position: 'relative',
              width: '100px',
              aspectRatio: '3.17143 / 1',
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
              fontSize: '18px',
              lineHeight: '20px',
              color: 'rgba(255, 255, 255, 0.6)',
              whiteSpace: 'pre',
              margin: 0,
            }}
          >
            {socialProofText}
          </p>
        </div>
      </div>
    </section>
  );
}
