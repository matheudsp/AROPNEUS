import { Card, CardFooter, Chip } from "@heroui/react";
import Image from "next/image";

const servicesData = [
  {
    title: "Alinhamento e Balanceamento",
    description:
      "Este serviço é essencial para garantir que as rodas do seu veículo estejam alinhadas e equilibradas corretamente, proporcionando uma direção estável e segura, além de prevenir o desgaste irregular dos pneus.",
    imageSrc: "/Services01.webp",
  },
  {
    title: "Troca de Óleo",
    description:
      "A troca regular do óleo do motor é fundamental para manter o bom funcionamento do veículo, garantindo a lubrificação adequada das peças móveis e prolongando a vida útil do motor.",
    imageSrc: "/Services02.webp",
  },
  {
    title: "Suspensão e Peças",
    description:
      "Manter o sistema de suspensão em bom estado assegura uma condução confortável e segura, absorvendo os impactos das irregularidades da estrada e mantendo a estabilidade do veículo.",
    imageSrc: "/Services03.webp",
  },
  {
    title: "Desempeno de Rodas",
    description:
      "O desempeno de rodas corrige deformações causadas por impactos, restaurando a forma original das rodas e garantindo um rodar suave e seguro.",
    imageSrc: "/Services04.webp",
  },
  {
    title: "Pneus Novos e Usados",
    description:
      "Oferecemos uma variedade de pneus novos e usados de alta qualidade, adequados para diferentes tipos de veículos e necessidades, garantindo segurança e desempenho.",
    imageSrc: "/Services05.webp",
  }
];

const ServicesSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto pt-10 lg:pt-20 pb-10">
      <div className="container grid gap-6 px-4 md:px-6 lg:gap-12">
        <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start gap-3">
          <Chip
            className="uppercase text-white"
            color="primary"
            variant="shadow"
          >
            Conduza com Segurança e Confiança
          </Chip>
          <div className="flex flex-col xl:flex-row items-center justify-around text-center xl:text-start p-3 md:p-0 gap-5">
            <div className="flex flex-col items-start justify-start gap-3 xl:w-1/2">
              <h2 className="text-5xl font-light tracking-tighter uppercase">
              Seu Carro em <span className="font-black">Mãos Confiáveis</span>
              </h2>
            </div>

            <p className="text-base/relaxed font-light xl:w-1/2">
            Na nossa oficina, seu carro recebe o cuidado que merece. Garantimos um serviço de excelência para manter seu veículo sempre em perfeitas condições. De revisões preventivas a reparos complexos, cuidamos de tudo para que você possa dirigir com tranquilidade e segurança. Conte conosco para prolongar a vida útil do seu automóvel e evitar imprevistos.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {servicesData.map((service) => (
            <Card
              isFooterBlurred
              className="border-none"
              key={service.title}
              isPressable
            >
              <Image
                alt={service.title}
                className="object-cover w-full h-full max-h-64"
                height={0}
                src={service.imageSrc}
                width={0}
                sizes="100vw"
              />
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute  bottom-0 w-[calc(100%)] shadow-small z-10 p-3">
                <div className="flex flex-col items-center justify-center gap-2">
                  <h3 className="text-white font-semibold">{service.title}</h3>
                  <p className="text-tiny text-white/80">
                    {service.description}
                  </p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
