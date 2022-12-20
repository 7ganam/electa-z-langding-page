import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

export const ContactUs: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: { [key: string]: string }) => {
    var encoded = Object.keys(data)
      .map(function (k: string) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]);
      })
      .join('&');
    console.log({ encoded });
    setFormState('loading');
    let response = await fetch(
      'https://script.google.com/macros/s/AKfycbxD42mX2CBI7IW4KGFS0S3TuASetn9deKpuNvtT5bPUUIdK4me483N4HhdtklAb-qY/exec',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: encoded, // body data type must match "Content-Type" header
      }
    );
    let result = await response.json();
    setFormState('done');
    console.log(result);
  };

  const [formState, setFormState] = useState<'idle' | 'loading' | 'done'>(
    'idle'
  );

  const displayButton = () => {
    if (formState === 'idle') {
      return (
        <button
          type="submit"
          className="focus:shadow-outline w-full rounded-lg bg-brand-dark p-3 text-sm font-bold uppercase tracking-wide text-gray-100 focus:outline-none"
        >
          Send Message
        </button>
      );
    } else if (formState === 'loading') {
      return (
        <button
          disabled
          type="button"
          className="mr-2 inline-flex w-full items-center rounded-lg border border-gray-200 bg-white py-2.5 px-5 text-sm font-medium   text-gray-900 focus:z-10"
        >
          <svg
            role="status"
            className="mr-2 inline h-4 w-4 animate-spin text-gray-200 dark:text-gray-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="#1C64F2"
            />
          </svg>
          Loading...
        </button>
      );
    } else {
      return (
        <div className="mt-8">
          <div
            className="mb-4 rounded-lg bg-green-100 p-4 text-sm text-green-700 dark:bg-green-200 dark:text-green-800"
            role="alert"
          >
            <span className="font-medium">Thank you for contacting us!</span> We
            will come back to you soon.
          </div>
        </div>
      );
    }
  };

  return (
    <div id="contact" className=" mt-[100px] flex w-full flex-col items-center">
      <div className="w-full text-center"></div>
      <div className="mx-auto mt-24 grid max-w-screen-xl grid-cols-1 gap-8 rounded-lg bg-gray-100 px-8 py-16 text-gray-900 shadow-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
              Contact us
            </h2>
            <div className="mt-8 text-gray-700">
              we reply in less than 2 working days.
            </div>
          </div>
          <div className="mt-8 text-center"></div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="gform pure-form pure-form-stacked"
          method="POST"
          //   data-email="example@email.net"
          //   action="https://script.google.com/macros/s/AKfycbxD42mX2CBI7IW4KGFS0S3TuASetn9deKpuNvtT5bPUUIdK4me483N4HhdtklAb-qY/exec"
        >
          <div>
            <span className="text-sm font-bold uppercase text-gray-600">
              Full Name
            </span>
            <input
              {...register('name', { required: true })}
              id="name"
              name="name"
              className="focus:shadow-outline mt-2 w-full rounded-lg bg-gray-300 p-3 text-gray-900 focus:outline-none"
              type="text"
              placeholder=""
            />
          </div>
          <div className="mt-8">
            <span className="text-sm font-bold uppercase text-gray-600">
              Email
            </span>
            <input
              {...register('email', { required: true })}
              id="email"
              name="email"
              type="email"
              className="focus:shadow-outline mt-2 w-full rounded-lg bg-gray-300 p-3 text-gray-900 focus:outline-none"
            />
          </div>
          <div className="mt-8">
            <span className="text-sm font-bold uppercase text-gray-600">
              Message
            </span>
            <textarea
              {...register('message', { required: true })}
              id="message"
              name="message"
              className="focus:shadow-outline mt-2 h-32 w-full rounded-lg bg-gray-300 p-3 text-gray-900 focus:outline-none"
            ></textarea>

            <div className="mt-5"> {displayButton()}</div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
