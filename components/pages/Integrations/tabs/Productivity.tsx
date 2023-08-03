import { productivity_data } from './jsons/productivity.json'

const Productivity = () => {
  return (
    <div className="Integration_Productivity_section" id="product">
      <h3 className="text-[#171717] text-2xl font-semibold leading-7 mb-6 dark-white-color">
        <a href="#product" className="integrate_link">
          Productivity
        </a>
      </h3>
      <div className="Integration_productivity_image_content grid grid-cols-3 gap-6 mb-20">
        {
          productivity_data.map((data) => (
            <a href="#" className="Integration_cards" key={data.id}>
              <div className="productivity_content dark_background p-4 min-h-[120px] pb-5 hover:shadow-[0_5px_10px_rgba(0,0,0,0.12)] rounded-[8px] bg-[#fff] border border-[#eaeaea]">
                <div className="contenful_logo flex items-center gap-4 mb-4">
                  <div className="productivity_content flex">
                    <img
                      src={data.icon_path}
                      className="w-[42px] h-[42px] rounded-full border border-[#eaeaea]"
                    ></img>
                  </div>
                  <div className="productivity_title">
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
export default Productivity;
