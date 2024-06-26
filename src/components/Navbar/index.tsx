import { useAuth } from "src/context/auth-context";
import Cart from "../Cart";
import { Icons } from "../Icons";
import { buttonVariants } from "../ui/button";
import MobileNav from "./MobileNav";
import NavItems from "./NavItems";
import UserAccountNav from "./UserAccountNav";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white">
        <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <MobileNav />
              <div className="ml-4 lg:ml-0 animate-slide-in-left">
                <Link to="/">
                  <Icons.rocketLogoNavigation className="h-8 w-auto" />
                </Link>
              </div>
              <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch animate-fade-in-down">
                <NavItems />
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6 animate-fade-in-down">
                  {isAuthenticated ? null : (
                    <Link
                      to="/sign-in"
                      className={buttonVariants({
                        variant: "ghost",
                      })}
                    >
                      Sign in
                    </Link>
                  )}

                  {isAuthenticated ? null : (
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  )}

                  {isAuthenticated ? (
                    <UserAccountNav />
                  ) : (
                    <Link
                      to="/sign-up"
                      className={buttonVariants({
                        variant: "ghost",
                      })}
                    >
                      Create account
                    </Link>
                  )}
                  {isAuthenticated ? (
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  ) : null}
                  {isAuthenticated ? null : (
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
