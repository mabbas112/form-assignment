import React, { Fragment } from "react";
import {LogoImage} from "../../assets/LogoImage";

const Logo = () => {
  return (
    <Fragment>
      <div className="flex-shrink-0 flex items-center">
        <a href="/">
          <img
            className="block lg:hidden h-8 w-auto"
            src={LogoImage}
            alt="Appointment App"
          />
          <img
            className="hidden lg:block h-8 w-auto"
            src={LogoImage}
            alt="Appointment App"
          />
        </a>
      </div>
    </Fragment>
  );
};
export default Logo;
