import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import './ScrollVideo.css';

import videoSrc from '/src/assets/video/ananta-story.mp4';
import posterSrc from '/src/assets/images/ananta-start.jpg';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollVideo() {
  const containerRef = useRef(null);
  const overlayRef = useRef(null);
  const videoRef = useRef(null);

  //   const [activeCharacter, setActiveCharacter] = useState(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = 0.1;

    const handleMetadata = () => {
      video.currentTime = 0.01;
    };
    video.addEventListener('loadedmetadata', handleMetadata);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        onUpdate: (self) => {
          if (video.duration) {
            video.currentTime = self.progress * video.duration;
          }
        },
      },
    });

    return () => {
      video.removeEventListener('loadedmetadata', handleMetadata);
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
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
      </div>
    </div>
  );
}
