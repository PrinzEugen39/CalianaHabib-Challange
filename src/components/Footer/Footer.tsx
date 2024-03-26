import { MessageCircleMoreIcon } from "lucide-react";
import { Link } from "react-router-dom";
import MaxWidthWrapper from "../MaxWidthWrapper";
import {
  TCompany,
  company,
  connect,
  quickLinks,
  socmedLinks,
} from "./footerLinks";
import { navLinks } from "@/utils/navLinks";

type TProduct = {
  label: string;
  href: string;
};

export default function Footer() {
  const subLink = navLinks[1]?.subLink || [];

  return (
    <MaxWidthWrapper className="bg-slate-100">
      <div className="flex flex-col items-center gap-6 px-4 py-10 lg:gap-0 lg:justify-normal lg:items-start lg:flex-row lg:py-24 lg:px-0 xl:px-24">
        <img src="logoCaliana.svg" alt="logo" className="h-16 lg:h-fit" />
        <footer className="flex flex-col items-center lg:w-full lg:justify-around lg:items-start lg:flex-row">
          <ConnectWithUs />
          <ProductElements name="products" element={subLink} />
          <OtherElements name="company" element={company} />
          <OtherElements name="quick links" element={quickLinks} />
        </footer>
      </div>
      <div className="flex justify-between pb-4 text-xs xl:px-24 text-muted-foreground">
        <span>Copyright © 2024 Caliana</span>
        <span>Term & Conditions</span>
      </div>
    </MaxWidthWrapper>
  );
}

function ConnectWithUs() {
  return (
    <div className="flex flex-col space-y-10 lg:space-y-6 lg:w-1/3">
      <span className="font-semibold text-center text-blue-400 capitalize lg:text-start">
        connect with us
      </span>
      <div className="flex flex-col space-y-4">
        {connect.map((item) => {
          return (
            <div key={item.name}>
              <div className="flex items-start font-medium gap-x-2 text-muted-foreground">
                <span>{item.icon}</span>
                <p className="text-sm">{item.name}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-2 pb-10 space-y-4 lg:gap-0">
        <p className="font-semibold text-center text-blue-400 capitalize lg:text-start">
          Official Whatsapp Number
        </p>
        <div className="flex font-medium gap-x-4 lg:gap-x-2 text-muted-foreground">
          <MessageCircleMoreIcon size={20} />
          <p className="text-sm">0811-1992-5330</p>
        </div>
        <div className="flex gap-x-6">
          {socmedLinks.map((link) => {
            return (
              <Link
                to={link.to}
                key={link.to}
                className="p-1.5 text-white rounded-full bg-slate-800"
              >
                {link.icon}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ProductElements({
  name,
  element,
}: {
  name: string;
  element: TProduct[];
}) {
  return (
    <div className="flex flex-col py-10 space-y-6 lg:py-0">
      <span className="font-semibold text-center text-blue-400 capitalize lg:text-start">{name}</span>
      <div className="flex flex-col items-center space-y-4 font-medium lg:items-start text-muted-foreground">
        {element?.map((item) => {
          return (
            <Link to={item.href} key={item.href} className="text-sm hover:text-blue-900">
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function OtherElements({
  name,
  element,
}: {
  name: string;
  element?: TCompany[];
}) {
  return (
    <div className="flex flex-col py-10 space-y-6 lg:py-0">
      <span className="font-semibold text-center text-blue-400 capitalize lg:text-start">{name}</span>
      <div className="flex flex-col items-center space-y-4 font-medium lg:items-start text-muted-foreground">
        {element?.map((item) => {
          return (
            <Link to={item.href} key={item.name} className="text-sm hover:text-blue-900">
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
