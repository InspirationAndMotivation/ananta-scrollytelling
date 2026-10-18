import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Observer } from 'gsap/Observer';
import { useGSAP } from '@gsap/react';

import './ScrollVideo.css';

import videoSrc from '/src/assets/video/ananta-story.mp4';
import posterSrc from '/src/assets/images/ananta-start.jpg';

gsap.registerPlugin(ScrollTrigger, Observer);

const CHARACTERS = [
  {
    id: 'char-1',
    startProgress: 0.018,
    endProgress: 0.14,
    align: 'left',
    name: 'Captain',
    role: 'Leader of the ACD',
    title: 'Traffic jam? </br> Time to fly.',
    description: `The perpetually beleaguered captain of the ACD task force, hailing from... actually, let's skip all that.
    Kicking back and having fun is the main objective here. So what if the ACD is crumbling and we've got gangs of rock 'n' roll
    fanatics breathing down our necks? Any decent plan should be able to accommodate a few changes.`,
  },
  {
    id: 'char-2',
    startProgress: 0.23,
    endProgress: 0.29,
    align: 'right',
    name: 'Taffy',
    role: 'Courier & Yeet Squad Founder',
    title: 'Ugh, work stinks! </br> Never shoulda taken this job.',
    description: `We all want jobs with a fat paycheck, easy hours, and a short commute. Taffy thought joining the 
    ACD would have her living on easy street. Instead, she's out IN the streets, baking under the sun as she delivers 
    all sorts of bizarre cargo on her bike. Not exactly what she had in mind. However, as a founding member of the Yeet Squad, 
    she's hoping to get a few well-deserved perks once she racks up a million fans.`,
  },
  {
    id: 'char-3',
    startProgress: 0.43,
    endProgress: 0.5,
    align: 'right',
    name: 'Richie',
    role: 'ACD Field Operative',
    title: `It's a shot in the dark, but I gotta go with my gut.`,
    description: `While it's sometimes hard to tell if she's fiercely dedicated to her work or simply not all there mentally, 
    as far as the ACD is concerned, having her on the team is a major boon. She fights crime by day, and moonlights at night. 
    Pro tip: Any thugs who get pinched would be smart to cooperate with her. The food at the NCCA isn't too bad, and she always 
    cleans her plate. Don't feel like playing nice? Fine. Good luck dodging her fists then.`,
  },
  {
    id: 'char-4',
    startProgress: 0.61,
    endProgress: 0.69,
    align: 'right',
    name: 'Seymour',
    role: 'Hacker & Informant',
    title: 'Please remain calm. </br> I was not spying on you.',
    description: `As long as there's a signal, there's no one he can't track down—assuming they're worth his 
    time or have done something sufficiently deranged. You can usually find him in his RV, having a respite from 
    the incessant questions folks have about his mask. If you want to get his attention, do something that'll make the headlines. 
    Also, remember to change your password every six months!`,
  },
];

export default function ScrollVideo() {
  const containerRef = useRef(null);
  const overlayRef = useRef(null);
  const videoRef = useRef(null);

  const [activeCharacter, setActiveCharacter] = useState(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    video.currentTime = 0.1;

    const handleMetadata = () => {
      video.currentTime = 0.01;
    };
    video.addEventListener('loadedmetadata', handleMetadata);

    const st = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.2,
        onUpdate: (self) => {
          if (video.duration) {
            video.currentTime = self.progress * video.duration;
          }

          const currentProgress = self.progress;
          const currentCharacter = CHARACTERS.find(
            (char) =>
              currentProgress >= char.startProgress &&
              currentProgress <= char.endProgress,
          );

          setActiveCharacter(currentCharacter ? currentCharacter.id : null);
        },
      },
    });

    const keyboardObserver = Observer.create({
      target: window,
      type: 'keydown',
      onKeyDown: (self) => {
        const rect = container.getBoundingClientRect();
        const isInSection = rect.top <= 10 && rect.bottom >= window.innerHeight;

        if (!isInSection) return;

        const key = self.event.key;
        const keysToIntercept = [
          'PageDown',
          'PageUp',
          ' ',
          'ArrowDown',
          'ArrowUp',
        ];

        if (keysToIntercept.includes(key)) {
          self.event.preventDefault();

          const isDown = ['PageDown', 'ArrowDown', ' '].includes(key);
          const step = isDown ? 250 : -250;

          gsap.to(window, {
            scrollTo: { y: window.scrollY + step, autoKill: false },
            duration: 0.4,
            ease: 'power2.out',
          });
        }
      },
    });

    return () => {
      video.removeEventListener('loadedmetadata', handleMetadata);
      ScrollTrigger.getAll().forEach((t) => t.kill());
      st.kill();
      keyboardObserver.kill();
    };
  }, []);

  useGSAP(
    () => {
      const video = videoRef.current;
      if (!video) return;

      const initScroll = () => {
        if (!video.duration) return;

        gsap.to(overlayRef.current, {
          opacity: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'top -50%',
            scrub: true,
          },
        });

        gsap.to(video, {
          currentTime: video.duration,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: '+=300%',
            scrub: 0.5,
            pin: true,
            anticipatePin: 1,
          },
        });
      };

      if (video.readyState >= 1) {
        initScroll();
      } else {
        video.addEventListener('loadedmetadata', initScroll);
        return () => video.removeEventListener('loadedmetadata', initScroll);
      }
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[500vh] bg-[var(--background-color)]"
    >
      <div className="absolute top-0 left-0 w-full h-24 sm:h-32 bg-gradient-to-b from-black via-black/50 to-transparent pointer-events-none z-20" />
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black pointer-events-none z-20"
      />
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        <video
          ref={videoRef}
          src={videoSrc}
          poster={posterSrc}
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover block"
        />
        {/* Dynamic character cards overlay */}
        <div className="absolute inset-0 pointer-events-none z-30 flex items-center justify-start px-8 md:px-16 lg:px-24">
          {CHARACTERS.map((char, index) => {
            const isActive = activeCharacter === char.id;
            const isRight = char.align === 'right';

            return (
              <div
                key={char.id}
                className={`absolute max-w-xl transition-all duration-700 ease-out transform ${
                  isRight
                    ? 'right-8 md:right-16 lg:right-24 text-right'
                    : 'left-8 md:left-16 lg:left-24 text-left'
                } ${
                  isActive
                    ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
                    : 'opacity-0 translate-y-8 scale-95 pointer-events-none'
                }`}
              >
                <p className="text-cyan-400 font-mono tracking-widest text-xs md:text-sm uppercase mb-1 drop-shadow-md">
                  // 0{index + 1}. {char.role}
                </p>

                <h2 className="text-5xl sm:text-7xl md:text-8xl font-black text-white uppercase tracking-tight drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)]">
                  {char.name}
                </h2>

                <h3
                  className="text-xl md:text-[1.65rem] font-semibold text-slate-100 mt-2 italic drop-shadow-md"
                  dangerouslySetInnerHTML={{ __html: char.title }}
                />

                <p className="text-gray-300 text-sm md:text-base leading-relaxed font-normal mt-4 border-l-2 border-cyan-400/80 pl-4 bg-black/40 backdrop-blur-sm p-3 rounded-r-lg drop-shadow-lg">
                  {char.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
