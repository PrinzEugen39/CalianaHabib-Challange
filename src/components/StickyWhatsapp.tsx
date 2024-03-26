import { MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const whatsAppLink = 'https://web.whatsapp.com/send?phone=628119152066&text=Hello!%20Saya%20ingin%20tahu%20lebih%20lengkap%20tentang%20Caliana';

export default function StickyWhatsapp() {
  return (
    <Link
      to={whatsAppLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 flex items-center justify-center p-4 font-bold text-white bg-blue-400 rounded-full shadow-md bottom-8 right-4 hover:bg-blue-500"
    >
      <MessageCircle size={28} className="text-white" />
    </Link>
  );
}
