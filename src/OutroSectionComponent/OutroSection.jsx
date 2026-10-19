import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './OutroSection.css';
import logoImg from '../assets/images/logo-stroke.png';
import ps5Icon from '../assets/images/playstation_5.svg';
import appStoreIcon from '../assets/images/app-store.svg';
import googlePlayIcon from '../assets/images/google-play.svg';

gsap.registerPlugin(ScrollTrigger);

export default function OutroSection() {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const dateRef = useRef(null);
  const subtitleRef = useRef(null);
  const platformsRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: '+=250%',
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Logo appears
    tl.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.96 },
      { opacity: 0.25, scale: 1, duration: 0.5, ease: 'power2.out' },
      0,
    )
      // Data appears (Blur -> Clear)
      .fromTo(
        dateRef.current,
        { opacity: 0, filter: 'blur(12px)', y: 10 },
        {
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
          duration: 1,
          ease: 'power2.out',
        },
        '+=0.3',
      )
      // "Global Release" appears
      .fromTo(
        subtitleRef.current,
        { opacity: 0, filter: 'blur(8px)', y: 10 },
        {
          opacity: 0.8,
          filter: 'blur(0px)',
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
        },
        '+=0.2',
      )
      // Platforms appear
      .fromTo(
        platformsRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        '+=0.2',
      );

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen bg-[var(--background-color)] flex flex-col items-center justify-center overflow-hidden z-40 select-none"
    >
      {/* 1. Background outline logo */}
      <div
        ref={logoRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none px-6"
      >
        <img
          src={logoImg}
          alt="ANANTA Logo"
          className="w-full max-w-7xl object-contain select-none pointer-events-none"
        />
      </div>

      {/* 2. Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <div
          ref={dateRef}
          className="text-4xl sm:text-7xl md:text-8xl font-extrabold text-white tracking-wider mb-4 drop-shadow-[0_0_25px_rgba(255,255,255,0.3)]"
        >
          2027.01.15
        </div>
      </div>
      <div className="absolute bottom-10 md:bottom-16 left-0 w-full z-30 flex flex-col items-center justify-center gap-4 px-4 text-center">
        {/* 3. Subheading */}
        <p
          ref={subtitleRef}
          className="text-gray-300 text-base sm:text-sm md:text-lg font-semibold font-(family-name:--roboto-font) tracking-[0.25em] uppercase whitespace-nowrap"
        >
          Global Release
        </p>

        {/* 4. Platforms */}
        <div
          ref={platformsRef}
          className="grid grid-cols-2 sm:grid-cols-4 items-end justify-center gap-2 md:gap-4 text-gray-400 text-xs sm:text-sm font-semibold font-(family-name:--roboto-font) tracking-wider uppercase whitespace-nowrapmax-w-3xl mx-auto"
        >
          <span className="flex flex-col items-center gap-2.5 hover:text-white transition-colors cursor-pointer group">
            <img
              src={ps5Icon}
              alt="PS5"
              className="h-8 md:h-9 w-auto object-contain brightness-0 invert opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
            />
            PS5
          </span>
          <span className="flex flex-col items-center gap-2.5 hover:text-white transition-colors cursor-pointer group">
            <svg
              className="h-8 md:h-9 w-auto object-contain brightness-0 invert opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
              viewBox="0 0 24 24"
            >
              <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z" />
            </svg>
            STEAM
          </span>
          <span className="flex flex-col items-center gap-2.5 hover:text-white transition-colors cursor-pointer group">
            <img
              src={appStoreIcon}
              alt="App Store"
              className="h-12 md:h-14 w-auto max-w-none scale-[2.2] object-contain opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-[2.4]"
            />
            App Store
          </span>
          <span className="flex flex-col items-center gap-2.5 hover:text-white transition-colors cursor-pointer group">
            <img
              src={googlePlayIcon}
              alt="Google Play"
              className="h-12 md:h-14 w-auto max-w-none scale-[2.2] object-contain opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-[2.4]"
            />
            Google Play
          </span>
        </div>
      </div>
    </section>
  );
}
