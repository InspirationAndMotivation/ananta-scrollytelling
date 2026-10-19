import logoGray from '/src/assets/images/logo-gray.png';
import logoWhite from '/src/assets/images/logo-white.png';

const Preloader = ({ progress = 0 }) => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[var(--background-color)] overflow-hidden">
      <div className="relative w-48 sm:w-64 h-auto aspect-[4/1]">
        <img
          src={logoGray}
          alt="ANANTA background"
          className="absolute inset-0 w-full h-full object-contain opacity-40 select-none"
        />

        <img
          src={logoWhite}
          alt="ANANTA progress"
          className="absolute inset-0 w-full h-full object-contain select-none transition-all duration-250 ease-out"
          style={{
            clipPath: `inset(0 ${100 - progress}% 0 0)`,
          }}
        />
      </div>

      <div className="mt-4 text-white font-mono text-base sm:text-lg font-semibold tracking-wider">
        {progress}%
      </div>
    </div>
  );
};

export default Preloader;
