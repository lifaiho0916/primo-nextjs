import { analytics_data } from "./jsons/analytics.json"

const Analytics = () => {
  return (
    <div className="Integration_Analytics_section" id="analytics">
      <h3 className="text-[#171717] text-2xl font-semibold leading-7 mb-6 dark-white-color ">
        <a href="#analytics" className="integrate_link">
          Analytics
        </a>
      </h3>
      <div className="Integration_Analytics_image_content grid grid-cols-3 gap-6 mb-20">
        {
          analytics_data.map((data) => (
            <a href="#" className="Integration_cards" key={data.id}>
              <div className="Analytices_content p-4 pb-5 min-h-[122px] hover:shadow-[0_5px_10px_rgba(0,0,0,0.12)] rounded-[8px] bg-[#fff] border border-[#eaeaea] dark_background">
                <div className="contenful_logo flex items-center gap-4 mb-2">
                  <div className="analytice_content flex">
                    <img
                      src={data.icon_path}
                      className="w-[42px] h-[42px] rounded-full border border-[#eaeaea]"
                    ></img>
                  </div>
                  <div className="analytics_title">
                    <h6 className="text-[#000] text-sm font-bold">{data.title}</h6>
                    {data.tag ? (
                      <span className="beta text-xs text-[#666666] px-1.5 bg-[#ebebeb] rounded-lg">
                        Beta
                      </span>
                    ) : null
                    }
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
export default Analytics;
