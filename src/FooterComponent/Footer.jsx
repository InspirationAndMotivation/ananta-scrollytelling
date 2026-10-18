import './Footer.css';

import esrbRatingImg from '../assets/images/esrb-teen.jpg';
import nakedRainLogoImg from '../assets/images/icon-studio.svg';

import ps5Icon from '../assets/images/icon-ps5.svg';
import pcIcon from '../assets/images/icon-pc.svg';
import appleIcon from '../assets/images/icon-apple.svg';
import androidIcon from '../assets/images/icon-android.svg';
import cloudIcon from '../assets/images/icon-cloud.svg';

const Footer = () => {
  return (
    <>
      <footer className="w-full text-white bg-[var(--background-color)] py-12 px-6 sm:px-12 md:px-20 border-t border-neutral-900 select-none">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-14 gap-10 items-start">
          <div className="lg:col-span-6 flex flex-col gap-8 items-start">
            <img
              src={esrbRatingImg}
              alt="ESRB Teen Rating"
              className="h-20 w-auto object-contain opacity-90"
            />

            <img
              src={nakedRainLogoImg}
              alt="Naked Rain Studio"
              className="h-12 w-auto object-contain brightness-0 invert opacity-90"
            />
          </div>

          {/* Right Column: Navigation, Icons & Legal */}
          <div className="lg:col-span-8 flex flex-col gap-6 text-left">
            <div className="flex flex-col gap-2 font-bold tracking-wider text-sm sm:text-base">
              <a
                href="#partner"
                className="hover:text-cyan-400 transition-colors uppercase"
              >
                PARTNER WITH US
              </a>
              <a
                href="#privacy"
                className="text-gray-400 hover:text-cyan-400 transition-colors uppercase"
              >
                PRIVACY POLICY
              </a>
              <div className="w-full h-[1px] bg-neutral-800 mt-2" />
            </div>

            {/* Platform Icons + Thin Divider Below */}
            <div className="flex flex-col gap-3 pt-2">
              <div className="flex flex-wrap items-center gap-6 text-gray-300 text-xs sm:text-sm">
                {/* PS5 */}
                <img src={ps5Icon} alt="PS5"></img>

                {/* PC / Monitor */}
                <img src={pcIcon} alt="PC"></img>

                {/* Apple */}
                <img src={appleIcon} alt="Apple"></img>

                {/* Android */}
                <img src={androidIcon} alt="Android"></img>

                {/* Cloud Gaming */}
                <img src={cloudIcon} alt="Cloud"></img>

                {/* Label */}
                <span className="text-gray-400 text-xs tracking-wide">
                  and more...
                </span>
              </div>

              <div className="w-full h-[1px] bg-neutral-800 mt-2" />
            </div>

            {/* Legal Information & Copyrights */}
            <div className="flex flex-col gap-1 text-[11px] sm:text-xs text-gray-400 leading-relaxed font-sans">
              <p>©1997–2026 NetEase, Inc.All Rights Reserved</p>
              <p>
                <a
                  href="#privacy"
                  className="underline hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
                {' and '}
                <a
                  href="#terms"
                  className="underline hover:text-white transition-colors"
                >
                  User Agreement
                </a>
                , Terms and Conditions
              </p>
              <p>
                Company Address: 126 BEACH ROAD #04-11 GUOCO MIDTOWN NETWORK HUB
                SINGAPORE 189772
              </p>
              <p>
                Connection for Business:{' '}
                <a
                  href="mailto:global@anantagame.com"
                  className="hover:text-white transition-colors"
                >
                  global@anantagame.com
                </a>
              </p>
              <div className="w-full h-[1px] bg-neutral-800 mt-2" />
              <p>
                Duplicate is maden by{' '}
                <a
                  href="https://inspirationandmotivation.github.io/"
                  className="font-bold text-white hover:text-cyan-400 transition-colors"
                >
                  Anastasia
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
