import bg from '@/../public/images/grid.png';
import servicesBg from '@/../public/images/services-bg2.png';
import Image from 'next/image';

export const Services: React.FC = () => {
  return (
    <div
      id="services"
      className="relative mt-[300px] h-[550px] w-full md:h-[600px]"
    >
      <div
        className="absolute h-full w-full bg-slate-400 opacity-10"
        style={{
          backgroundImage: `url(${servicesBg.src})`,
          backgroundRepeat: 'no-repeat',
          zIndex: '-20',
        }}
      ></div>
      <div
        className="absolute h-full w-full  opacity-5"
        style={{ backgroundImage: `url(${bg.src})`, zIndex: '-10' }}
      ></div>
      <div className="container relative m-auto flex h-full flex-wrap items-center justify-center gap-5 p-5">
        <div className=" flex h-[150px] items-center justify-center rounded-md bg-white drop-shadow-md md:absolute md:left-[30%] md:top-[-70px] md:h-[200px] md:w-[450px] md:max-w-[20%] ">
          <div className="flex flex-col p-5 text-center">
            <Image
              className=""
              src="/images/1.png"
              alt="Picture of the author"
              width={90}
              height={90}
            />
            <div className="font-play font-bold text-neutral-400">
              Automation
            </div>
          </div>
        </div>
        <div className=" flex h-[150px] items-center justify-center rounded-md bg-white drop-shadow-md md:absolute md:left-[5%] md:top-[70px] md:h-[300px] md:w-[250px] md:max-w-[20%]">
          <div className="flex flex-col p-5 text-center">
            <Image
              className=""
              src="/images/2.png"
              alt="Picture of the author"
              width={100}
              height={100}
            />
            <div className="font-play font-bold text-neutral-400">
              Monitoring
            </div>
          </div>
        </div>
        <div className=" flex h-[150px] items-center justify-center rounded-md bg-white drop-shadow-md md:absolute md:left-[55%] md:top-[150px] md:h-[250px] md:w-[280px] md:max-w-[20%]">
          <div className="flex flex-col p-5 text-center">
            <Image
              className=""
              src="/images/3.png"
              alt="Picture of the author"
              width={100}
              height={100}
            />
            <div className="font-play font-bold text-neutral-400">IOT</div>
          </div>
        </div>
        <div className=" flex h-[150px] items-center justify-center rounded-md bg-white drop-shadow-md md:absolute md:left-[80%] md:top-[50px] md:h-[200px] md:w-[200px] md:max-w-[20%]">
          <div className="flex flex-col p-5 text-center">
            <Image
              className=""
              src="/images/4.png"
              alt="Picture of the author"
              width={100}
              height={100}
            />
            <div className="font-play font-bold text-neutral-400">Cloud</div>
          </div>
        </div>
        <div className=" flex h-[150px] items-center justify-center rounded-md bg-white drop-shadow-md md:absolute md:left-[33%] md:top-[280px] md:h-[200px] md:w-[200px] md:max-w-[20%]">
          <div className="flex flex-col p-5 text-center">
            <Image
              className=""
              src="/images/5.png"
              alt="Picture of the author"
              width={100}
              height={100}
            />
            <div className="font-play font-bold text-neutral-400">Analysis</div>
          </div>
        </div>
        <div className="hidden items-center justify-center rounded-md bg-white drop-shadow-md md:absolute md:left-[85%] md:top-[350px] md:flex md:h-[80px] md:w-[80px] md:max-w-[20%]">
          <Image
            className=""
            src="/images/logo.png"
            alt="Picture of the author"
            width={50}
            height={50}
          />
        </div>
        <div className="hidden items-center justify-center rounded-md bg-white drop-shadow-md md:absolute md:left-[15%] md:top-[450px] md:flex md:h-[80px] md:w-[80px] md:max-w-[20%]">
          <Image
            className=""
            src="/images/logo.png"
            alt="Picture of the author"
            width={50}
            height={50}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
