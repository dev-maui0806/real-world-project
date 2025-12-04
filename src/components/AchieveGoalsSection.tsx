export default function AchieveGoalsSection() {
  return (
    <section
      style={{
        backgroundImage: 'linear-gradient(rgb(6, 14, 21) 89%, rgb(9, 16, 27) 100%)',
        backgroundColor: 'rgb(6, 14, 21)',
      }}
      className="w-full flex flex-col items-center justify-center px-4 py-20"
    >
      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-20">
        {/* Left Content Column */}
        <div
          className="w-full lg:flex-1 flex flex-col items-start justify-center gap-6"
          style={{
            paddingLeft: '96px',
          }}
        >
          {/* Main Heading */}
          <h2
            style={{
              fontFamily: '"General Sans", sans-serif',
              fontSize: '40px',
              lineHeight: '54px',
              color: 'rgb(255, 255, 255)',
              overflowWrap: 'break-word',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
            }}
          >
            ACHIEVE YOUR
            <br />
            <span style={{ fontWeight: 700 }}>GOALS</span>
          </h2>

          {/* Content Paragraphs */}
          <div className="flex flex-col gap-4 w-full">
            {/* Paragraph 1 */}
            <p
              style={{
                fontFamily: '"General Sans", sans-serif',
                fontSize: '24px',
                lineHeight: '38.4px',
                color: 'rgba(255, 255, 255, 0.64)',
                overflowWrap: 'break-word',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
              }}
            >
              <span
                style={{
                  color: 'rgb(255, 255, 255)',
                  fontWeight: 600,
                }}
              >
                <strong style={{ fontWeight: 900 }}>Money-making is a skill</strong>
              </span>
              . Like every other skill it can be learned, and the speed at which
              it is learned depends on your coaches and the learning environment
              you are taught in.
            </p>

            {/* Paragraph 2 */}
            <p
              style={{
                fontFamily: '"General Sans", sans-serif',
                fontSize: '24px',
                lineHeight: '38.4px',
                color: 'rgba(255, 255, 255, 0.64)',
                overflowWrap: 'break-word',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
              }}
            >
              <span
                style={{
                  color: 'rgb(255, 255, 255)',
                  fontWeight: 600,
                }}
              >
                Our coaches know the business models they teach,
              </span>
              {' '}
              they know what it takes to be profitable, and they are the first
              to identify and utilize new disruptive technologies and strategies
              whenever they appear.
            </p>

            {/* Paragraph 3 */}
            <p
              style={{
                fontFamily: '"General Sans", sans-serif',
                fontSize: '24px',
                lineHeight: '38.4px',
                color: 'rgba(255, 255, 255, 0.64)',
                overflowWrap: 'break-word',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
              }}
            >
              <span
                style={{
                  color: 'rgb(255, 255, 255)',
                  fontWeight: 600,
                }}
              >
                THE REAL WORLD
              </span>
              {' '}
              is the ultimate all-in-one learning platform guiding you from
              making your first dollar online to{' '}
              <span
                style={{
                  color: 'rgba(255, 255, 255, 0.64)',
                  fontWeight: 600,
                }}
              >
                scaling into a multi-million dollar business.
              </span>
            </p>

            {/* Paragraph 4 */}
            <p
              style={{
                fontFamily: '"General Sans", sans-serif',
                fontSize: '24px',
                lineHeight: '38.4px',
                color: 'rgb(255, 255, 255)',
                fontWeight: 600,
                overflowWrap: 'break-word',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
              }}
            >
              <span
                style={{
                  color: 'rgb(255, 207, 35)',
                }}
              >
                There is no better place on the planet
              </span>
              {' '}
              to learn how to make money online today.
            </p>
          </div>
        </div>

        {/* Right Image Column */}
        <div
          style={{
            aspectRatio: '1.01553 / 1',
            flexBasis: '0px',
            flexGrow: 1,
            position: 'relative',
            width: '1px',
            backgroundColor: 'rgba(0, 0, 0, 0)',
          }}
        >
          <div
            style={{
              bottom: '0px',
              left: '0px',
              position: 'absolute',
              right: '0px',
              top: '0px',
            }}
          >
            <img
              decoding="async"
              loading="lazy"
              width="850"
              height="837"
              alt=""
              src="https://framerusercontent.com/images/TSHdHn9kwxNGmPfuU3O453Q.png?width=850&height=837"
              style={{
                aspectRatio: 'auto 850 / 837',
                height: '100%',
                objectFit: 'cover',
                overflowClipMargin: 'content-box',
                overflowX: 'clip',
                overflowY: 'clip',
                width: '100%',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
