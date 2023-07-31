const page = () => {
  return (
    <div className="preview-item_wrapper flex pb-40 ">
      <div className="outer_window  w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-[45%] relative mr-1.5 mt-1.5">
        <div className="window_screen _darkdash shadow-[0_8px_30px_rgba(0,0,0,.12)] border-[#eaeaea] h-44  ">
          <div className="window_top_bar border_class flex items-center relative border-b-[1px] p-1.5 ">
            <div className="window_traffic flex p-1 ">
              <span className="bg-[#ff5f56] w-3 h-3 rounded-full"></span>
              <span className="bg-[#ffbd2e] w-3 h-3 rounded-full ml-2"></span>
              <span className="bg-[#27c93f] w-3 h-3 rounded-full ml-2 mr-2"></span>
            </div>
            <div className="window_with_tabs ">
              <span className="__className_20951f color-[#666] text-xs font-light p-1.5 border-r-[1px] border-l-[1px] absolute bottom-[0px] bg-[#fff] ">
                bash
              </span>
            </div>
          </div>
          <div className="window_body flex items-baseline pt-0.5 px-1 ">
            <div className="editor_editor_main pl-1 flex">
              <p className="text-[#666]">
                ▲ ~ e-commerce-site/{" "}
                <span className="text-black pl-0.5 dark-white-color">git push</span>
              </p>
              <span className="Previews_push_cursor bg-[#ff0080] w-2.5 h-5 ml-0.5 translate-y-1.5"></span>
            </div>
          </div>
        </div>
        <div className="previus_push_comment dark_content_color">
          <hr className="w-0.5 h-5 bg-[#eaeaea] ml-4 mt-1 mb-1" />
          <div className="stack_stack flex items-center">
            <div className="darksvg rocket_icon bg-[#eaeaea] w-8 h-8 rounded-full flex justify-center items-center">
              <svg fill="none" height="16" viewBox="0 0 16 16" width="16">
                <path
                  clip-rule="evenodd"
                  d="M14.0639 0C11.7433 9.77766e-05 9.51774 0.922034 7.87687 2.563L7.41787 3.021C7.10387 3.335 6.80187 3.662 6.51387 4H3.30987C3.01105 4.00009 2.71724 4.07669 2.45641 4.2225C2.19559 4.36832 1.97645 4.57849 1.81987 4.833L0.109868 7.607C0.0498417 7.7045 0.0129353 7.81445 0.00197776 7.92842C-0.0089798 8.04239 0.00630235 8.15736 0.0466529 8.26451C0.0870034 8.37166 0.151351 8.46815 0.234764 8.54658C0.318176 8.62502 0.418439 8.68331 0.527868 8.717L3.62987 9.671C3.66687 9.722 3.70887 9.771 3.75387 9.816L6.18287 12.244C6.22887 12.29 6.27687 12.332 6.32787 12.369L7.28187 15.471C7.31556 15.5804 7.37385 15.6807 7.45228 15.7641C7.53072 15.8475 7.62721 15.9119 7.73436 15.9522C7.84151 15.9926 7.95648 16.0078 8.07045 15.9969C8.18442 15.9859 8.29437 15.949 8.39187 15.889L11.1659 14.182C11.4204 14.0254 11.6305 13.8063 11.7764 13.5455C11.9222 13.2846 11.9988 12.9908 11.9989 12.692V9.485C12.3369 9.197 12.6639 8.895 12.9779 8.581L13.4359 8.122C15.077 6.48154 15.9992 4.2564 15.9999 1.936V1.75C15.9999 1.28587 15.8155 0.840752 15.4873 0.512563C15.1591 0.184374 14.714 0 14.2499 0H14.0639ZM10.4999 10.625C10.4119 10.685 10.3229 10.743 10.2339 10.8L7.88387 12.321L8.43187 14.104L10.3809 12.904C10.4172 12.8816 10.4473 12.8503 10.4681 12.813C10.4889 12.7757 10.4999 12.7337 10.4999 12.691V10.625ZM3.67787 8.116L5.19987 5.766C5.25787 5.676 5.31687 5.588 5.37587 5.5H3.30887C3.26616 5.49999 3.22415 5.51092 3.18687 5.53175C3.14958 5.55258 3.11825 5.58262 3.09587 5.619L1.89587 7.569L3.67787 8.116ZM8.93787 3.623C10.2972 2.26391 12.1406 1.50028 14.0629 1.5H14.2489C14.3152 1.5 14.3788 1.52634 14.4256 1.57322C14.4725 1.62011 14.4989 1.6837 14.4989 1.75V1.936C14.499 2.88813 14.3116 3.83096 13.9473 4.71066C13.583 5.59035 13.0491 6.38968 12.3759 7.063L11.9169 7.521C11.1575 8.28068 10.3199 8.95779 9.41787 9.541L7.10087 11.041L4.95787 8.898L6.45787 6.581C7.04126 5.67884 7.71835 4.84085 8.47787 4.081L8.93587 3.623H8.93787ZM11.9999 5C11.9999 5.26522 11.8945 5.51957 11.707 5.70711C11.5194 5.89464 11.2651 6 10.9999 6C10.7347 6 10.4803 5.89464 10.2928 5.70711C10.1052 5.51957 9.99987 5.26522 9.99987 5C9.99987 4.73478 10.1052 4.48043 10.2928 4.29289C10.4803 4.10536 10.7347 4 10.9999 4C11.2651 4 11.5194 4.10536 11.707 4.29289C11.8945 4.48043 11.9999 4.73478 11.9999 5ZM3.55987 14.56C3.70724 14.4227 3.82545 14.2571 3.90743 14.0731C3.98941 13.8891 4.0335 13.6905 4.03705 13.489C4.0406 13.2876 4.00356 13.0876 3.92811 12.9008C3.85267 12.714 3.74038 12.5444 3.59794 12.4019C3.45551 12.2595 3.28584 12.1472 3.09906 12.0718C2.91229 11.9963 2.71223 11.9593 2.51082 11.9628C2.30942 11.9664 2.11079 12.0105 1.92679 12.0924C1.74279 12.1744 1.57719 12.2926 1.43987 12.44C0.705868 13.17 0.392868 14.772 0.289868 15.443C0.283778 15.4792 0.286425 15.5163 0.297588 15.5512C0.308751 15.5861 0.328107 15.6179 0.35404 15.6438C0.379974 15.6698 0.411733 15.6891 0.446668 15.7003C0.481603 15.7114 0.518702 15.7141 0.554868 15.708C1.22587 15.605 2.82787 15.292 3.55987 14.56Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="vercel_icon w-6 h-6 bg-black flex items-center justify-center rounded-md ml-1.5 mr-1">
              <svg
                className="text-[#fff]"
                fill="none"
                height="11"
                viewBox="0 0 13 11"
                width="13"
              >
                <path
                  d="M6.35078 0L12.7016 11H0L6.35078 0Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <p className="text-[#666] text-[13px] dark_content_color">
              <span className="text-black text-sm pl-0.5 ml-0.5 darktext">
                verce
              </span>{" "}
              <span className="border-[#666] border dark_content_color  text-xs font-medium px-2.5 py-0.5 rounded-2xl :hover border-[#222]">
                bot
              </span>{" "}
              deployed to <span className="font-medium">Preview</span>
              <span className="text_hide"> just now</span>
            </p>
          </div>
        </div>
      </div>
      <div className="center_path_lines relative l-[4px] w-[10%] flex justify-center ">
        <div className="div_gradient w-px flex  bg-gradient-to-b from-[#fff] to-[rgb(102,102,102)] h-28 absolute top-[-18px]  "></div>
        <div className="div_circle3 border-2 rounded-full w-3 h-3 border-[#666] mx-auto absolute left-0 right-0 top-[96px] "></div>
        <div className="div_center_lines border border-dashed absolute h-[340px] border-[#666] w-px m-auto top-[112px]"></div>
      </div>
      <div className="develop_demo_benefits_item push_section pb-0 pt-24 w-full sm:w-full md:w-full lg:w-1/2 xl:w-[45%] px-8 ">
        <div className="line_path hidden">
          <div className="div_gradient w-px flex  bg-gradient-to-b from-[#fff] to-[rgb(102,102,102)] h-28  "></div>
          <div className="div_circle border-2 rounded-full w-3 h-3 border-[#666] mx-auto absolute left-[-5px] "></div>
        </div>
        <div className="svgtransparent icon_demo_benefits?_item bg-[#fafafa] border-[1px] rounded-md w-10 h-10 justify-center flex items-center">
          <svg
            className=" with-icon_icon__MHUeb stroke-[#666]"
            data-testid="geist-icon"
            fill="#fff"
            height="24"
            shape-rendering="geometricPrecision"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8"></path>
            <path d="M16 6l-4-4-4 4"></path>
            <path d="M12 2v13"></path>
          </svg>
        </div>
        <h5 className="text-black text-[22px] font-semibold mt-2 darktext">
          Push to deploy
        </h5>
        <p className="text-[#666] leading-7 font-normal text-[15px] dark-text-color">
          Every deploy automatically generates a shareable live preview site
          that stays up-to-date with your changes.
        </p>
      </div>
    </div>
  );
};
export default page;
