
import Heading from "./IntegrationsHeading";
import Sidebar from './Sidebar/page'
import Analytics from "./tabs/Analytics";
import CMS from "./tabs/CMS";
import CodeRepository from "./tabs/CodeRepository";
import Commerce from "./tabs/Commerce";
import Databases from "./tabs/Databases";
import Devtools from "./tabs/Devtools";
import Featured from "./tabs/Featured";
import Logging from "./tabs/Logging";
import Messaging from "./tabs/Messaging";
import Monitoring from "./tabs/Monitoring";
import Observalibity from "./tabs/Observalibity";
import Productivity from "./tabs/Productivity";
import Security from "./tabs/Security";
import Testing from "./tabs/Testing";

const page = () => {
  return (
    <div className="Integration_Page_Wrapper bg-[#fafafa] dark_dark_background_color ">
      <div className="container">
        <Heading />
        <div className="Integration_sidebar_content_wrapper flex gap-x-14 mx-2">
          <Sidebar />
          <div className="Integration_sidebar_main_content grow-[1]">
            <Featured />
            <Analytics />
            <CMS/>
            <CodeRepository/>
            <Commerce/>
            <Databases/>
            <Devtools />
            <Logging/>
            <Messaging/>
            <Monitoring/>
            <Observalibity/>
            <Productivity/>
            <Security/>
            <Testing />
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
