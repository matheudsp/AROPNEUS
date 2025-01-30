import React from "react";
import Image from "next/image";
import {
  FaChevronRight,
  FaInstagram,
  FaWhatsapp
} from "react-icons/fa6";
import {  Link } from "@heroui/react";
import AuthorLogo from '../../public/logovale.png'
import {SocialLink} from "@/components/socialLink";
import { BsPinMap } from "react-icons/bs";

interface FooterLinkProps {
  text: string;
}

function FooterLink({ text }: FooterLinkProps) {
  return (
    <p className="group flex cursor-pointer items-center justify-center gap-1">
      <span
        className="hidden group-hover:block group-hover:animate-spin text-warning"
        style={{ animationIterationCount: 1, animationDuration: "0.3s" }}
      >
        <FaChevronRight size={12} />
      </span>
      {text}
    </p>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();


  return (
    <footer className="mx-auto w-full border-t border-input cursor-default items-center justify-center bg-white pt-8 shadow-xl md:px-0 3xl:max-w-7xl">
      <section className="flex flex-col items-center justify-around gap-y-4 px-4 pb-8 shadow-xl md:flex-row md:gap-y-0">
        <Link href="/">
          <Image
            src="/logo.webp"
            alt="STARKFIT"
            width={200}
            height={50}
            style={{ objectFit: "contain" }}
            className="h-auto w-28"
          />
        </Link>
        <div>

          <p className="text-sm text-center">
            &copy; {currentYear} AROPNEUS
          </p>
          <p className="text-sm text-center uppercase font-medium">
            Site desenvolvido com excelência por <Link href="https://www.instagram.com/valedosoltec" target="_blank" rel="noopener noreferrer" className="underline text-primary">Vale do Sol Tec</Link>.
          </p>
        </div>

        <div className="flex gap-1">
          <SocialLink
            href="https://www.instagram.com/valedosoltec"
            image={AuthorLogo}
            size="sm"
          />
          <SocialLink
            href="https://api.whatsapp.com/send?phone=5589994136771&fbclid=PAZXh0bgNhZW0CMTEAAab2GNA1G_ZhL4aLCycgnhp9oxR2iGcjOKWcqTX-N4W9UqLKM0YkvsbatGA_aem_YBzauHuc6RBUuj-Q_WcwKg"
            icon={<FaWhatsapp size={25} />}
            size="sm"
          />
          <SocialLink
            href="https://www.instagram.com/aropneus_/"
            icon={<FaInstagram size={25} />}
            size="sm"
          />
           <SocialLink
            href="https://maps.app.goo.gl/tm3kJmuMNWUDgZm36"
            icon={<BsPinMap size={25} />}
            size="sm"
          />
        </div>
      </section>

     
    </footer>
  );
}
