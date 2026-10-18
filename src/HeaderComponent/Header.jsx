import gsap from 'gsap';
import './Header.css';

const Header = () => {
  const handleScrollToNews = (e) => {
    e.preventDefault();

    gsap.to(window, {
      duration: 6.5,
      scrollTo: {
        y: '#news',
        autoKill: false,
      },
      ease: 'power2.inOut',
    });
  };

  const handleScrollToChars = (e) => {
    e.preventDefault();

    gsap.to(window, {
      duration: 1.5,
      scrollTo: {
        y: '#characters',
        autoKill: false,
      },
      ease: 'power2.inOut',
    });
  };

  return (
    <>
      <header className="w-full px-4 sm:px-8 lg:px-25 py-2 sm:py-4 lg:py-6 flex items-center justify-between text-white border-b border-white/10 bg-[var(--background-color)]">
        <div className="flex items-center gap-4 sm:gap-8 lg:gap-20">
          <img
            alt="ANANTA"
            src="./assets/images/logo.png"
            className="h-7 w-auto"
          ></img>
          <nav className="hidden xl:flex items-center gap-4 sm:gap-8 lg:gap-20 mx-10 text-xs sm:text-sm lg:text-lg font-medium tracking-wide text-white/50">
            <a href="#home" className="hover:text-white transition-colors">
              Home
            </a>
            <a
              href="https://www.anantagame.com/"
              className="hover:text-white transition-colors"
            >
              Pre-Registration Milestones
            </a>
            <a
              href="#characters"
              onClick={handleScrollToChars}
              className="hover:text-white transition-colors"
            >
              Characters
            </a>
            <a
              href="https://www.anantagame.com/"
              className="hover:text-white transition-colors"
            >
              Locations
            </a>
            <a
              href="#news"
              onClick={handleScrollToNews}
              className="hover:text-white transition-colors"
            >
              News
            </a>
            <a
              href="https://www.anantagame.com/scope/#/"
              className="hover:text-white transition-colors"
            >
              Scope
            </a>
          </nav>
        </div>
        <div className="flex items-center flex-shrink-0">
          <svg
            data-v-4e935bf4=""
            width="73"
            height="32"
            viewBox="0 0 73 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g data-v-4e935bf4="" clipPath="url(#clip0_1095_5370)">
              <path
                data-v-4e935bf4=""
                fillRule="evenodd"
                clipRule="evenodd"
                d="M71.3938 10.3582C71.0582 11.2254 70.58 11.9847 69.9597 12.6365C69.3391 13.2886 68.6014 13.7945 67.7466 14.1553C66.8918 14.516 65.9639 14.6964 64.9635 14.6964H62.7135L58.5427 14.547V4.6875H63.0427V11.6064C64.8398 11.6064 65.5774 11.6204 66.1297 11.0228C66.8959 10.1939 67.2791 9.03258 67.2791 7.53895C67.2791 4.84179 65.9611 3.25701 63.2665 3.25701L58.5427 3.13074H51.2735V5.37939H57.8504V8.31993H51.2735V11.4334L56.4511 11.5744H58.1818L58.0235 14.547L46.9675 14.6964H46.9654H45.2367H43.3772H41.6464L38.6389 10.5686V14.547L37.0301 14.6964H35.9684L34.1389 14.547V0.190199H38.6389V3.9956L41.4944 0.381507H43.2252H44.9328H46.6636L41.2305 6.98838L46.9654 14.6936L46.7735 0.190199H64.9465C66.1153 0.190199 66.9297 0.558977 67.7845 0.913053C68.6395 1.26765 69.3737 1.77065 69.9881 2.42241C70.6024 3.07452 71.074 3.8401 71.4034 4.71967C71.7325 5.59958 71.8973 6.54557 71.8973 7.55798C71.8973 8.55794 71.7293 9.49147 71.3938 10.3582ZM31.25 31.8207H29.5193L28.4174 28.802H25.171L23.9933 31.8207H22.2625H21.0489H20.3839H19.3181H18.6531H17.0025H14.9256L11.2927 25.9632H9.56193V31.6713H4.88885V17.3145L14.4759 17.5058C15.9703 17.5058 17.1418 17.8571 17.9904 18.5596C18.8387 19.262 19.2632 20.3474 19.2632 21.8155C19.2632 22.7903 19.0034 23.6571 18.4842 24.4164C17.9648 25.176 17.2495 25.6316 16.3377 25.7835L19.7037 30.8059L24.9031 17.1262H26.6339H27.0687H28.7994L34.2325 31.8207H32.5017H31.25ZM13.1965 19.9091H9.56193V23.1956H13.1965C13.1965 23.1956 14.7399 23.3662 14.7399 21.7184C14.7399 20.1499 13.1965 19.9091 13.1965 19.9091ZM26.7519 23.9408L25.9689 26.5238H27.6386L26.7519 23.9408ZM31.1813 14.6964H29.4505L28.3487 11.6777H25.1023L23.9245 14.6964H22.1938H20.9802H19.2494L24.8344 0.00183105H26.5652H26.9999H28.7307L34.1638 14.6964H32.433H31.1813ZM26.6832 6.81645L25.9002 9.39945H27.5699L26.6832 6.81645ZM15.2735 14.547L9.56193 7.10912V14.547L7.87028 14.6964H6.80862L4.88885 14.547V0.190199L6.80862 0.347777H7.0916H8.8222L14.5812 7.62804V0.190199H19.0812V14.547H15.2735ZM0.0253906 0.190199H1.77347V31.6713H0.0253906V0.190199ZM38.6389 31.6713L37.0988 31.8207H36.0372H34.3064L34.1389 17.3145H38.6389V31.6713ZM42.095 17.4721H43.8258L49.6746 24.8855V17.5058H51.4054H52.4672H54.198L54.0427 31.8443H50.235L44.6046 24.346V31.8207H42.8739H41.8122L39.8504 31.6713V17.3145L41.8122 17.4721H42.095Z"
                fill="#F2F2F2"
              ></path>
            </g>
          </svg>
        </div>
      </header>
    </>
  );
};

export default Header;
