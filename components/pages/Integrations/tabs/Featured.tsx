import { featured } from "./jsons/featured.json";

const Featured = () => {
  return (
    <div className="Integration_featured_section" id="featured">
      <h3 className="text-[#171717] text-2xl font-semibold leading-7 mb-6 dark-white-color ">
        <a href="#featured" className="integrate_link">
          Featured
        </a>
      </h3>
      <div className="Integration_featured_image_content grid grid-cols-3 gap-6 mb-20">
        {
          featured.map((data) => (
            <a href="#" className="Integration_cards" key={data.id}>
              <div className="Integration_content dark_background rounded-[8px] hover:shadow-[4px_4px_16px_rgba(136,136,136)] rounded-tl-8 rounded-tr-8 bg-cover bg-repeat " style={{backgroundImage:`url(${data.background_img})`}}>
                <div className="contenful_logo flex flex-col justify-end items-start gap-4 min-h-[198px] b bg-gradient-to-b from-transparent to-black rounded-tl-lg rounded-tr-lg  p-4 pb-1 rounded-tl-8 rounded-tr-8">
                  <img
                    src={data.icon}
                    className="w-[42px] h-[42px] rounded-full border border-[#333]"
                  ></img>
                  <h6 className="text-[#fff] leading-[1.25rem] font-normal">
                    {data.title}
                  </h6>
                </div>
                <div className="contenful_content bg-black pb-4	px-4 rounded-bl-lg rounded-br-lg">
                  <p className="text-[#999999] text-sm">
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
export default Featured;
