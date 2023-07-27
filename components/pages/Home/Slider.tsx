const LogoSlider = () => {
    return (
      <div className=" gap-8 text-gray-500 sm:gap-12  dark:text-gray-400">
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <img src="/assets/svg/logo1.svg" height="50" width="150" alt="" />
            </div>
            <div className="slide">
              <img src="/assets/svg/okta.svg" height="100" width="250" alt="" />
            </div>
            <div className="slide">
              <img
                src="/assets/svg/under-armour.svg"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img src="/assets/svg/ebay.svg" height="100" width="250" alt="" />
            </div>
            <div className="slide">
              <img src="/assets/svg/zapier.svg" height="100" width="250" alt="" />
            </div>
            <div className="slide">
              <img src="/assets/svg/loom.svg" height="100" width="250" alt="" />
            </div>
            <div className="slide">
              <img
                src="/assets/svg/hashicorp.svg"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="/assets/svg/tailwindcss_logo.svg"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="/assets/svg/washingtonpost.svg"
                height="100"
                width="450"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default LogoSlider;