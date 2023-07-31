import CloneVitee from '@/utils/SvgIcons/CommonSvg/clonevitee';
import CloneNuxt from '@/utils/SvgIcons/CommonSvg/clonenuxt';
import ClonesVelet from '@/utils/SvgIcons/CommonSvg/clonesvelet';
import CloneNext from '@/utils/SvgIcons/CommonSvg/CloneNext';
import GitHub2 from '@/utils/SvgIcons/CommonSvg/GitHub2';
import GitLab from '@/utils/SvgIcons/GitLab';
import BitBucket from '@/utils/SvgIcons/CommonSvg/BitBucket';

const VercelJourney = () => {
  return (
    <div className="begin_your_journey py-[60px]">
      <div className="container">
        <div className="get_started_title">
          <h6 className="text-center uppercase text-xs tracking-[0.2rem] text-grey font-bold dark-text-color my-12">
            Begin Your Vercel Journey
          </h6>
        </div>
        <div className="get_started_wrapper flex justify-center gap-x-12">
          <div className="Import_Git_Repository dark_bordered border-[1px] border-[#eaeaea] shadow-[0_8px_30px_rgba(0,0,0,0.12)] rounded-s-md  p-8 w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-[50%] border_class">
            <h5 className="text-2xl tracking-[-0.02rem] text-[#171717] mb-4 font-semibold darktext">
              Import Git Repository
            </h5>
            <div className="Import_content border-[1px] dark_bordered border-[#eaeaea] text-center bg-[#fafafa] rounded-md p-12 darkbackground border_class">
              <p className="text-sm text-[#444] font-normal my-8 darktext">
                Select a Git provider to import an existing project from a Git
                Repository.
              </p>
              <div className="get_started_button_information px-2.5 mb-8 flex flex-col gap-y-2">
                <button className="github_btn bg-[#24292e] py-2 rounded-md flex justify-center">
                  <span className='button_icon mx-2'>
                    < GitHub2 />
                  </span>
                  <span className="button_content text-sm text-[#fff]">
                    <span className='text_hide'>Continue with</span> GitHub
                  </span>
                </button>

                <button className="gitlab_btn bg-[#6b4fbb] py-2 rounded-md flex justify-center">
                  <span className="button_icon mx-2">
                    < GitLab />
                  </span>
                  <span className="button_content text-sm text-[#fff]">
                    <span className='text_hide'>Continue with</span> GitLab
                  </span>
                </button>

                <button className="bitbucket_btn bg-[#0052CC] py-2 rounded-md flex justify-center">
                  <span className="button_icon mx-2">
                    <BitBucket />
                  </span>
                  <span className="button_content text-sm text-[#fff]">
                    <span className='text_hide'>  Continue with</span> Bitbucket
                  </span>
                </button>
              </div>
            </div>
            <div className="Import_link mt-6">
              <a href="#" className="text-sm text-[#444444]">
                Import Third-Party Git Repository →
              </a>
            </div>
          </div>
          <div className="clone_template border-[1px] border-[#eaeaea] rounded-md p-6 w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-[48%] border_none darkbackground">
            <h5 className="text-2xl tracking-[-0.02rem] text-[#171717] font-semibold darktext"> 
              Clone Template
            </h5>
            <p className="clone_content text-sm text-[#666] dark-text-color font-normal leading-relaxed mt-2 mb-3">
              Alternatively, get started with a template
            </p>
            <div className="clone_framework_cards grid grid-cols-2">
              <div className="framework_inner_card p-2">
                <a className="shadow-[0_5px_10px_rgba(0,0,0,0.12)] block rounded-[5px]">
                  <img src="https://vercel.com/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1673027027%2Ffront%2Fimport%2Fnextjs.png&w=1920&q=75&dpl=dpl_DPTJaywTzXZVoJSTMEDpgaG93rts"></img>
                  {/* loneNextjs */}
                  <div className="content_cards_logo flex p-3 gap-x-2 align-middle">
                    <span className="logo_card">
                      <CloneNext />
                    </span>
                    <span className="text-sm font-semibold tracking-[-0.005]">
                      Next.js
                    </span>
                  </div>
                </a>
              </div>

              <div className="framework_inner_card p-2">
                <a className="shadow-[0_5px_10px_rgba(0,0,0,0.12)] block rounded-[5px]">
                  <img src="https://vercel.com/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1647366075%2Ffront%2Fimport%2Fsveltekit.png&w=1920&q=75&dpl=dpl_DPTJaywTzXZVoJSTMEDpgaG93rts"></img>

                  {/* Clonesveletkitjs*/}
                  <div className="content_cards_logo flex p-3  gap-x-2 align-middle">
                    <span className="logo_card">
                      <ClonesVelet />
                    </span>
                    <span className="text-sm font-semibold tracking-[-0.005]">
                      SvelteKit
                    </span>
                  </div>
                </a>
              </div>
              <div className="framework_inner_card p-2">
                <a className="shadow-[0_5px_10px_rgba(0,0,0,0.12)] block rounded-[5px]">
                  <img src="https://vercel.com/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1647366075%2Ffront%2Fimport%2Fnuxtjs.png&w=1920&q=75&dpl=dpl_DPTJaywTzXZVoJSTMEDpgaG93rts"></img>

                  {/* Clonenuxtjs*/}
                  <div className="content_cards_ logo flex p-3 gap-x-2 align-middle">
                    <span className="logo_card">
                      <CloneNuxt />
                    </span>
                    <span className="text-sm font-semibold tracking-[-0.005]">
                      Nuxt.js
                    </span>
                  </div>
                </a>
              </div>

              <div className="framework_inner_card p-2 gap-x-2 align-middle">
                <a className="shadow-[0_5px_10px_rgba(0,0,0,0.12)] block rounded-[5px] vite_img">
                  <img
                    src="https://vercel.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2F2T4BUF3mEBKPJF3jcjU6nS%2F0d4a02e7c48091d13814a4ab513e8734%2FScreen_Shot_2022-04-13_at_10.05.56_PM.png&w=1920&q=75&dpl=dpl_DPTJaywTzXZVoJSTMEDpgaG93rts"
                    className="h-[133px]"
                  ></img>
                  {/* Clonevitejs*/}
                  <div className="content_cards_logo flex p-3  gap-x-2 align-middle">
                    <span className="logo_card">
                      <CloneVitee />
                    </span>
                    <span className="text-sm font-semibold tracking-[-0.005]">
                      Vite
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div className="clone_link mt-6">
              <a href="#" className="text-sm text-[#444444] dark-text-color">
                Browse All Templates →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VercelJourney;
