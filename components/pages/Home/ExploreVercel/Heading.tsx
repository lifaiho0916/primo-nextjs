const Heading = () => {
  return (
    <div className="build_inspiration_heading">
      <span className="mb-8 lg:mb-12  leading-tight text-center text-xs tracking-[0.2rem] uppercase dark-text-color text-grey font-semibold flex justify-center">
        EXPLORE THE VERCEL WAY
      </span>
      <span className="w-px flex  bg-gradient-to-b from-[#fff] to-[#019ae9] h-28 text-center m-auto gradient_color"></span>
      <span className="darkcolor bg-gradient-to-r from-[#007cf0] to-[#00dfd8] w-10 h-10 rounded-full flex m-auto text-white items-center justify-center">
        1
      </span>
      <h4 className="mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#007cf0] to-[#00dfd8] text-4xl font-bold text-center pt-4">
        Develop
      </h4>
      <h2 className="font-bold text-black text-6xl text-center mb-6 darktext">
        Build when inspiration strikes
      </h2>
      <p className="text-center text-[#666]  text-[20px] w-[53%] dark_content_color font-normal m-auto mb-24">
        Free developers from time-consuming, unnecessary processes that slow
        your work, so you and your team can focus on creating.
      </p>
    </div>
  );
};
export default Heading;
