import { Icons } from "../Icons";

const Footer = () => {
  const pathname = "/sign-up";
  const pathToMinimize = ["/verify-email", "/sign-up", "/sign-in"];

  return (
    <footer className="bg-white flex-grow-0 animate-fade-in-down">
      <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
        <div className="border-t border-gray-200">
          {pathToMinimize.includes(pathname) ? null : (
            <div className="pb-8 pt-16">
              <div className="flex justify-center">
                <Icons.storeLogo className="h-auto w-auto" />
              </div>
            </div>
          )}

          {pathToMinimize.includes(pathname) ? null : (
            <div>
              <div className="relative flex items-center px-6 py-6 sm:py-8 lg:mt-0">
                <div className="absolute inset-0 overflow-hidden rounded-lg">
                  <div
                    aria-hidden="true"
                    className="absolute bg-zinc-50 inset-0 bg-gradient-to-br bg-opacity-90"
                  />
                </div>

                <div className="text-center relative mx-auto max-w-sm">
                  <h3 className="font-semibold text-gray-900">
                    Become a seller
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    If you&apos;d like to sell high-quality digital products,
                    you can do so in minutes.{" "}
                    <a
                      href="/sign-in?as=seller"
                      className="whitespace-nowrap font-medium text-black hover:text-zinc-900"
                    >
                      Get started &rarr;
                    </a>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="py-10 md:flex md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              {new Date().getFullYear()} ~ cmatteo.dev
            </p>
          </div>

          <div className="mt-4 flex items-center justify-center md:mt-0">
            <div className="flex space-x-8">
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-gray-600"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-gray-600"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-gray-600"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
