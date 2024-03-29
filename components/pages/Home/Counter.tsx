const Counter = () => {
  return (
    <div className="counter_section bg-[#fafafa] border-t-[1px] border-[#eaeaea] py-6 border-b-[1px] dark_bordered darkbackground border_class">
      <div className="container">
        <div className="counters flex">
          <div className="counter_content darkborder text-center grow border-r-[1px] border-[#eaeaea] px-8 border-right">
            <h4 className="text-6xl font-bold text-black tracking-tighter pb-2 darktext">
              90
            </h4>
            <p className="text-sm tracking-widest text-grey font-semibold uppercase dark-text-color">
              CITES
            </p>
          </div>
          <div className="counter_content text-center grow darkborder border-r-[1px] border-[#eaeaea] px-8 border-right">
            <h4 className="text-6xl font-bold text-black tracking-tighter pb-2 darktext">
              41B+
            </h4>
            <p className="text-sm tracking-widest text-grey font-semibold uppercase dark-text-color">
              Requests Per Week
            </p>
          </div>
          <div className="counter_content text-center darkborder grow border-r-[1px] border-[#eaeaea] px-8 border-right">
            <h4 className="text-6xl font-bold text-black tracking-tighter pb-2 darktext">
              10PB
            </h4>
            <p className="text-sm tracking-widest text-grey font-semibold uppercase dark-text-color">
              Data Served
            </p>
          </div>
          <div className="counter_content text-center grow px-8 border-right">
            <h4 className="text-6xl font-bold text-black tracking-tighter pb-2 darktext">
              99.99%
            </h4>
            <p className="text-sm tracking-widest text-grey font-semibold uppercase dark-text-color">
              Guaranteed Uptime
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Counter;
