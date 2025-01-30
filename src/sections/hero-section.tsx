import { Button } from "@heroui/react";
import Link from "next/link";
import { FaStar } from "react-icons/fa6";
import { RiOilLine } from "react-icons/ri";
const HeroSection = () => {
  return (
    <section className="bg-[url('/heroBanner.webp')] bg-cover bg-center bg-no-repeat py-10 lg:py-20 3xl:rounded-b-2xl relative">

      <div className="flex flex-col items-center justify-center gap-5 text-white w-full max-w-5xl mx-auto text-center p-5">
        <h1 className="lg:leading-tighter font-black text-5xl lg:text-6xl uppercase flex-1 tracking-tighter">
          Mantenha seu veículo em movimento
        </h1>
        <p className="font-light flex-1 max-w-4xl">
          Na AroPneus, oferecemos serviços de alta qualidade para garantir que seu carro esteja sempre pronto para a estrada. Nossa equipe está comprometida em proporcionar o melhor atendimento para o seu veículo.
        </p>

        <div className="flex flex-col xl:flex-row items-center justify-center gap-5 w-full">
          <Link href="#Services" className="w-full">
            <Button
              variant="bordered"
              size="lg"
              className="h-14 w-full uppercase text-white"
              endContent={<RiOilLine size={20} />}
              radius="sm"
            >
              Nossos Serviços
            </Button>
          </Link>

          <Link target="_blank" href="https://api.whatsapp.com/send?phone=5589994136771&fbclid=PAZXh0bgNhZW0CMTEAAab2GNA1G_ZhL4aLCycgnhp9oxR2iGcjOKWcqTX-N4W9UqLKM0YkvsbatGA_aem_YBzauHuc6RBUuj-Q_WcwKg" className="w-full">
            <Button
              variant="shadow"
              color="primary"
              size="lg"
              className="h-14 w-full uppercase text-white"
              endContent={<FaStar size={20} />}
              radius="sm"
            >
              Entre em contato
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
