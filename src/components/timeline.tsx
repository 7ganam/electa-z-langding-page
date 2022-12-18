import { useEffect, useRef, useState } from 'react';
import { useScroll } from 'framer-motion';

import Image from 'next/image';
import analysisGif from '@/../public/images/analysis.gif';
import styles from './timeline.module.css';

import Spline from '@splinetool/react-spline';

export const Timeline: React.FC = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  });

  const [pulseNumber, setPulseNumber] = useState(0);
  useEffect(() => {
    scrollY.onChange((y: number) => {
      let lineHeight = y - 300;
      let displayedLineHeight = lineHeight;
      if (lineHeight <= 0) {
        setPulseNumber(0);
      } else if (lineHeight > 350 && lineHeight < 450) {
        // scroll.scrollMore(400 - lineHeight, { duration: 100, smooth: false });
        displayedLineHeight = displayedLineHeight + 400 - lineHeight;
        setPulseNumber(1);
      } else if (lineHeight > 850 && lineHeight < 950) {
        // scroll.scrollMore(900 - lineHeight, { duration: 100, smooth: false });
        displayedLineHeight = displayedLineHeight + 900 - lineHeight;

        setPulseNumber(2);
      } else if (lineHeight > 1350 && lineHeight < 1450) {
        // scroll.scrollMore(1400 - lineHeight, { duration: 100, smooth: false });
        displayedLineHeight = displayedLineHeight + 1400 - lineHeight;

        setPulseNumber(3);
      } else if (lineHeight > 1850 && lineHeight < 1950) {
        // scroll.scrollMore(1900 - lineHeight, { duration: 100, smooth: false });
        displayedLineHeight = displayedLineHeight + 1900 - lineHeight;

        setPulseNumber(4);
      } else if (lineHeight > 1900) {
        setPulseNumber(4);
      } else {
        setPulseNumber(-1);
      }

      setHeight1(Math.min(1900, displayedLineHeight));
    });
  }, [scrollY]);

  const [height1, setHeight1] = useState(0);

  return (
    <>
      <div className="container m-auto md:mt-[-150px]">
        <div className="grid grid-cols-11 gap-0">
          <div className="col-span-11 flex items-center justify-center md:col-span-5 "></div>
          <div className="relative col-span-1 hidden flex-col items-center justify-center md:flex  ">
            <div className="absolute top-[0px]">
              <div
                className={`${
                  styles[
                    pulseNumber === 0
                      ? 'pulsating-circle'
                      : 'non-pulsating-circle'
                  ]
                } z-20`}
              ></div>
            </div>
            <div ref={ref} className="h-[150px] w-2 bg-slate-200"></div>
            <div
              style={{ top: 0, zIndex: '10', height: height1 + 'px' }}
              className="absolute  w-2 bg-brand"
            ></div>
          </div>
          <div className="col-span-11 md:col-span-5 "></div>
        </div>

        <TimeLineRow
          pulsNodePosition={'250px'}
          block={
            <div className="h-[300px] w-[400px] ">
              <Spline
                style={{
                  width: '100%',
                  height: '100%',
                  maxWidth: '100%',
                  maxHeight: '100%',
                }}
                scene="https://prod.spline.design/r6myDU-pTNMu5JTQ/scene.splinecode"
              />
            </div>
          }
          direction="left"
          title="system analysis"
          content="Analysing your system to determin how to integrate it into a
                bigger system. analysis examins system’s inputs outputs and
                requirments of the new integrated system"
          pulsing={pulseNumber === 1}
          length={500}
        ></TimeLineRow>

        <TimeLineRow
          pulsNodePosition={'250px'}
          block={
            <div className="h-[300px] w-[400px] ">
              <Spline
                style={{
                  width: '100%',
                  height: '100%',
                  maxWidth: '100%',
                  maxHeight: '100%',
                }}
                scene="https://prod.spline.design/8mdDLCi8mX06Osvc/scene.splinecode"
              />
            </div>
          }
          direction="right"
          title="system analysis"
          content="Analysing your system to determin how to integrate it into a
                bigger system. analysis examins system’s inputs outputs and
                requirments of the new integrated system"
          pulsing={pulseNumber === 2}
          length={500}
        ></TimeLineRow>

        <TimeLineRow
          pulsNodePosition={'250px'}
          block={
            <div className="h-[400px] w-[400px] ">
              <Spline
                style={{
                  width: '100%',
                  height: '100%',
                  maxWidth: '100%',
                  maxHeight: '100%',
                }}
                scene="https://prod.spline.design/WejWCoW44YKC4M8K/scene.splinecode"
              />
            </div>
          }
          direction="left"
          title="system analysis"
          content="Analysing your system to determin how to integrate it into a
                bigger system. analysis examins system’s inputs outputs and
                requirments of the new integrated system"
          pulsing={pulseNumber === 3}
          length={500}
        ></TimeLineRow>

        <TimeLineRow
          pulsNodePosition={'250px'}
          block={
            <div className="h-[300px] w-[300px] ">
              <Spline
                style={{
                  width: '100%',
                  height: '100%',
                  maxWidth: '100%',
                  maxHeight: '100%',
                }}
                scene="https://prod.spline.design/Zd-ehJuqBnfXzV86/scene.splinecode"
              />
            </div>
          }
          direction="right"
          title="system analysis"
          content="Analysing your system to determin how to integrate it into a
                bigger system. analysis examins system’s inputs outputs and
                requirments of the new integrated system"
          pulsing={pulseNumber === 4}
          length={250}
        ></TimeLineRow>
      </div>
      <div className="mb-[1000px]"></div>
    </>
  );
};

interface TimeLineRowProps {
  block?: React.ReactNode;
  title?: string;
  content?: string;
  length: number;
  direction?: 'left' | 'right';
  pulsing: boolean;
  pulsNodePosition: string;
}

const TimeLineRow: React.FC<TimeLineRowProps> = ({
  block,
  title,
  content,
  length,
  direction,
  pulsing,
  pulsNodePosition,
}) => {
  return (
    <div className="grid grid-cols-11 gap-0">
      <div
        className={`${
          direction === 'left' ? 'md:order-1 ' : 'md:order-3 '
        }col-span-11 md:col-span-5 `}
      >
        <div className="flex h-full w-full flex-col items-center justify-center p-10 text-center md:px-20 md:py-0 md:text-left">
          <div className="w-full font-noto text-5xl font-bold text-gray-800">
            {title}
          </div>
          <div className="mt-3 font-play text-2xl text-slate-500 md:text-3xl">
            {content}
          </div>
        </div>
      </div>
      <div className="relative order-2 col-span-1  hidden flex-col items-center justify-start md:flex ">
        <div style={{ top: pulsNodePosition }} className="absolute ">
          <div
            className={`${
              styles[pulsing ? 'pulsating-circle' : 'non-pulsating-circle']
            } z-20`}
          ></div>
        </div>
        <div
          style={{ height: length + 'px' }}
          className="w-2 bg-slate-200"
        ></div>
      </div>
      <div
        className={`${
          direction === 'left' ? 'md:order-3 ' : 'md:order-1 '
        }  col-span-11 flex  items-center justify-center  md:col-span-5`}
      >
        {block}
      </div>
    </div>
  );
};

export default Timeline;
