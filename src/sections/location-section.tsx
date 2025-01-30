import { Chip } from "@heroui/react";
import Image from "next/image";
import { HiClock, HiMapPin, HiPhone } from "react-icons/hi2";

import Logo from '../../public/logo.webp'

import React from "react";



const LocationSection = () => {
  return (
    <section className="w-full 3xl:max-w-7xl mx-auto py-12 lg:mt-20 flex flex-col items-center justify-around lg:flex-row mx:px-0 gap-10 px-5 xl:px-0 bg-[#1A1A1A] 3xl:rounded-t-2xl text-white">
      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-10 max-w-6xl mx-auto">
        <Image
          src="/Gallery.webp"
          alt="Galeria de imagens da AROPNEUS"
          sizes="100vw"
          height={0}
          width={0}
          className="w-full h-auto lg:max-h-[30rem] aspect-square"
        />

        <div className="flex flex-col items-center justify-center gap-5">
          <div className="flex flex-col items-center justify-center gap-4">
            <Chip
              className="uppercase text-white"
              color="primary"
              variant="shadow"
            >
              Visite-nos
            </Chip>
            <div className="select-none cursor-default bg-white rounded-full px-2">
              <Image src={Logo} alt="logo" width={256} />
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col items-center justify-center text-center">
              <h3 className="text-lg font-medium flex items-center gap-2 uppercase mb-3">
                <HiMapPin size={25} />
                Endereço
              </h3>
              <p className="text-sm leading-relaxed text-white">
                Avenida Calisto Lobo, Alto da Guia, Floriano, Piaui, Brazil 64807-050
              </p>
              <p className="text-sm leading-relaxed font-light text-white/60">
                Nossa oficina é facilmente
                acessível e está próximo a diversas comodidades locais.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <h3 className="text-lg font-medium flex items-center gap-2 uppercase mb-3">
                <HiPhone size={25} />
                Contato
              </h3>
              <p className="text-sm leading-relaxed text-white">
                (89) 9 9413-6771
              </p>
              <p className="text-sm leading-relaxed font-light text-white/60">
                Entre em contato conosco para mais informações sobre nossos
                serviços e promoções.
              </p>
            </div>
            <div className="flex flex-col col-span-2 items-center justify-center text-center">
              <h3 className="text-lg font-medium flex items-center gap-2 uppercase mb-3">
                <HiClock size={25} />
                Funcionamento
              </h3>
              <p className="text-sm leading-relaxed text-white">
                Segunda à Sábado
              </p>
              <p className="text-sm leading-relaxed font-light text-white/60">
                Segunda à Sexta - 8h às 18h<br />
                Sábado - 8 às 12h
              </p>
            </div>
            {/* <div className="flex flex-col items-center justify-center text-center">
              <h3 className="text-lg font-medium flex items-center gap-2 uppercase mb-3">
                <HiGlobeAmericas size={25} />
                Redes Sociais
              </h3>
              <p className="text-sm leading-relaxed font-light text-white/60">
                Mantenha-se por dentro de tudo, promoções e atualizações!
              </p>
              <div className="flex gap-1">
                <SocialLink
                  className="h-8 w-8"
                  href="https://www.instagram.com/aropneus_/"
                  icon={<FaWhatsapp size={20} />}
                  size="sm"
                />
                <SocialLink
                 className="h-8"
                  href="https://www.instagram.com/aropneus_/"
                  icon={<FaInstagram size={20} />}
                  size="sm"
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
