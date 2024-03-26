import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/utils/navLinks";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function MobileMenu() {
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <Menu className="text-blue-400" size={30} />
        </SheetTrigger>
        <SheetContent side={"top"}>
          <SheetHeader>
            <SheetTitle className="flex flex-col items-start gap-3 text-base">
              {navLinks.map((link) => {
                return link.subLink ? (
                  <Accordion
                    type="single"
                    collapsible
                    key={link.href}
                    className="p-0"
                  >
                    <AccordionItem value="item-1" className="border-0">
                      <AccordionTrigger className="p-0 font-semibold hover:text-blue-400">
                        {link.label}
                      </AccordionTrigger>
                      <AccordionContent className="py-2">
                        {link.subLink.map((sublink) => (
                          <Link
                            key={sublink.href}
                            to={sublink.href}
                            className="flex py-1 ml-5 hover:text-blue-400"
                          >
                            {sublink.label}
                          </Link>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="hover:text-blue-400"
                  >
                    {link.label}
                  </Link>
                );
              })}
            </SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
}
