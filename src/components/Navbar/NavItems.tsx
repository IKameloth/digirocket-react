import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "src/lib/utils";
import { PRODUCT_CATEGORIES } from "src/constants";
import { useOnClickOutside } from "src/hooks/useOnClickOutside";

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(navRef, () => setActiveIndex(null));

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
    };

    document.addEventListener("keydown", handler);

    return () => document.removeEventListener("keydown", handler);
  }, []);

  return (
    <div className="flex gap-4 h-full" ref={navRef}>
      {PRODUCT_CATEGORIES.map((category, index) => {
        const handleToggle = () => {
          if (activeIndex === index) return setActiveIndex(null);
          setActiveIndex(index);
        };

        const isOpen = index === activeIndex;

        return (
          <div key={category.value} className="flex">
            <div className="relative flex items-center">
              <Button
                className="gap-1.5"
                onClick={handleToggle}
                variant={isOpen ? "secondary" : "ghost"}
              >
                {category.label}
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-all text-muted-foreground",
                    {
                      "-rotate-180": isOpen,
                    }
                  )}
                />
              </Button>
            </div>
            {isOpen ? (
              <div
                onClick={() => close()}
                className="absolute inset-x-0 top-full text-sm text-muted-foreground animate-fade-in-down transition duration-300 ease-in-out drop-shadow-md"
              >
                <div
                  className="absolute inset-0 top-1/2 bg-white shadow"
                  aria-hidden="true"
                />
                <div className="relative bg-white">
                  <div className="mx-auto max-w-7xl px-8">
                    <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
                      <div className="col-span-4 col-start-1 grid grid-cols-3 gap-x-8">
                        <div className="group relative text-base sm:text-sm">
                          <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                            <a href="/">
                              <img
                                src=""
                                alt="product category image"
                                className="object-cover object-center"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              />
                            </a>
                          </div>
                          <p className="mt-1" aria-hidden="true">
                            procuto titulo
                          </p>
                          <p className="mt-6 font-bold text-gray-900">
                            producto nombre
                          </p>
                          <a
                            href="/"
                            className="mt-2 block font-medium text-gray-900"
                          >
                            Shop now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default NavItems;
