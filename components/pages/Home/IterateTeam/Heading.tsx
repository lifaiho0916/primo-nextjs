const Heading = () => {
  return (
    <div className="build_inspiration_heading">
      <span className=" gradient_color2 w-px flex  bg-gradient-to-b from-[#fff] to-[#9a1fb8] h-28 text-center m-auto"></span>
      <span className=" darkcolor bg-gradient-to-r from-[#7928ca] to-[#ff0080] w-10 h-10 rounded-full flex m-auto text-white items-center justify-center">
        2
      </span>
      <h4 className="mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#7928ca] to-[#ff0080] text-4xl font-bold text-center pt-4">
        Preview
      </h4>
      <h2 className="font-bold text-black text-6xl text-center mb-6 preview_tittle darktext">
        Iterate with your team
      </h2>
      <p className=" text-[#666] text-center text-[20px] w-[53%] dark_content_color font-normal m-auto mb-24">
        Make frontend development a collaborative experience with automatic
        Preview Deployments for every code change, by seamlessly integrating
        with <span className="text-[#de1d8d]"> GitHub</span>,
        <span className="text-[#de1d8d]"> GitLab</span>, and
        <span className="text-[#de1d8d]"> Bitbucket.</span>
      </p>
    </div>
  );
};
export default Heading;
