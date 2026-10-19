import Header from './HeaderComponent/Header';
import Footer from './FooterComponent/Footer';
import ScrollVideo from './ScrollVideoComponent/ScrollVideo';
import OutroSection from './OutroSectionComponent/OutroSection';
import News from './NewsComponent/News';
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

import seoImg from './assets/images/seo-img-ananta.png';

gsap.registerPlugin(ScrollToPlugin);

export default function App() {
  const handleScrollToNext = (e) => {
    e.preventDefault();

    gsap.to(window, {
      duration: 1.2,
      scrollTo: {
        y: '#characters',
        autoKill: false,
      },
      ease: 'power2.inOut',
    });
  };

  return (
    <div className="w-full overflow-x-hidden bg-[var(--background-color)]">
      {/* Header */}
      <Header />
      {/* Content block with video */}
      <div className="relative w-full h-dvh overflow-hidden flex flex-col justify-between">
        <img
          src={seoImg}
          alt="Main SEO image"
          className="w-full h-full object-cover object-top block"
        ></img>
        <div className="absolute bottom-0 left-0 w-full h-28 sm:h-35 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-10" />
        <div className="absolute z-10 bottom-0 pb-20 sm:pb-32 my-4 w-full flex flex-col items-center">
          <p className="flex items-center text-center py-2 drop-shadow-xl tracking-widest uppercase font-(family-name:--roboto-font) text-4xl text-white [-webkit-text-stroke:0.05px_var(--color-cyan-400)]">
            Global Release
          </p>
          <p className="flex items-center text-center py-2 drop-shadow-xl tracking-wider uppercase font-medium font-(family-name:--roboto-font) text-5xl lg:text-8xl text-white [-webkit-text-stroke:0.1px_var(--color-cyan-400)]">
            January 15, 2027
          </p>
          <a
            href="#characters"
            onClick={handleScrollToNext}
            className="flex py-2 text-white hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
          >
            <svg
              className="w-8 h-8 animate-bounce cursor-pointer"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </a>
        </div>
      </div>
      <div id="characters">
        <ScrollVideo />
        <OutroSection />
      </div>
      {/* Content block with summary */}
      <News />
      {/* Footer */}
      <Footer />
    </div>
  );
}
