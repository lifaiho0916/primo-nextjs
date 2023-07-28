import { Button } from '@/components/ui/button';
import ReactLogo from '@/utils/SvgIcons/CommonSvg/ReactLogo';
import Svelete from '@/utils/SvgIcons/CommonSvg/Svelete';
import NuxtJs from '@/utils/SvgIcons/CommonSvg/NuxtJs';
import VueJs from '@/utils/SvgIcons/CommonSvg/VueJs';
import EmberLogo from '@/utils/SvgIcons/CommonSvg/EmberLogo';
import Angular from '@/utils/SvgIcons/CommonSvg/Angular';
import HugoLogo from '@/utils/SvgIcons/CommonSvg/HugoLogo';
import GatsbyLogo from '@/utils/SvgIcons/CommonSvg/GatsbyLogo';
import NextJs from '@/utils/SvgIcons/CommonSvg/NextJs';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip';

const WorksFrameworks = () => {
  return (
    <div>
      <div className="works_frameworks mb-16">
        <h2 className="mb-6  lg:mb-6 text-3xl font-extrabold  leading-tight text-center  text-xs tracking-[0.2rem] font-light uppercase text-grey font-semibold ">
          WORKS WITH 30+ FRAMEWORKS
        </h2>
        <div className="logos_framework flex items-center justify-center flex-wrap">
          <TooltipProvider>
            <Tooltip>
              <div className="next_logo  m-3">
                <TooltipTrigger asChild>
                  <Button variant="outline">
                    <NextJs />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Next.js</p>
                </TooltipContent>
              </div>
            </Tooltip>
            <Tooltip>
              <div className="react_logo m-3">
                <TooltipTrigger asChild>
                  <Button variant="outline">
                    {" "}
                    <ReactLogo />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Create React App</p>
                </TooltipContent>
              </div>
            </Tooltip>
            <Tooltip>
              <div className="svelete_logo m-3">
                <TooltipTrigger asChild>
                  <Button variant="outline">
                    {" "}
                    <Svelete />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Svelete</p>
                </TooltipContent>
              </div>
            </Tooltip>
            <Tooltip>
              <div className="nuxt_logo m-3">
                <TooltipTrigger asChild>
                  <Button variant="outline">
                    {" "}
                    <NuxtJs />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Nuxt.js</p>
                </TooltipContent>
              </div>
            </Tooltip>
            <Tooltip>
              <div className="vuejs_logo m-3">
                <TooltipTrigger asChild>
                  <Button variant="outline">
                    <VueJs />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Vue.js</p>
                </TooltipContent>
              </div>
            </Tooltip>
            <Tooltip>
              <div className="ember_logo m-3">
                <TooltipTrigger asChild>
                  <Button variant="outline">
                    <EmberLogo />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Ember.js</p>
                </TooltipContent>
              </div>
            </Tooltip>
            <Tooltip>
              <div className="angular_logo m-3">
                <TooltipTrigger asChild>
                  <Button variant="outline">
                    <Angular />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Angular</p>
                </TooltipContent>
              </div>
            </Tooltip>
            <Tooltip>
              <div className="hugo_logo m-3">
                <TooltipTrigger asChild>
                  <Button variant="outline">
                    <HugoLogo />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Hugo</p>
                </TooltipContent>
              </div>
            </Tooltip>
            <Tooltip>
              <div className="gatsby_logo m-3">
                <TooltipTrigger asChild>
                  <Button variant="outline">
                    <GatsbyLogo />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Gatsby</p>
                </TooltipContent>
              </div>
            </Tooltip>
          </TooltipProvider>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};
export default WorksFrameworks;
