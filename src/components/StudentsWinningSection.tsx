export default function StudentsWinningSection() {
  const images = [
    // Column 1
    [
      { src: 'https://framerusercontent.com/images/VXLegPxWSt7pkxH4S8MhWyRRM.webp?width=898&height=918', width: 898, height: 918 },
      { src: 'https://framerusercontent.com/images/t26Nop1fKO93xcrGqDJRpVRGEs.webp?width=898&height=1016', width: 898, height: 1016 },
      { src: 'https://framerusercontent.com/images/iQfkAuxdajoKsIMeoeBB61MaeIk.webp?width=898&height=996', width: 898, height: 996 },
      { src: 'https://framerusercontent.com/images/YerLavNb5sR1FFLAt33THwsv854.webp?width=451&height=749', width: 451, height: 749 },
      { src: 'https://framerusercontent.com/images/4WHqgZrDY8grEOgKGrJJc0c0iqk.webp?scale-down-to=1024&width=898&height=1124', width: 898, height: 1124 },
    ],
    // Column 2
    [
      { src: 'https://framerusercontent.com/images/odnUxpEv0twsESDYfOvZzs.webp?width=860&height=918', width: 860, height: 918 },
      { src: 'https://framerusercontent.com/images/9U35MfY0hVFwh5JFEv8POkg3gLc.webp?width=862&height=1016', width: 862, height: 1016 },
      { src: 'https://framerusercontent.com/images/beQtSCDlCvWIds4LGUVKtFpgAIA.webp?scale-down-to=512&width=866&height=858', width: 866, height: 858 },
      { src: 'https://framerusercontent.com/images/BY2cEEu4Nvo0vAkmLWkNIOHmeg.webp?width=868&height=994', width: 868, height: 994 },
      { src: 'https://framerusercontent.com/images/qpaYTElhnCdEMwDjWifrAKHQToY.webp?scale-down-to=1024&width=868&height=1174', width: 868, height: 1174 },
      { src: 'https://framerusercontent.com/images/cUqSkLwVGyj5YDzfUpN9D6mQyoY.webp?width=434&height=224', width: 434, height: 224 },
    ],
    // Column 3
    [
      { src: 'https://framerusercontent.com/images/UT7Zop20qrzE6F283V9cYdHzCoE.webp?scale-down-to=512&width=898&height=456', width: 898, height: 456 },
      { src: 'https://framerusercontent.com/images/1ZO2AmJy3hRbthwB2ruBbXor2W0.webp?width=898&height=1004', width: 898, height: 1004 },
      { src: 'https://framerusercontent.com/images/n28aCPbgKrkKOzkYqc70ZMBUjRI.webp?scale-down-to=1024&width=898&height=1198', width: 898, height: 1198 },
      { src: 'https://framerusercontent.com/images/28xK457dS4QFxi0q3aMyq2MiODg.webp?scale-down-to=512&width=898&height=826', width: 898, height: 826 },
      { src: 'https://framerusercontent.com/images/n1All59aJR9LcY8V5JW9sOiTU.webp?scale-down-to=1024&width=898&height=1062', width: 898, height: 1062 },
      { src: 'https://framerusercontent.com/images/5usd9FST4j3dfM7d7IeaZ6gQiw.webp?width=449&height=515', width: 449, height: 515 },
    ],
  ];

  return (
    <section className="relative w-full flex flex-col items-center justify-center gap-8 sm:gap-10 bg-[#060e15] py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-10">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center gap-1 sm:gap-2 text-center max-w-4xl">
        <p className="text-white/50 text-sm sm:text-lg md:text-xl font-inter tracking-widest uppercase">
          THE REAL WORLD WINS
        </p>
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-inter font-bold leading-tight">
          OUR STUDENTS ARE WINNING
        </h2>
      </div>

      {/* Images Grid */}
      <div className="w-full max-w-6xl">
        {/* Desktop Grid - 3 columns */}
        <div className="hidden md:flex justify-center gap-2 sm:gap-3 md:gap-4">
          {images.map((column, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-2 sm:gap-3 md:gap-4 flex-1">
              {column.map((image, imgIndex) => (
                <div
                  key={imgIndex}
                  className="relative w-full overflow-hidden rounded-lg"
                  style={{
                    aspectRatio: `${image.width} / ${image.height}`,
                  }}
                >
                  <img
                    decoding="auto"
                    loading="lazy"
                    width={image.width}
                    height={image.height}
                    alt={`Student winning #${colIndex * 5 + imgIndex + 1}`}
                    src={image.src}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Tablet Grid - 2 columns */}
        <div className="hidden sm:flex md:hidden flex-col gap-2 sm:gap-3">
          <div className="flex gap-2 sm:gap-3">
            {images[0].slice(0, 3).map((image, imgIndex) => (
              <div key={imgIndex} className="flex-1 flex flex-col gap-2 sm:gap-3">
                <div
                  className="relative w-full overflow-hidden rounded-lg"
                  style={{
                    aspectRatio: `${image.width} / ${image.height}`,
                  }}
                >
                  <img
                    decoding="auto"
                    loading="lazy"
                    width={image.width}
                    height={image.height}
                    alt={`Student winning #${imgIndex + 1}`}
                    src={image.src}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-2 sm:gap-3">
            {images[0].slice(3, 5).map((image, imgIndex) => (
              <div key={imgIndex} className="flex-1 flex flex-col gap-2 sm:gap-3">
                <div
                  className="relative w-full overflow-hidden rounded-lg"
                  style={{
                    aspectRatio: `${image.width} / ${image.height}`,
                  }}
                >
                  <img
                    decoding="auto"
                    loading="lazy"
                    width={image.width}
                    height={image.height}
                    alt={`Student winning #${imgIndex + 4}`}
                    src={image.src}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Grid - 1 column */}
        <div className="flex sm:hidden flex-col gap-2">
          {images[0].slice(0, 4).map((image, imgIndex) => (
            <div
              key={imgIndex}
              className="relative w-full overflow-hidden rounded-lg"
              style={{
                aspectRatio: `${image.width} / ${image.height}`,
              }}
            >
              <img
                decoding="auto"
                loading="lazy"
                width={image.width}
                height={image.height}
                alt={`Student winning #${imgIndex + 1}`}
                src={image.src}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="flex flex-col items-center gap-2 sm:gap-3 mt-6 sm:mt-8 md:mt-10 z-20">
        <a
          href="/checkout"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 sm:px-8 py-4 sm:py-5 md:px-10 md:py-6 bg-gradient-to-r from-[#ffa930] via-[#ffab23] to-[#d5aa12] rounded-lg font-bold text-black text-base sm:text-lg md:text-xl lg:text-2xl tracking-wider uppercase hover:shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 transform hover:scale-105"
        >
          JOIN THE REAL WORLD
        </a>

        {/* Social Proof */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-2 text-center">
          <img
            src="https://framerusercontent.com/images/VTr2kDuZjyrrr32wNrJaUIadk.webp"
            alt="Student avatars"
            className="h-6 sm:h-8 md:h-10 w-auto"
          />
          <p className="text-white/60 text-xs sm:text-sm md:text-base">
            Join 113,000+ like-minded students
          </p>
        </div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '285.9px',
          backgroundImage: 'linear-gradient(rgba(8, 14, 23, 0) 0%, rgb(10, 17, 28) 100%)',
          zIndex: 1,
        }}
      />
    </section>
  );
}
