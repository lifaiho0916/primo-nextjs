import Deploy from "./Deploy/page";
import Heading from "./Heading";
import Previews from "./Previews/page";
import Reviews from "./Reviews/page";

const page = () => {
  return (
    <>
      <div className="build_inspiration preview_section">
        <Heading />
        <div className="main_outer_wrapper_item_section pb-[147px]">
          <Deploy />
          <Previews />
          <Reviews />
        </div>
      </div>
    </>
  );
};
export default page;
