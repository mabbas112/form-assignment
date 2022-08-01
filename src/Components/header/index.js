import { Fragment } from "react";
import Logo from "./Logo";

const Header = () => {
  return (
    <Fragment>
      <header className="bg-white shadow-sm fixed z-20 lg:overflow-y-visible w-full top-0">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-20">
          <div className="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">
            <div className="flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2">
              <Logo />
              <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6 xl:ml-20">
                <div className="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
                  <div className="w-full">
                    <span>&nbsp;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:hidden" id="mobile-menu">
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="mt-3 space-y-1">
              <a
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 text-left"
                href="/settings"
              >
                Settings
              </a>
              <a
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 text-left"
                href="/login"
              >
                Sign out
              </a>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};
export default Header;
