export default function AISection() {
  return (
    <section className="relative w-full flex items-center justify-center gap-2.5 overflow-hidden bg-black/0 py-12 md:py-16">
      {/* Background Gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(
            106deg,
            rgb(6, 14, 21) 4%,
            rgba(28, 36, 42, 0) 32%,
            rgba(8, 16, 23, 0) 71%,
            rgb(6, 14, 21) 96%
          )`,
        }}
      />

      {/* Content Container */}
      <div className="relative z-20 flex items-center gap-3 md:gap-4 max-w-6xl w-full px-4">
        {/* Icon Container */}
        <div className="relative w-11 h-11 md:w-12 md:h-12 flex-shrink-0">
          <img
            decoding="auto"
            loading="lazy"
            width="44"
            height="44"
            alt="Artificial Intelligence icon"
            src="https://framerusercontent.com/images/0Ms1CioEElYNJiy9OhvKEbyd8.svg?width=44&height=44"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center gap-0">
          {/* Title */}
          <p className="text-white text-xl md:text-2xl font-bold font-['General_Sans'] leading-tight">
            Artificial Intelligence
          </p>

          {/* Subtitle */}
          <p className="text-white/70 text-sm md:text-base font-['General_Sans'] leading-tight">
            Integrated in all Campuses
          </p>
        </div>

        {/* Background Image Container */}
        <div className="hidden lg:flex ml-auto absolute right-0 top-0 bottom-0 z-10 w-1/3 max-w-[500px]">
          <img
            decoding="auto"
            loading="lazy"
            width="809"
            height="140"
            alt="AI background"
            src="https://framerusercontent.com/images/aiAJNfT874zy2ufIfnCLOOWrIc.webp?width=809&height=140"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Overlay Gradient */}
      <div
        className="absolute inset-0 z-30 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(
            106deg,
            rgb(6, 14, 21) 4%,
            rgba(28, 36, 42, 0) 32%,
            rgba(8, 16, 23, 0) 71%,
            rgb(6, 14, 21) 91.3382%
          )`,
        }}
      />
    </section>
  );
}
