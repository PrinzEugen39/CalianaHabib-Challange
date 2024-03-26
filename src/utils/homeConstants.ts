type TCalianaFeature = {
  image: string;
  title: string;
  description: string;
  buttonText: string;
};

type TCalianaProduct = {
  title: string;
  href: string;
  image: string;
}

export const calianaFeatures: TCalianaFeature[] = [
  {
    title: "Digitalisasi Buku Tamu",
    description:
      "Catat pengunjung dengan cara yang lebih sederhana dan efisien dengan Caliana. Sekarang Anda dapat dengan mudah memonitor siapa saja yang berkunjung ke bisnis Anda lengkap beserta waktu dan tujuan pengunjung tersebut",
    buttonText: "Mulai Catat",
    image: "/featureImages/Digitalisasi-Buku-Tamu.svg",
  },
  {
    title: "Integrasi dengan sistem yang Anda miliki",
    description: "Maksimalkan sistem dan infrastruktur yang telah anda miliki dengan Caliana. Caliana dapat dintegrasikan dengan berbagai sistem dan infrastruktur yang sudah anda miliki seperti CCTV, door acces, HRIS, swing gate, dll.",
    buttonText: "Mulai Integrasi",
    image: "/featureImages/Integrasi-Dengan-Sistem-Yang-Anda-Miliki.svg",
  },
  {
    title: "Pantau Area dengan Surveillance System​",
    description: "Integrasikan Caliana VMS dengan CCTV di perusahaan Anda. Dengan teknologi Artificial Intelligence, Anda dapat memantau siapa yang berada di area tersebut dan bagaimana kondisi area sekitar secara real-time.",
    buttonText: "Mulai Pantau",
    image: "/featureImages/Pantau-Area-dengan-Surveillance-System.svg",
  },
  {
    title: "Dashboard Report​",
    description: "Dapatkan insight mendalam dari Dashboard Reporting Caliana, ketahui volume pengunjung pada waktu tertentu, tujuan pengunjung, hingga waktu berkunjung sehingga Anda dapat membuat kebijakan yang lebih efektif dengan data yang akurat.",
    buttonText: "Lihat Informasi",
    image: "/featureImages/Dashboard-Report.svg",
  }
];

export const calianaProducts: TCalianaProduct[] = [
  {
    title: "Visitor Management System",
    href: "/visitor-management-system-indonesia",
    image: "/featureImages/Mockup-VMS.png",
  },
  {
    title: "Surveillance & Monitoring System",
    href: "/surveillance-monitoring-system",
    image: "/featureImages/Mockup-SMS.svg",
  },
  {
    title: "Access Control System",
    href: "/event-management-system",
    image: "/featureImages/Mockup-ACS.png",
  },
  
]
