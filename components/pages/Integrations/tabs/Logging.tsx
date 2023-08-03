import { logging_data } from './jsons/logging.json'

const Logging = () => {
  return (
    <div className="Integration_logging_section" id="logging">
      <h3 className="text-[#171717] text-2xl font-semibold leading-7 mb-6 dark-white-color ">
        <a href="#logging" className="integrate_link">
          Logging
        </a>
      </h3>
      <div className="Integration_monitor_image_content grid grid-cols-3 gap-6 mb-20">
        {
          logging_data.map((data) => (
            <a href="#" className="Integration_cards">
              <div className="logging_content dark_background p-4 min-h-[142px] pb-5 hover:shadow-[0_5px_10px_rgba(0,0,0,0.12)] rounded-[8px] bg-[#fff] border border-[#eaeaea]">
                <div className="contenful_logo flex items-center gap-4 mb-4">
                  <div className="logging_content flex">
                    <img
                      src={data.icon_path}
                      className="w-[42px] h-[42px] rounded-full border border-[#eaeaea]"
                    ></img>
                  </div>
                  <div className="logging_title">
                    <h6 className="text-[#000] text-sm font-bold">{data.title}</h6>
                  </div>
                </div>
                <div className="contenful_content">
                  <p className="text-sm text-[#666666] font-light">
                    {data.subtitle}
                  </p>
                </div>
              </div>
            </a>
          ))
        }
      </div>
    </div>
  );
};
export default Logging;
