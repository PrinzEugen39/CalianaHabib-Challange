type subLink = {
  label: string;
  href: string;
};

type NavLink = {
  label: string;
  href: string;
  subLink?: subLink[];
};

export const navLinks: NavLink[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Product",
    href: "#",
    subLink: [
      {
        label: "Visitor Management System",
        href: "/visitor-management-system-indonesia",
      },
      {
        label: "Surveillance Monitoring System",
        href: "/surveillance-monitoring-system",
      },
      {
        label: "Event Management System",
        href: "/event-management-system",
      },
    ],
  },
  {
    label: "Plans & Pricing",
    href: "/plans-pricing",
  },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "Caliana Help",
    href: "/faq",
  },
];
