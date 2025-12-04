'use client';

interface StudentInterview {
  id: string;
  name: string;
  age: number;
  location: string;
  skill: string;
  revenue: string;
  testimonial: string;
  image: string;
  vimeoId: string;
}

export default function StudentInterviewsSection() {
  const students: StudentInterview[] = [
    {
      id: 'nox',
      name: 'Nox',
      age: 35,
      location: 'USA',
      skill: 'Content Creation',
      revenue: '$2k+/month',
      testimonial:
        "The Real World's positive impact on her boyfriend led Mena to join... Now, she makes over $2,000/month due to the lessons she applied from the Content Creation Campus.",
      image: 'https://framerusercontent.com/images/zA9rT6n8kTeJvFOALz3EHxPnBg4.png?width=160&height=160',
      vimeoId: '904495270',
    },
    {
      id: 'mena',
      name: 'Mena',
      age: 34,
      location: 'Ghana',
      skill: 'Content Creation',
      revenue: '$2k+/month',
      testimonial:
        "The Real World's positive impact on her boyfriend led Mena to join... Now, she makes over $2,000/month due to the lessons she applied from the Content Creation Campus.",
      image: 'https://framerusercontent.com/images/zA9rT6n8kTeJvFOALz3EHxPnBg4.png?width=160&height=160',
      vimeoId: '904494878',
    },
    {
      id: 'alex',
      name: 'Alex',
      age: 15,
      location: 'Poland',
      skill: 'Copywriting',
      revenue: '$9k/month',
      testimonial:
        "15-year-old Alex has earned €75,000 using resources available to him through The Real World... He now assists young men in overcoming laziness by sharing lessons from his successful Copywriting journey.",
      image: 'https://framerusercontent.com/images/WL5w1XeXaQD7JFbsGilbSJm3zDI.png?width=160&height=160',
      vimeoId: '904496529',
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-b from-[#0a111c] to-[#060e15] py-20 md:py-32 px-4 md:px-8">
      {/* Header */}
      <div className="flex flex-col items-center justify-center gap-3 mb-16 max-w-4xl mx-auto">
        <p className="text-white/50 text-lg md:text-xl font-100 tracking-widest uppercase">
          OUR STUDENTS ARE LEVELING UP
        </p>
        <h2 className="text-white text-4xl md:text-5xl font-100 text-center leading-tight">
          STUDENT INTERVIEWS
        </h2>
      </div>

      {/* Student Cards */}
      <div className="flex flex-col gap-4 max-w-6xl mx-auto mb-16">
        {students.map((student) => (
          <div
            key={student.id}
            style={{
              alignContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgb(19, 27, 35)',
              borderRadius: '10px',
              display: 'flex',
              height: 'min-content',
              justifyContent: 'space-between',
              overflow: 'hidden',
              paddingLeft: '56px',
              position: 'relative',
              width: '100%',
            }}
            className="hidden md:flex"
          >
            {/* Content - Left */}
            <div
              style={{
                alignContent: 'flex-start',
                alignItems: 'flex-start',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                height: '300px',
                justifyContent: 'center',
                overflow: 'hidden',
                position: 'relative',
                width: '470px',
              }}
            >
              {/* Skill and Name Section */}
              <div
                style={{
                  alignContent: 'flex-start',
                  alignItems: 'flex-start',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  height: 'min-content',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  position: 'relative',
                  width: '100%',
                }}
              >
                <p
                  style={{
                    borderColor: 'rgb(255, 207, 35)',
                    color: 'rgb(255, 207, 35)',
                    fontFamily: '"General Sans", "General Sans Placeholder", sans-serif',
                    fontSize: '16px',
                    fontWeight: 500,
                    lineHeight: '25px',
                    overflowWrap: 'break-word',
                    textTransform: 'uppercase',
                    userSelect: 'none',
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                  }}
                >
                  <span
                    style={{
                      borderColor: 'rgb(255, 207, 35)',
                      color: 'rgb(255, 207, 35)',
                      display: 'inline',
                      fontSize: '19px',
                      fontWeight: 500,
                    }}
                  >
                    {student.skill}
                  </span>
                </p>
                <div
                  style={{
                    alignContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    gap: '8px',
                    height: '34px',
                    justifyContent: 'start',
                    overflow: 'hidden',
                    position: 'relative',
                    width: '215px',
                  }}
                >
                  <h3
                    style={{
                      borderColor: 'rgb(255, 255, 255)',
                      color: 'rgb(255, 255, 255)',
                      fontFamily: '"General Sans", "General Sans Placeholder", sans-serif',
                      fontSize: '40px',
                      fontWeight: 700,
                      lineHeight: '30px',
                      textWrap: 'nowrap',
                      whiteSpace: 'pre',
                      margin: 0,
                    }}
                  >
                    {student.name}, {student.age}
                  </h3>
                  <div
                    style={{
                      aspectRatio: '1 / 1',
                      position: 'relative',
                      width: '34px',
                    }}
                  >
                    <img
                      src={student.image}
                      alt={student.name}
                      width="160"
                      height="160"
                      style={{
                        aspectRatio: 'auto 160 / 160',
                        height: '100%',
                        objectFit: 'cover',
                        width: '100%',
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Revenue */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  overflowWrap: 'break-word',
                  position: 'relative',
                  userSelect: 'none',
                  whiteSpace: 'pre-wrap',
                  width: '400px',
                  wordBreak: 'break-word',
                }}
              >
                <p
                  style={{
                    borderColor: 'rgba(255, 255, 255, 0.76)',
                    color: 'rgba(255, 255, 255, 0.76)',
                    fontFamily: '"General Sans", "General Sans Placeholder", sans-serif',
                    fontSize: '26px',
                    lineHeight: '30px',
                    margin: 0,
                    userSelect: 'none',
                    whiteSpace: 'pre-wrap',
                  }}
                >
                  New revenue:
                  <span
                    style={{
                      borderColor: 'rgb(255, 255, 255)',
                      color: 'rgb(255, 255, 255)',
                      display: 'inline',
                      fontWeight: 700,
                      marginLeft: '8px',
                    }}
                  >
                    {student.revenue}
                  </span>
                </p>
              </div>

              {/* Testimonial */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  overflowWrap: 'break-word',
                  position: 'relative',
                  userSelect: 'none',
                  whiteSpace: 'pre-wrap',
                  width: '100%',
                  wordBreak: 'break-word',
                }}
              >
                <p
                  style={{
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                    color: 'rgba(255, 255, 255, 0.5)',
                    fontFamily: '"General Sans", "General Sans Placeholder", sans-serif',
                    fontSize: '20px',
                    lineHeight: '30px',
                    margin: 0,
                    userSelect: 'none',
                    whiteSpace: 'pre-wrap',
                  }}
                >
                  {student.testimonial}
                </p>
              </div>
            </div>

            {/* Video - Right */}
            <div
              style={{
                backgroundColor: 'rgb(24, 27, 33)',
                height: '353px',
                overflow: 'hidden',
                position: 'relative',
                width: '586px',
              }}
            >
              <div
                style={{
                  aspectRatio: '1.66006 / 1',
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                  left: '0px',
                  position: 'absolute',
                  top: '0px',
                  width: '100%',
                  zIndex: 10,
                }}
              />
              <div
                style={{
                  aspectRatio: '1.66006 / 1',
                  left: '0px',
                  position: 'absolute',
                  top: '0px',
                  width: '100%',
                }}
              >
                <div
                  style={{
                    alignItems: 'center',
                    display: 'flex',
                    height: '100%',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    position: 'relative',
                    width: '100%',
                  }}
                >
                  <div style={{ height: '100%', width: '100%' }}>
                    <div style={{ height: '100%', position: 'relative', width: '100%' }}>
                      <iframe
                        src={`https://player.vimeo.com/video/${student.vimeoId}?autopause=0&app_id=122963`}
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        title={`${student.name}, ${student.age}, ${student.location}`}
                        style={{
                          height: '100%',
                          left: '0px',
                          position: 'absolute',
                          top: '0px',
                          width: '100%',
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="flex flex-col items-center gap-6 max-w-3xl mx-auto">
        <a
          href="/checkout"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-5 md:px-10 md:py-6 bg-gradient-to-r from-[#ffa930] via-[#ffab23] to-[#d5aa12] rounded-lg font-bold text-black text-lg md:text-2xl tracking-wider uppercase hover:shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 transform hover:scale-105"
        >
          JOIN THE REAL WORLD
        </a>

        <div className="flex flex-col md:flex-row items-center gap-3 text-center md:text-left">
         <div style={{ width: '16px', aspectRatio: '0.592593 / 1' }} className="relative">
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
    </section>
  );
}
