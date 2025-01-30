import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa6";
import Logo from "../../public/logo.webp"
const Links = [
  {
    txt: "Serviços",
    href: "/#Services",
  },
  {
    txt: "Sobre nós",
    href: "/#About",
  },
  {
    txt: "Produtos",
    href: "/#Products",
  },
  {
    txt: "Localização",
    href: "/#Location",
  },
];

const Header = () => {
  return (
    <Navbar
      position="sticky"
      isBlurred={false}
      isBordered
      className="drop-shadow-md"
    >
      <NavbarBrand>
        <Link href="#" className="cursor-pointer">
        <Image src={Logo} alt="logo" width={120}
          />
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden md:flex gap-2" justify="center">
        {Links.map((link) => (
          <NavbarItem key={link.href}>
            <Button
              variant="light"
              href={link.href}
              className="text-sm"
              as={Link}
            >
              {link.txt}
            </Button>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            color="success"
            target="_blank"
            href="https://api.whatsapp.com/send?phone=5589994136771&fbclid=PAZXh0bgNhZW0CMTEAAab2GNA1G_ZhL4aLCycgnhp9oxR2iGcjOKWcqTX-N4W9UqLKM0YkvsbatGA_aem_YBzauHuc6RBUuj-Q_WcwKg"
            variant="shadow"
            className="text-white"
            endContent={<FaWhatsapp size={25} />}
            radius="sm"
          >
            WhatsApp
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
