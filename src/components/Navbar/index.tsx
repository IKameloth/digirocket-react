import Cart from "../Cart";
import { Icons } from "../Icons";
import { buttonVariants } from "../ui/button";
import MobileNav from "./MobileNav";
import NavItems from "./NavItems";
import UserAccountNav from "./UserAccountNav";

const Navbar = () => {
  const user = null;

  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white">
        <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <MobileNav />
              <div className="ml-4 lg:ml-0 animate-slide-in-left">
                <a href="/">
                  <Icons.rocketLogoNavigation className="h-8 w-auto" />
                </a>
              </div>
              <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch animate-fade-in-down">
                <NavItems />
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6 animate-fade-in-down">
                  {user ? null : (
                    <a
                      href="/sign-in"
                      className={buttonVariants({
                        variant: "ghost",
                      })}
                    >
                      Sign in
                    </a>
                  )}

                  {user ? null : (
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  )}

                  {user ? (
                    <UserAccountNav />
                  ) : (
                    <a
                      href="/sign-up"
                      className={buttonVariants({
                        variant: "ghost",
                      })}
                    >
                      Create account
                    </a>
                  )}
                  {user ? (
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  ) : null}
                  {user ? null : (
                    <div className="flex lg:ml-6">
                      <span
                        className="h-6 w-px bg-gray-200"
                        aria-hidden="true"
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="ml-4 mr-2 flow-root lg:ml-6 lg:mr-0 animate-slide-in-right">
                <Cart />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
