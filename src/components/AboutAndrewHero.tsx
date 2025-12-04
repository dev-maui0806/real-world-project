'use client';

export default function AboutAndrewHero() {
  return (
    <header className="w-full bg-[#ffffff]">
      <div className="flex w-full flex-col items-center justify-center gap-16 px-4 py-16 md:px-6 md:gap-20 md:py-20">
        <div className="flex w-full flex-col items-center justify-center gap-16 md:gap-20">
          {/* Logo Container - Exact sizing: 215px × 162px */}
          <div className="relative" style={{ width: '215px', height: '162px' }}>
            <div className="absolute inset-0">
              <img
                src="https://framerusercontent.com/images/lVFqGPfJm0f8Q6XqNcyZnWvQUe8.webp"
                alt="TRW Logo"
                className="h-full w-full object-contain"
                loading="lazy"
                width={256}
                height={256}
                decoding="auto"
              />
            </div>
          </div>

          {/* Title Container - Exact spacing: 16px gap */}
          <div className="flex w-full flex-col items-center justify-center gap-4" style={{ gap: '16px' }}>
            <h1
              className="w-full text-center font-sans font-bold tracking-wider text-[#131313]"
              style={{
                fontSize: '39px',
                fontWeight: 700,
                letterSpacing: '2px',
                lineHeight: '52px',
                color: 'rgb(19, 19, 19)',
              }}
            >
              <span
                style={{
                  display: 'inline',
                  color: 'rgb(255, 165, 69)',
                  fontSize: '68px',
                  fontWeight: 700,
                  letterSpacing: '2px',
                  lineHeight: '52px',
                }}
              >
                About Andrew Tate
              </span>
              <br />
              <span
                style={{
                  display: 'inline',
                  color: 'rgb(255, 165, 69)',
                  fontSize: '58px',
                  fontWeight: 700,
                  letterSpacing: '2px',
                  lineHeight: '52px',
                }}
              >
                {' '}
              </span>
              <span
                style={{
                  display: 'inline',
                  color: 'rgb(19, 19, 19)',
                  fontSize: '44px',
                  fontWeight: 700,
                  letterSpacing: '2px',
                  lineHeight: '52px',
                }}
              >
                THE CHAMPION'S JOURNEY
              </span>
            </h1>
          </div>

          {/* Image Container - Exact sizing: 714px × 388px with 17px border-radius */}
          <div
            className="relative flex items-center justify-center overflow-hidden"
            style={{
              width: '100%',
              maxWidth: '714px',
              height: 'auto',
              aspectRatio: '1024 / 576',
              borderRadius: '17px',
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                borderRadius: '17px',
              }}
            />
            <img
              src="https://framerusercontent.com/images/D5Z1mLVr5zqWMuzQ7rwRnY1sl0.jpg"
              alt="Andrew Tate - The Champion's Journey"
              className="h-full w-full object-cover"
              style={{
                borderRadius: '17px',
              }}
              loading="lazy"
              width={1024}
              height={576}
              decoding="auto"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
