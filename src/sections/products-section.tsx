import { Card, CardFooter, Chip } from "@heroui/react";
import Image from "next/image";

const productsList = [
  {
    src: "/Product01.webp",
    txt: "Calotas",
  },
  {
    src: "/Product02.webp",
    txt: "Rodas",
  },
  {
    src: "/Product03.webp",
    txt: "Óleos e Filtros",
  },
  {
    src: "/Product04.webp",
    txt: "Peças em Geral",
  }
];

const ProductsSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto py-12">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center lg:items-start lg:justify-start gap-3 p-5 3xl:px-16">
        <Chip className="uppercase text-white" color="primary" variant="shadow">
          LOJA DE AUTOPEÇAS
        </Chip>
        <div className="flex flex-col xl:flex-row items-center justify-around text-center xl:text-start p-3 md:p-0 gap-5">
          <div className="xl:w-1/2">
            <h2 className="text-5xl font-light tracking-tighter uppercase">
              Tudo para o{" "}
              <span className="font-black">seu veículo</span>
            </h2>
          </div>

          <p className="text-base/relaxed font-light xl:w-1/2">
          Trabalhamos com as melhores marcas do mercado, garantindo a procedência e a durabilidade das peças. Nossa equipe está sempre pronta para te ajudar a encontrar a peça certa para o seu carro, com atendimento personalizado e especializado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-6 select-none w-full">
          {productsList.map((product) => (
            <Card
              isFooterBlurred
              className="border-none group"
              isPressable
              key={product.src}
            >
              <Image
                alt={product.txt}
                className="object-cover w-full h-full max-h-64  filter grayscale group-hover:filter-none transition-all duration-200 ease-in-out"
                height={0}
                src={product.src}
                width={0}
                sizes="100vw"
              />
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute  bottom-0 w-[calc(100%)] shadow-small z-10 p-3 group-hover:invisible">
                <h3 className="text-white font-semibold mx-auto uppercase">
                  {product.txt}
                </h3>
              </CardFooter>
            </Card>
          ))}
        </div>
        <p className="text-xs font-light">
          Para obter mais informações sobre preços e promoções, entre em contato
          conosco pelo WhatsApp ou visite nossa unidade física. Estamos à
          disposição para fornecer detalhes adicionais e auxiliar você na
          escolha das melhores peças para seu automóvel.
        </p>
      </div>
    </section>
  );
};

export default ProductsSection;
