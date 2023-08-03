import { codeRepository_data } from './jsons/codeRepository.json'

const CodeRepository = () => {
  return (
    <div className="Integration_Repository_section" id="respository">
      <h3 className="text-[#171717] text-2xl font-semibold leading-7 mb-6 dark-white-color ">
        <a href="#respository" className="integrate_link">
          Code Repository
        </a>
      </h3>
      <div className="Integration_Repository_image_content grid grid-cols-3 gap-6 mb-20">
        {
          codeRepository_data.map((data) => (
            <a href="#" className="Integration_cards" key={data.id}>
              <div className="Repository_content dark_background p-4 min-h-[142px] pb-5 hover:shadow-[0_5px_10px_rgba(0,0,0,0.12)] rounded-[8px] bg-[#fff] border border-[#eaeaea]">
                <div className="contenful_logo flex items-center gap-4 mb-4">
                  <div className="Repository_content flex">
                    <img
                      src={data.icon_path}
                      className="w-[42px] h-[42px] rounded-full border border-[#eaeaea]"
                    ></img>
                  </div>
                  <div className="Repository_title">
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
export default CodeRepository;
