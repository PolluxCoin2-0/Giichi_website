import Script from 'next/script';
import { PiPhoneCallFill } from 'react-icons/pi';

export default function CalendlyButton() {
  function handleClick() {
    // @ts-ignore
    window.Calendly.initPopupWidget({
      url: 'https://calendly.com/priyanshu_pollux/30min',
    });
    return false;
  }

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        type="text/javascript"
        async
      />
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />

      <button onClick={handleClick} className='text-white'>
      <p className=" text-white text-sm lg:text-lg font-semibold text-nowrap">
              Talk to Blockchain Expert
            </p>
           
      </button>
    </>
  );
}