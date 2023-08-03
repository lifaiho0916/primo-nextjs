import Search from "@/utils/SvgIcons/CommonSvg/Search";
import SelectOption from "@/utils/SvgIcons/SelectOption";
import { sidebar } from "./links.json";

const page = () => {
  return (
    <div className="Integration_sidebar_info flex-shrink-0 flex-basis-210 max-w-[210px]">
      <div className="sticky top-6">
        <div className="Integration_serach_box rounded-md flex items-center overflow-hidden border border-[#ccc] mb-5 h-[40px]">
          <div className="Integration_search_icon bg-[#fff] p-2 px-3  invertlogo">
            <Search />
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="block w-full rounded-md text-[0.875rem] p-2.5	py-2 pl-0 hover: outline-none text-[#000] font-light placeholder-gray-500 dark_dark_background_color "
          ></input>
        </div>
        <div className="Select_mobile_view hidden">
          <div className="Integration_user_select border flex items-center border-[#ccc] rounded-md overflow-hidden pt-[7px] pb-[7px] pl-[12px] pr-[15px]">
            <select className="select_values bg-[#fafafa] focus:outline-none text-[0.875rem] text-[#000] font-light">
              <option disabled value="Select a category" selected>
                Select a category
              </option>
              <option value="analytics">Analytics</option>
              <option value="cms">CMS</option>
              <option value="code-repository">Code Repository</option>
              <option value="commerce">Commerce</option>
              <option value="databases">Databases</option>
              <option value="dev-tools">DevTools</option>
              <option value="logging">Logging</option>
              <option value="messaging">Messaging</option>
              <option value="monitoring">Monitoring</option>
              <option value="observability">Observability</option>
              <option value="productivity">Productivity</option>
              <option value="security">Security</option>
              <option value="testing">Testing</option>
            </select>
            <span className="Integration_dropmenu_arrow">
              <SelectOption />
            </span>
          </div>
        </div>
        <div className="Integration_sidebar_menu">
          <ul className="Integration_sidebar_content">
            {sidebar.map((data, index: any) => (
              <li
                className="Integration_sidebar_listing py-1.5 my-1"
                key={index}
              >
                <a
                  href={data.href}
                  className="sidebar_link text-[#666] text-base font-light hover:text-black"
                >
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default page;
