import { useRef } from 'react';
import bg from '@/../public/images/grid.png';
import bg2 from '@/../public/images/bg.png';
import Spline from '@splinetool/react-spline';

export const PageHeader: React.FC = () => {
  const splineRef = useRef();

  //@ts-ignore
  function onLoad(spline) {
    splineRef.current = spline;

    if (typeof window !== 'undefined') {
      if (window.innerWidth < 1130) {
        spline.setZoom(0.5);
      }
    }
  }

  return (
    <div className="relative h-[700px] w-full md:h-[900px]">
      <div
        className="absolute h-full w-full"
        style={{ backgroundImage: `url(${bg2.src})`, zIndex: '-20' }}
      ></div>
      <div
        className="absolute h-full w-full opacity-5"
        style={{ backgroundImage: `url(${bg.src})`, zIndex: '-10' }}
      ></div>
      <div className=" grid grid-cols-12 gap-0 md:h-full">
        <div className="... col-span-12 md:col-span-7 md:h-full">
          <div className="mt-32  px-10  md:mt-80 md:w-[700px] md:max-w-full md:pr-0 lg:ml-10">
            <div
              style={{ fontFamily: 'Noto Sans' }}
              className="text-2xl font-bold text-brand"
            >
              Empowering smart solutions
            </div>
            <div
              style={{ fontFamily: 'Play' }}
              className="text-3xl font-bold md:text-5xl lg:text-7xl"
            >
              Building systems the smart way
            </div>
            <div style={{ fontFamily: 'Play' }} className="text:lg md:text-xl">
              connect your existing system to the grid, Control and monitor
              events remotly, have bigger vison of your data and optimize your
              costs.
            </div>
          </div>
        </div>
        <div className="... col-span-12 flex   items-center justify-center md:col-span-5 md:h-full ">
          <div className="h-32 w-32 md:h-[400px] md:w-[400px] lg:h-[600px] lg:w-[600px]">
            <Spline
              style={{
                width: '100%',
                height: '100%',
                maxWidth: '100%',
                maxHeight: '100%',
              }}
              scene="https://prod.spline.design/0rXwsOVfGLFYJSgC/scene.splinecode"
              onLoad={onLoad}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
