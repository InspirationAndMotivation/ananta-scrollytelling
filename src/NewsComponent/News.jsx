import newsImage from '../assets/images/news-img.jpg';

const News = () => {
  return (
    <>
      <div
        id="news"
        className="h-screen bg-[var(--background-color)] flex items-center justify-center text-white"
      >
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="relative">
              <h2 className="text-7xl font-(family-name:--roboto-font) font-black uppercase tracking-tight text-white leading-none">
                NEWS
              </h2>
              <span className="block text-xl sm:text-4xl font-(family-name:--roboto-font) font-semibold uppercase tracking-wider text-white/60 mt-1">
                NEWS
              </span>
            </div>

            <div className="relative w-full max-w-xs lg:max-w-none aspect-video rounded-sm overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl">
              <img
                src={newsImage}
                alt="News Image"
                className="w-full h-full object-cover transition-all duration-500 ease-out transform hover:scale-105"
              />
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col divide-y divide-neutral-900/60 w-full">
            <a
              href="https://www.anantagame.com/news/official/20260915/41397_1313976.html"
              className="py-4 sm:py-5 grid grid-cols-[1.5fr_1fr] max-[550px]:grid-cols-[auto_auto] gap-12 max-[550px]:gap-5 items-center font-(family-name:--roboto-font) tracking-tight transition-all hover:text-cyan-400 group"
            >
              <span className="text-xl sm:text-xl md:text-3xl font-medium text-right max-[550px]:text-left normal">
                Giveaway Winner Announcement
              </span>
              <span className="text-sm sm:text-base md:text-xl font-normal text-left max-[550px]:text-right whitespace-nowrap text-white/60 group-hover:text-cyan-400 transition-colors">
                Launch Date Trailer Repost Giveaway
              </span>
            </a>

            <a
              href="https://www.anantagame.com/news/official/20260827/41397_1312458.html"
              className="py-4 sm:py-5 grid grid-cols-[1.5fr_1fr] max-[550px]:grid-cols-[auto_auto] gap-12 max-[550px]:gap-5 items-center font-(family-name:--roboto-font) tracking-tight transition-all hover:text-cyan-400 group"
            >
              <span className="text-xl sm:text-xl md:text-3xl font-medium text-right max-[550px]:text-left normal">
                DLSS 4.5
              </span>
              <span className="text-sm sm:text-base md:text-xl font-normal text-left max-[550px]:text-right whitespace-nowrap text-white/60 group-hover:text-cyan-400 transition-colors">
                ANANTA Adding DLSS 4.5
              </span>
            </a>

            <a
              href="https://www.anantagame.com/news/official/20250924/41397_1261256.html"
              className="py-4 sm:py-5 grid grid-cols-[1.5fr_1fr] max-[550px]:grid-cols-[auto_auto] gap-12 max-[550px]:gap-5 items-center font-(family-name:--roboto-font) tracking-tight transition-all hover:text-cyan-400 group"
            >
              <span className="text-xl sm:text-xl md:text-3xl font-medium text-right max-[550px]:text-left normal">
                GAMEPLAY VIDEO
              </span>
              <span className="text-sm sm:text-base md:text-xl font-normal text-left max-[550px]:text-right whitespace-nowrap text-white/60 group-hover:text-cyan-400 transition-colors">
                ANANTA | Gameplay Video
              </span>
            </a>

            <a
              href="https://www.anantagame.com/news/official/20250923/41397_1260743.html"
              className="py-4 sm:py-5 grid grid-cols-[1.5fr_1fr] max-[550px]:grid-cols-[auto_auto] gap-12 max-[550px]:gap-5 items-center font-(family-name:--roboto-font) tracking-tight transition-all hover:text-cyan-400 group"
            >
              <span className="text-xl sm:text-xl md:text-3xl font-medium text-right max-[550px]:text-left normal">
                GAMEPLAY TRAILER
              </span>
              <span className="text-sm sm:text-base md:text-xl font-normal text-left max-[550px]:text-right whitespace-nowrap text-white/60 group-hover:text-cyan-400 transition-colors">
                ANANTA | Gameplay Trailer
              </span>
            </a>

            <a
              href="https://www.anantagame.com/news/official/20250122/41397_1208692.html"
              className="py-4 sm:py-5 grid grid-cols-[1.5fr_1fr] max-[550px]:grid-cols-[auto_auto] gap-12 max-[550px]:gap-5 items-center font-(family-name:--roboto-font) tracking-tight transition-all hover:text-cyan-400 group"
            >
              <span className="text-xl sm:text-xl md:text-3xl font-medium text-right max-[550px]:text-left normal">
                Cheers to the Spring Festival
              </span>
              <span className="text-sm sm:text-base md:text-xl font-normal text-left max-[550px]:text-right whitespace-nowrap text-white/60 group-hover:text-cyan-400 transition-colors">
                Cheers to the Spring Festival
              </span>
            </a>

            <a
              href="https://www.anantagame.com/news/official/20241231/41397_1203538.html"
              className="py-4 sm:py-5 grid grid-cols-[1.5fr_1fr] max-[550px]:grid-cols-[auto_auto] gap-12 max-[550px]:gap-5 items-center font-(family-name:--roboto-font) tracking-tight transition-all hover:text-cyan-400 group"
            >
              <span className="text-xl sm:text-xl md:text-3xl font-medium text-right max-[550px]:text-left normal">
                HAPPY NEW YEAR
              </span>
              <span className="text-sm sm:text-base md:text-xl font-normal text-left max-[550px]:text-right whitespace-nowrap text-white/60 group-hover:text-cyan-400 transition-colors">
                HAPPY NEW YEAR!
              </span>
            </a>

            <a
              href="https://www.anantagame.com/news/activity/20241225/41400_1202278.html"
              className="py-4 sm:py-5 grid grid-cols-[1.5fr_1fr] max-[550px]:grid-cols-[auto_auto] gap-12 max-[550px]:gap-5 items-center font-(family-name:--roboto-font) tracking-tight transition-all hover:text-cyan-400 group"
            >
              <span className="text-xl sm:text-xl md:text-3xl font-medium text-right max-[550px]:text-left normal">
                Merry ANANTA
              </span>
              <span className="text-sm sm:text-base md:text-xl font-normal text-left max-[550px]:text-right whitespace-nowrap text-white/60 group-hover:text-cyan-400 transition-colors">
                Merry ANANTA!
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
