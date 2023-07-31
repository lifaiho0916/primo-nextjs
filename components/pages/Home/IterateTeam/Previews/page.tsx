const page = () => {
  return (
    <div className="preview-item_wrapper flex">
      <div className="outer_preview_content relative w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-[45%]  mr-1.5 ">
        <div className="preview_content_text  relative shadow-[0_8px_30px_rgba(0,0,0,.12)] dark-border-color border-[#eaeaea] pt-0 p-2.5  pl-0 pr-0 pb-6 rounded-md">
          <div className="dark_border_background preview_comment_header pt-2   pb-2 bg-[#f6f8fa] pl-2 rounded-tl-lg rounded-tr-lg">
            <p className="text-[12px] text-[#171717] dark-table-content">
              <span className="dark-table-content text-[#171717]">
                <b className="dark-table-title text-[#171717]">vercel</b>{" "}
                <span className="border-[#666] border  text-xs font-medium dark-table-content px-2.5 py-0.5 rounded-2xl :hover border-[#222]">
                  bot
                </span>
              </span>
              commented 3 minutes ago
            </p>
          </div>
          <p className="text-sm/[12px] m-4 text-[#171717] dark-table-title">
            <b>The latest updates on your project.</b> Learn more about{" "}
            <span className="text-[#0969da] dark-link-color"> Vercel for Git</span>{" "}
          </p>
          <table className="preview-comment_comment-table__3eKmg dark-border-color border-1 pl-2.5 w-[78%] ml-4 ">
            <thead>
              <tr className=" border-[#ddd] border-[1px]">
                <th
                  className=" border-[#ddd] border-[1px] dark-border-color text-xs dark-table-title font-medium p-1.5"
                  scope="col"
                >
                  <b>Name</b>
                </th>
                <th
                  className=" border-[#ddd] border-[1px] dark-border-color text-xs dark-table-title font-medium p-1.5"
                  scope="col"
                >
                  <b>Status</b>
                </th>
                <th
                  className=" border-[#ddd] border-[1px] dark-border-color text-xs dark-table-title font-medium p-1.5"
                  scope="col"
                >
                  <b>Preview</b>
                </th>
                <th
                  className=" border-[#ddd] border-[1px] dark-border-color text-xs dark-table-title font-medium p-1.5"
                  scope="col"
                >
                  <b>Updated</b>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className=" border-[#ddd] border-[1px] dark-border-color">
                <th
                  className=" border-[#ddd] dark-border-color border-[1px] text-xs font-medium dark-table-title p-1.5"
                  scope="row"
                >
                  <b>store</b>
                </th>
                <td className=" border-[#ddd] dark-border-color border-[1px] text-xs font-normal dark-table-title p-1.5">
                  ✅ Ready (
                  <span className="preview-comment_comment-link__VefXX dark-link-color">
                    Inspect
                  </span>
                  )
                </td>
                <td className=" border-[#ddd] dark-border-color border-[1px] dark-table-title text-xs font-normal p-1.5">
                  <span className="preview-comment_comment-link__VefXX dark-link-color">
                    Visit Preview
                  </span>
                </td>
                <td className=" border-[#ddd] dark-border-color border-[1px] text-xs dark-table-title font-normal p-1.5">
                  Oct 25, 2022 at 12:37 PM
                </td>
              </tr>
              <tr className=" border-[#ddd] dark-border-color border-[1px]">
                <th
                  className=" border-[#ddd] border-[1px] dark-border-color text-xs dark-table-title font-medium p-1.5"
                  scope="row"
                >
                  <b>site</b>
                </th>
                <td className=" border-[#ddd] border-[1px] dark-border-color text-xs font-normal dark-table-title p-1.5">
                  🔄 Building (
                  <span className="preview-comment_comment-link__VefXX dark-link-color">
                    Inspect
                  </span>
                  )
                </td>
                <td className=" border-[#ddd] border-[1px] dark-border-color text-xs font-normal p-1.5"></td>
                <td className=" border-[#ddd] border-[1px] dark-border-color text-xs font-normal dark-table-title p-1.5">
                  Oct 25, 2022 at 12:39 PM
                </td>
              </tr>
              <tr className=" border-[#ddd] border-[1px] dark-border-color">
                <th
                  className=" border-[#ddd] border-[1px] dark-border-color text-xs dark-table-title font-medium p-1.5"
                  scope="row"
                >
                  <b>admin</b>
                </th>
                <td className=" border-[#ddd] border-[1px] dark-border-color text-xs font-normal p-1.5">
                  ✅ Ready (
                  <span className="preview-comment_comment-link__VefXX dark-link-color">
                    Inspect
                  </span>
                  )
                </td>
                <td className=" border-[#ddd] border-[1px] dark-border-color text-xs font-normal p-1.5">
                  <span className="preview-comment_comment-link__VefXX dark-link-color">
                    Visit Preview
                  </span>
                </td>
                <td className=" border-[#ddd] border-[1px] dark-border-color dark-table-title text-xs font-normal p-1.5">
                  Oct 25, 2022 at 12:41 PM
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="outer_preview_message grid grid-cols-9 gap-0 mt-[-13px] items-end ">
          <div className="preview_messages_content px- w-[94%] col-span-8  text-white mb-3 ml-[30px] ">
            <div className="message-blue-box relative">
              <p className="font-medium rounded-2xl py-2 px-4 bg-[#0070f3] mb-5">
                Here’s my deploy preview for the page update:
                https://site-git-commerce.ver cel.app
              </p>
              <div className="previous_message_tail absolute text-[#2196f3] right-[10px] bottom-[0]">
                <svg
                  aria-hidden="true"
                  className="text-[#2196f3] preview-messages_tail__VQQVJ decoration-[#0070f3] absolute right-[-10px] bottom-[-1px] z-[-1]"
                  fill="none"
                  height="20"
                  viewBox="0 0 20 20"
                  width="20"
                >
                  <path
                    d="M10 0H0V5C0 13.2842 6.71582 20 15 20H20C14.4771 20 10 15.5229 10 10V0Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
            <p className="text-[13px] text-black text-right">
              Rauno —
              <span className="text-[#666]"> Design Engineering Team</span>
            </p>
          </div>
          <div className="preview_comment_name flex items-center justify-end col-span-1">
            <img
              className="ml-3"
              src="https://vercel.com/_next/image?url=%2Fstatic%2Fhome%2Favatar-rauno.png&amp;w=48&amp;q=100&amp;dpl=dpl_HDoqfPVmxXxTpdKfeV1sLsy7enfg"
            ></img>
          </div>
        </div>
      </div>

      <div className="center_path_lines relative w-[10%] flex justify-center">
        <div className="div_circle2 border-2 rounded-full w-3 h-3 border-[#666] mx-auto absolute top-[54px] left-0 right-0 "></div>
        <div className="div_center_lines border border-dashed  border-[#666] w-px m-auto absolute h-[430px] top-[68px]"></div>
      </div>

      <div className="develop_demo_benefits_item branch_section pb-0 pt-24 w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-[45%] px-8">
        <div className="line_path hidden">
          <div className="div_gradient w-px flex  bg-gradient-to-b from-[#fff] to-[rgb(102,102,102)] h-28  "></div>
          <div className="div_circle border-2 rounded-full w-3 h-3 border-[#666] mx-auto absolute left-[-6px] "></div>
        </div>
        <div className="svgtransparent icon_demo_benefits?_item bg-[#fafafa] border-[1px] rounded-md w-10 h-10 justify-center flex items-center">
          <svg
            className=" stroke-[#666] with-icon_icon__MHUeb"
            data-testid="geist-icon"
            fill="none"
            height="24"
            shape-rendering="geometricPrecision"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
            <path d="M15 3h6v6"></path>
            <path d="M10 14L21 3"></path>
          </svg>
        </div>
        <h5 className="text-black text-[22px] font-semibold mt-2 darktext">
          Automatic Previews for every branch
        </h5>
        <p className="text-[#666] leading-7 font-normal text-[15px] dark-text-color">
          Each new branch receives a live, production-like URL that everyone on
          your team can visit.
        </p>
      </div>
    </div>
  );
};
export default page;
