import { SliderTrack } from "@radix-ui/react-slider";
import LogoSlider from "./Slider";

const TrustedTeams = () => {
  return (
    <div className=" mx-32 trusted_partners">
      <section className=" items-center">
        <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
          <h2 className="mb-8  lg:mb-16 text-3xl font-extrabold  leading-tight text-center  text-xs tracking-[0.2rem] font-light uppercase text-grey font-semibold ">
            Trusted by the best frontend teams
          </h2>
          <div className="grid grid-cols-5 gap-8 text-gray-500 sm:gap-12  dark:text-gray-400 desktop_logos">
            <a href="#" className="flex justify-center items-center">
              <img src="/assets/svg/logo1.svg"></img>
            </a>
            <a href="#" className="flex justify-center items-center">
              <img src="/assets/svg/okta.svg"></img>
            </a>
            <a href="#" className="flex justify-center items-center">
              <img src="/assets/svg/under-armour.svg"></img>
            </a>

            <a href="#" className="flex justify-center items-center">
              <img src="/assets/svg/ebay.svg"></img>
            </a>
            <a href="#" className="flex justify-center items-center">
              <img className="w-24" src="/assets/svg/zapier.svg"></img>
            </a>
          </div>

          <div className="grid grid-cols-4 gap-8 text-gray-500 sm:gap-12  dark:text-gray-400 mt-6 desktop_logos">
            <a href="#" className="flex  items-center">
              <img src="/assets/svg/loom.svg"></img>
            </a>
            <a href="#" className="flex  items-center">
              <img src="/assets/svg/hashicorp.svg"></img>
            </a>
            <a href="#" className="flex items-center">
              <img src="/assets/svg/tailwindcss_logo.svg"></img>
            </a>

            <a href="#" className="flex  items-center">
              <img className="w-52" src="/assets/svg/washingtonpost.svg"></img>
            </a>
          </div>
        </div>
        
          <div className="slider-section hidden">
            <LogoSlider />
          </div>
      </section>
    </div>
  );
};
export default TrustedTeams;
