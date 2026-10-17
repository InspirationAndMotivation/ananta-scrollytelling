import Header from './HeaderComponent/Header';
import Footer from './FooterComponent/Footer';
import ScrollVideo from './ScrollVideoComponent/ScrollVideo';
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

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
    <div className="w-full bg-[var(--background-color)]">
      {/* Header */}
      <Header />
      {/* Content block with video */}
      <div className="flex-1 min-h-0 w-full flex items-center justify-center">
        <img
          src="src/assets/images/seo-img-ananta.png"
          alt="Main SEO image"
          className="w-full h-auto block"
        ></img>
        <div className="absolute z-10 bottom-0 my-4 w-full flex flex-col items-center">
          <p className="flex items-center py-2 drop-shadow-xl tracking-widest uppercase font-(family-name:--roboto-font) text-4xl text-white [-webkit-text-stroke:0.05px_var(--color-cyan-400)]">
            Global Release
          </p>
          <p className="flex items-center py-2 drop-shadow-xl tracking-wider uppercase font-medium font-(family-name:--roboto-font) text-8xl text-white [-webkit-text-stroke:0.1px_var(--color-cyan-400)]">
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
      </div>
      {/* Content block with summary */}
      <div className="h-screen bg-neutral-900 flex items-center justify-center text-white">
        <h3 className="text-xl">End</h3>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}
