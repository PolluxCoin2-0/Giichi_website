import React from "react";
import Button from "../../../src/app/components/Button";

const HomePage = () => {
  return (
    <div className="pb-52">
      {/* intro */}
      <div className="flex flex-col space-y-10 ">
        <p className="text-7xl font-bold leading-tight">
          Unleash the power of <br />
          WEB3 Industry with <br />
          professionals
        </p>
        <p className="text-lg font-medium">
          We are experienced professionals who understand that
          <br />
          technology is changing, and are true partners who care
          <br />
          about your success. Our team provides a consultative
          <br />
          approach on emerging technology.
        </p>
        <div className="flex flex-row space-x-16 ">
          <div>
            <Button buttonText="Our Services" />
          </div>
          <div>
            <Button buttonText="Calendly" />
          </div>
        </div>
      </div>

      {/* image */}
      <div></div>
    </div>
  );
};

export default HomePage;
