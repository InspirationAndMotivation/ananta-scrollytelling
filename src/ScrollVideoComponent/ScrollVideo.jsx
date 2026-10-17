import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import './ScrollVideo.css';

import videoSrc from '/src/assets/video/ananta-story.mp4';
import posterSrc from '/src/assets/images/ananta-start.jpg';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollVideo() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  //   const [activeCharacter, setActiveCharacter] = useState(null);

  useGSAP(
    () => {
      const video = videoRef.current;
      if (!video) return;

      const initScroll = () => {
        if (!video.duration) return;

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
