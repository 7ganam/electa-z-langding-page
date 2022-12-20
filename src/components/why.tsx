import { useRef } from 'react';
import bg from '@/../public/images/grid.png';
import bg2 from '@/../public/images/bg.png';
import Spline from '@splinetool/react-spline';

export const Why: React.FC = () => {
  const splineRef = useRef();

  //@ts-ignore
  function onLoad(spline) {
    splineRef.current = spline;

    // if (typeof window !== 'undefined') {
    //   if (window.innerWidth < 1130) {
    //     spline.setZoom(0.5);
    //   }
    // }
  }

  return (
    <div className=" mt-[100px] flex w-full flex-col items-center">
      {/* <div
        className="absolute h-full w-full  bg-no-repeat"
        style={{ backgroundImage: `url(${bg2.src})`, zIndex: '-20' }}
      ></div> */}
      {/* <div
        className="absolute h-full w-full opacity-5"
        style={{ backgroundImage: `url(${bg.src})`, zIndex: '-10' }}
      ></div> */}

      <div id="why" className="m-auto text-2xl font-bold text-brand">
        Why?
      </div>
      <div className="m-auto mt-2 max-w-[400px] text-center text-3xl font-bold text-black ">
        Reasons to upgrade your system
      </div>
      <div className="mt-10 grid w-full max-w-[90vw] grid-cols-12 gap-5 md:w-[900px]">
        <div className="col-span-12  md:col-span-4">
          <div className="h-[180px] w-full rounded-3xl shadow-2xl drop-shadow-2xl"></div>
        </div>
        <div className="col-span-12  md:col-span-4">
          {' '}
          <div className="h-[180px] w-full rounded-3xl shadow-2xl drop-shadow-2xl"></div>
        </div>
        <div className="col-span-12  md:col-span-4">
          {' '}
          <div className="h-[180px] w-full rounded-3xl shadow-2xl drop-shadow-2xl"></div>
        </div>
        <div className="col-span-12  md:col-span-4">
          <div className="h-[180px] w-full rounded-3xl shadow-2xl drop-shadow-2xl"></div>
        </div>
        <div className="col-span-12  md:col-span-4">
          {' '}
          <div className="h-[180px] w-full rounded-3xl shadow-2xl drop-shadow-2xl"></div>
        </div>
        <div className="col-span-12  md:col-span-4">
          {' '}
          <div className="h-[180px] w-full rounded-3xl shadow-2xl drop-shadow-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Why;
