import MaxWidthWrapper from "../MaxWidthWrapper";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  // console.log(navLinks);

  return (
    <MaxWidthWrapper className="fixed z-50 pt-6 bg-white">
      <nav className="flex items-center justify-between px-4 pb-6 xl:px-20">
        <img src="calianaLogo.png" alt="logo" className="h-7 lg:h-8" />
        <div className="hidden font-semibold text-md gap-x-10 lg:flex">
          <DesktopMenu />
        </div>
        <div className="lg:hidden">
          <MobileMenu />
        </div>
      </nav>
    </MaxWidthWrapper>
  );
}
