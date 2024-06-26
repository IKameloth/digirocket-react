import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { PRODUCT_CATEGORIES } from "src/constants";
import Cart from "../Cart";
import { useOnClickOutside } from "src/hooks/useOnClickOutside";

const MobileNav = () => {
  const user = null;
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  useOnClickOutside(menuRef, () => setShowSidebar(false));

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowSidebar(false);
      }
    };

    if (showSidebar) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [showSidebar]);

  return (
    <>
      {!showSidebar && (
        <button
          type="button"
          onClick={() => {
            setShowSidebar(true);
          }}
          className="lg:hidden relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
        >
          <Menu className="h-6 w-6 animate-slide-in-left" aria-hidden="true" />
        </button>
      )}

      <div
        ref={menuRef}
        className={`lg:hidden fixed inset-0 z-40 w-[380px] flex ease-in-out duration-300 ${
          showSidebar ? "-translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="relative flex w-full max-w-sm flex-col overflow-y-auto bg-white pb-12 shadow-xl">
          {/* close button */}
          <div className="flex px-4 pb-2 pt-5">
            <button
              type="button"
              onClick={() => setShowSidebar(false)}
              className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          {/* products */}
          <div className="mt-2">
            <ul>
              {PRODUCT_CATEGORIES.map((category) => (
                <li key={category.label} className="space-y-10 px-4 pb-8 pt-10">
                  <div className="border-b border-gray-200">
                    <div className="-mb-px flex">
                      <p className="border-transparent text-gray-900 flex-1 whitespace-nowrap border-b-2 py-4 text-base font-medium">
                        {category.label}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-y-10 gap-x-4">
                    {/* {category.featured.map((item) => ( */}
                    <div key={1} className="group relative text-sm">
                      <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                        <img
                          src="/icons/new.jpg"
                          alt="product category image"
                          className="object-cover object-center"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      <a
                        href="/"
                        className="mt-6 block font-medium text-gray-900"
                      >
                        new
                      </a>
                    </div>
                    {/* ))} */}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* menus */}
          <div className="space-y-6 border-t border-gray-200 px-4 py-6 flex flex-col align-middle items-center justify-center">
            <div className="inline-flex space-x-2">
              {user ? null : (
                <>
                  <a
                    href="/sign-in"
                    className="-m-2 block p-2 font-medium text-gray-900"
                  >
                    Sign in
                  </a>
                </>
              )}
            </div>
            {user ? (
              <div className="flex flex-col space-y-5 items-center justify-start gap-2 p-2">
                <div className="flex flex-col space-y-0.5 leading-none">
                  <span className="flex align-middle items-center justify-start space-x-2 font-semibold">
                    <Cart />
                  </span>
                </div>
                <div className="flex flex-col space-y-0.5 leading-none">
                  <span className="flex align-middle items-center justify-start space-x-2 font-semibold">
                    <a href="/sell">Seller dashboard</a>
                  </span>
                </div>
                <div className="flex flex-col space-y-0.5 leading-none">
                  <span className="flex align-middle items-center justify-start space-x-2 font-semibold">
                    <button>Log out</button>
                  </span>
                </div>
              </div>
            ) : (
              <div className="inline-flex space-x-2">
                <a
                  href="/sign-up"
                  className="-m-2 block p-2 font-medium text-gray-900"
                >
                  Create Account
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
