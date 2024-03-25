import { navLinks } from "@/utils/navLinks";
import { Link } from "react-router-dom";
import MaxWidthWrapper from "./MaxWidthWrapper";

export default function Navbar() {
  // console.log(navLinks);

  return (
    <MaxWidthWrapper className="py-5">
      <nav className="flex items-center justify-between px-20">
        <img src="calianaLogo.png" alt="logo" className="h-8" />
        <div className="flex font-semibold text-md gap-x-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="px-3 py-2 hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </MaxWidthWrapper>
  );
}
