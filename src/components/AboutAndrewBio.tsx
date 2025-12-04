'use client';

export default function AboutAndrewBio() {
  const bioSections = [
    {
      content: (
        <>
          <span style={{ fontWeight: 700 }}>Born December 1, 1986</span>
          , Emory Andrew Tate III is not just any individual – he's a powerhouse
          British-American social media personality, a savvy businessman, and a
          kickboxing legend with a story that turns heads and commands
          attention.
        </>
      ),
    },
    {
      content: (
        <>
          Raised by the phenomenal Emory Tate Jr., a chess maestro who dominated
          the US Armed Forces championship three times and outplayed countless
          grandmasters, greatness runs in his veins. Emory Andrew Tate III is a
          mix of fierce African-American and English roots, and he's not alone;
          he's got his brother Tristan and another sibling by his side, a team
          that's seen it all since their parents parted ways.
        </>
      ),
    },
    {
      content: (
        <>
          Tate took life by the horns, diving into boxing and martial arts in
          2005 while juggling gigs in the TV advertising world. By November
          2008, he'd climbed the ranks to become Britain's seventh-best light
          heavyweight kickboxer, according to the International Sport Kickboxing
          Association (ISKA). The following year, he claimed his throne, seizing
          the British ISKA Full Contact Cruiserweight Championship and
          conquering Europe's kickboxing scene. "King Cobra" was his battle
          name, and the ring was his kingdom.
        </>
      ),
    },
    {
      content: (
        <>
          2011 was the year of redemption, where Tate settled scores and claimed
          his first ISKA world title, knocking out Jean-Luc Benoit and erasing a
          past defeat. He hit a bump in 2012 but rose again in 2013, seizing his
          second ISKA world title against Vincent Petitjean in a 12-round
          showdown, etching his name as a world champion in two weight
          divisions.
        </>
      ),
    },
    {
      content: (
        <>
          March 9, 2013, Châteaurenard, France: Tate avenged his 2011 loss,
          snatching his second ISKA world title in a thrilling split decision
          victory. One year later, he defended his title, crushing Cyril Vetter
          in the first round and proving that champions only get stronger.
        </>
      ),
    },
    {
      content: (
        <>
          2013 saw Tate dominate the Enfusion Live ring, claiming four victories
          and entering a grand tournament to crown the Enfusion Live -85 kg
          World Champion. Despite a semifinal loss, he bounced back, challenging
          Wendell Roche for the Enfusion Live -90 kg championship. On June 28,
          2014, Tate made history once again, stopping Roche in the second round
          and proving that a true champion never backs down.
        </>
      ),
    },
    {
      content: (
        <>
          This is not just a story. This is the legacy of Emory Andrew Tate III.
          From the boxing rings of Luton to the business world's elite, he's a
          force unstoppable, a champion undeniable. Join the journey, embrace
          the legacy, and witness the power of a true world champion.
        </>
      ),
    },
  ];

  return (
    <main className="w-full bg-white">
      <div
        className="mx-auto flex w-full flex-col items-center justify-center gap-5 px-10 py-10 lg:flex-row lg:gap-12 lg:px-8 lg:py-16"
        style={{
          backgroundColor: 'rgb(255, 255, 255)',
          borderRadius: '30px',
          border: '3px solid rgb(255, 169, 57)',
          maxWidth: '1280px',
          paddingTop: '64px',
          paddingBottom: '64px',
          paddingLeft: '32px',
          paddingRight: '32px',
          gap: '48px',
        }}
      >
        {/* Image Container - Sticky */}
        <div
          className="hidden flex-shrink-0 lg:block"
          style={{
            width: '639px',
            height: '770px',
            borderRadius: '19px',
            position: 'sticky',
            top: '80px',
            overflow: 'hidden',
            zIndex: 1,
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              borderRadius: '19px',
            }}
          >
            <img
              src="https://framerusercontent.com/images/9jPgk3neJ5jl3lfspFhOnDwMCs.jpg"
              alt="Andrew Tate"
              decoding="auto"
              loading="lazy"
              width={596}
              height={748}
              className="h-full w-full object-cover"
              style={{
                borderRadius: '19px',
                aspectRatio: '596 / 748',
              }}
            />
          </div>
        </div>

        {/* Mobile Image Container */}
        <div
          className="w-full lg:hidden"
          style={{
            borderRadius: '19px',
            overflow: 'hidden',
            marginBottom: '24px',
          }}
        >
          <img
            src="https://framerusercontent.com/images/9jPgk3neJ5jl3lfspFhOnDwMCs.jpg"
            alt="Andrew Tate"
            decoding="auto"
            loading="lazy"
            width={596}
            height={748}
            className="w-full object-cover"
            style={{
              borderRadius: '19px',
              aspectRatio: '596 / 748',
            }}
          />
        </div>

        {/* Text Content Container */}
        <div
          className="flex flex-grow flex-col gap-2.5 lg:gap-2.5"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {bioSections.map((section, idx) => (
            <p
              key={idx}
              style={{
                color: 'rgb(19, 19, 19)',
                fontFamily: 'Inter, sans-serif',
                fontSize: '20px',
                fontWeight: 500,
                lineHeight: '40px',
                margin: 0,
                wordBreak: 'break-word',
                whiteSpace: 'pre-wrap',
                overflowWrap: 'break-word',
              }}
            >
              {section.content}
            </p>
          ))}
        </div>
      </div>
    </main>
  );
}
