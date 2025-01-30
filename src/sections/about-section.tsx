"use client";
import { CardBody, Chip, Card } from "@heroui/react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { FaClock, FaHandshake, FaMoneyBillWave, FaStar } from "react-icons/fa6";
import { FaTools, FaPhoneAlt } from 'react-icons/fa'
import { MdCarRepair } from 'react-icons/md'
import { IoHardwareChipOutline } from 'react-icons/io5'

const cardsData = [
  {
    icon: <FaTools className="mx-auto h-8 w-8" />,
    title: "Experiência e Tradição",
    description:
      "Desde 2009, nossa oficina oferece serviços de alta qualidade, construindo uma reputação de confiança e excelência.",
  },
  {
    icon: <MdCarRepair className="mx-auto h-8 w-8" />,
    title: "Serviços Especializados",
    description:
      "Contamos com uma equipe de profissionais altamente qualificados e experientes para cuidar do seu veículo com todo o cuidado.",
  },
  {
    icon: <IoHardwareChipOutline className="mx-auto h-8 w-8" />,
    title: "Tecnologia de Ponta",
    description:
      "Investimos em equipamentos modernos e tecnologia de ponta para garantir o melhor diagnóstico e reparo para o seu automóvel.",
  },
  {
    icon: <FaHandshake className="mx-auto h-8 w-8" />,
    title: "Atendimento Personalizado",
    description:
      "Cada cliente é único e recebe atenção especial. Entendemos suas necessidades e oferecemos soluções personalizadas.",
  },
  {
    icon: <FaStar className="mx-auto h-8 w-8" />,
    title: "Qualidade Garantida",
    description:
      "Nossos serviços são realizados com peças de alta qualidade e seguem rigorosos padrões de segurança para garantir a sua satisfação.",
  },
  {
    icon: <FaClock className="mx-auto h-8 w-8" />,
    title: "Agilidade e Eficiência",
    description:
      "Sabemos que seu tempo é valioso. Por isso, trabalhamos com agilidade e eficiência para entregar seu veículo no prazo combinado.",
  },
  {
    icon: <FaMoneyBillWave className="mx-auto h-8 w-8" />,
    title: "Preços Justos",
    description:
      "Oferecemos serviços de alta qualidade com preços justos e transparentes, sem surpresas no final.",
  },
  {
    icon: <FaPhoneAlt className="mx-auto h-8 w-8" />,
    title: "Atendimento Exclusivo",
    description:
      "Conte com nosso atendimento exclusivo para tirar dúvidas, agendar serviços e receber todo o suporte necessário.",
  },
];


const AboutSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="w-full 3xl:rounded-2xl">
      <div className="flex flex-col items-center justify-center text-center p-5 gap-5 w-full max-w-7xl mx-auto">
        <div className="space-y-4">
          <Chip
            className="uppercase text-white"
            color="primary"
            variant="shadow"
          >
            Conheça a aropneus
          </Chip>

          <div className="space-y-6">
            <h2 className="text-5xl font-black tracking-tighter uppercase">
              A Parceria Perfeita para o Seu Veículo
            </h2>

            <p className="md:text-xl/relaxed lg:text-base/relaxed font-light">
            Acreditamos que cada veículo tem sua própria história, assim como cada cliente tem seus próprios desafios e objetivos. Na AroPneus, sua jornada automotiva é única. 
            </p>
          </div>
        </div>

        <Carousel
          className="w-full text-center ml-4 md:ml-0"
          setApi={setApi}
          opts={{
            loop: true,
            align: "start",
          }}
        >
          <CarouselContent className="cursor-grab active:cursor-grabbing">
            {cardsData.map((card, index) => (
              <CarouselItem key={index} className="lg:basis-1/2 p-5">
                <Card className="hover:scale-[1.01] transition-all duration-200 ease-in-out select-none">
                  <CardBody className="p-4 md:p-6">
                    <div className="flex items-center justify-center gap-5">
                      <span>{card.icon}</span>
                      <h3 className="text-md font-bold tracking-tight md:text-base">
                        {card.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-500 md:text-base lg:text-sm/relaxed lg:line-clamp-2 mt-3">
                      {card.description}
                    </p>
                  </CardBody>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-center gap-2 mt-8">
            <div className="left-1/2 top-3 -translate-x-1/2 -translate-y-1/2 transform">
              <CarouselPrevious />
            </div>

            <p className="text-sm font-light">
              {current}/{count}
            </p>

            <div className="left-1/2 top-3 -translate-x-1/2 -translate-y-1/2 transform">
              <CarouselNext />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default AboutSection;
