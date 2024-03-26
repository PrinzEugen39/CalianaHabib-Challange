import { navLinks } from "@/utils/navLinks";
import { Link, useLocation } from "react-router-dom";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ChevronDown } from "lucide-react";

export default function DesktopMenu() {
  const location = useLocation();

  return (
    <>
      {navLinks.map((link) => {
        const isActive =
          link.href === "/"
            ? location.pathname === "/"
            : location.pathname.startsWith(link.href);

        return link.subLink ? (
          <HoverCard key={link.href} openDelay={150} closeDelay={50}>
            <HoverCardTrigger
              className={`relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right ${
                isActive ? "text-blue-500" : "text-slate-800"
              }`}
            >
              <div className="flex items-center">
                <span>{link.label}</span>
                <span className="ml-2 transition duration-300 ease-in-out hover:rotate-180">
                  <ChevronDown size={20} />
                </span>
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="flex flex-col w-full px-8 py-4 border-0 shadow-md gap-y-2">
              {link.subLink.map((subLink) => (
                <Link
                  key={subLink.href}
                  to={subLink.href}
                  className={`font-normal transition duration-300 ease-in-out text-slate-800 hover:text-blue-400`}
                >
                  <span>{subLink.label}</span>
                </Link>
              ))}
            </HoverCardContent>
          </HoverCard>
        ) : (
          <Link
            key={link.href}
            to={link.href}
            className={`relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right ${
              isActive ? "text-blue-500" : "text-slate-800"
            }`} // Apply active styling to Link
          >
            {link.label}
          </Link>
        );
      })}
    </>
  );
}
