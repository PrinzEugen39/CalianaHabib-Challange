import { AtSign, Instagram, Linkedin, MapPin, Phone, Youtube } from "lucide-react";

type TsocmedLinks = {
  to: string;
  icon: React.ReactNode;
};

export const socmedLinks: TsocmedLinks[] = [
  {
    to: "https://www.instagram.com/calianaindonesia/",
    icon: <Instagram size={16} />,
  },
  {
    to: "https://www.instagram.com/lifeatcaliana",
    icon: <Instagram size={16} />,
  },
  {
    to: "https://www.linkedin.com/company/calianaindonesia",
    icon: <Linkedin size={16} />,
  },
  {
    to: "https://www.facebook.com/calianaindonesia",
    icon: <Youtube size={16} />,
  },
];

type TConnectWithUs = {
  name: string;
  icon: React.ReactNode;
};

export const connect: TConnectWithUs[] = [
  {
    name: "Graha Mas Fatmawati, Ruko B9 Lantai 3, RT.2/RW.5, Cipete Utara, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12150",
    icon: <MapPin size={20} />,
  },
  {
    name: "0811-9152-066",
    icon: <Phone size={20} />,
  },
  {
    name: "info@datanusantara.com",
    icon: <AtSign size={20} />,
  }
];

export type TCompany = {
  name: string;
  href: string;
}

export const company: TCompany[] = [
  {
    name: "About Us",
    href: "#",
  },
  {
    name: "Contact Us",
    href: "#",
  }
]

export const quickLinks: TCompany[] = [
  {
    name: "Data Nusantara Adhikarya",
    href: "#",
  },
  {
    name: "Caliana Brochure",
    href: "#",
  },
  {
    name: "VMS Guideline 2022",
    href: "#",
  },
  {
    name: "Caliana Survery 2023",
    href: "#",
  }
]
