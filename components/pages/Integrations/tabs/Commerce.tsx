import { commerce_data } from './jsons/commerce.json'

const Commerce = () => {
  return (
    <div className="Integration_commerce_section" id="commerce">
      <h3 className="text-[#171717] text-2xl font-semibold leading-7 mb-6 dark-white-color ">
        <a href="#commerce" className="integrate_link">
          Commerce
        </a>
      </h3>
      <div className="Integration_commerce_image_content grid grid-cols-3 gap-6 mb-20">
        {
          commerce_data.map((data) => (
            <a href="#" className="Integration_cards" key={data.id}>
              <div className="commerce_content dark_background p-4 min-h-[142px] pb-5 hover:shadow-[0_5px_10px_rgba(0,0,0,0.12)] rounded-[8px] bg-[#fff] border border-[#eaeaea]">
                <div className="contenful_logo flex items-center gap-4 mb-4">
                  <div className="commerce_content flex">
                    <img
                      src={data.icon_path}
                      className="w-[42px] h-[42px] rounded-full border border-[#eaeaea]"
                    ></img>
                  </div>
                  <div className="commerce_title">
                    <h6 className="text-[#000] text-sm font-bold">{data.title}</h6>
                    {
                      data.tag ? (      
                    <span className="beta text-xs text-[#666666] px-1.5 bg-[#ebebeb] rounded-lg">
                      {data.tag}
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
export default Commerce;
