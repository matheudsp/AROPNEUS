import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa6';
import { whatsappUrl } from '@/lib/contact';

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <Link href="/" aria-label="Aro Pneus — início"><Image src="/logo.webp" alt="Aro Pneus" width={160} height={69} priority className="brand-logo" /></Link>
        <nav aria-label="Navegação principal"><Link href="/#Services">Serviços</Link><Link href="/coding">Coding VW / Audi</Link><Link href="/#Location">Como chegar</Link></nav>
        <a className="contact-button header-contact" href={whatsappUrl()} target="_blank" rel="noopener noreferrer"><FaWhatsapp size={21} /> <span>Fale com a gente</span></a>
      </div>
    </header>
  );
}
