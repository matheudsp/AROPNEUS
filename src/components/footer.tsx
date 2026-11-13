import { FaInstagram } from 'react-icons/fa6';
export default function Footer() {
  return <footer className="site-footer"><div className="site-container footer-inner"><p>© {new Date().getFullYear()} Aro Pneus · Floriano–PI</p><a href="https://www.instagram.com/aropneus_/" target="_blank" rel="noopener noreferrer"><FaInstagram size={18} /> @aropneus_</a><p>Desenvolvido por <a href="https://www.instagram.com/valedosoltec" target="_blank" rel="noopener noreferrer">Vale do Sol Tec</a></p></div></footer>;
}
