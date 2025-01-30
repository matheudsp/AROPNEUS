import { Button, Chip, Link } from "@heroui/react";
import { MdDiscount } from "react-icons/md";

const FreeService = () => {
  return (
    <section className="w-full py-16 my-10 bg-[url('/Free.webp')] bg-cover bg-center bg-no-repeat 3xl:rounded-2xl">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center lg:items-start lg:justify-start gap-3 text-white p-5 3xl:px-16">
        <Chip className="uppercase text-white" color="primary" variant="shadow">
          Troca de Óleo Grátis
        </Chip>
        <div className="flex flex-col xl:flex-row items-center justify-around text-center xl:text-start p-3 md:p-0 gap-5">
          <div className="xl:w-1/2">
            <h2 className="text-5xl font-light tracking-tighter uppercase">
              troca de óleo gratuita na  <span className="font-black">compra de óleo</span>
            </h2>
          </div>

          <p className="text-base/relaxed font-light xl:w-1/2">
            Aproveite a promoção: na compra do óleo e filtro, o serviço de troca é gratuito! Nossa equipe está sempre pronta para te atender com excelência e garantir a segurança do seu veículo.
          </p>
        </div>

        <div className="flex flex-col md:items-start md:justify-start items-center justify-center text-center md:text-start w-full gap-2">
          <Button
            as={Link}
            href="#"
            endContent={<MdDiscount size={25} />}
            variant="shadow"
            color="primary"
            radius="md"
            size="lg"
            className="uppercase text-white w-full mt-5"
          >
            Quero trocar o óleo
          </Button>
          <p className="text-xs font-light">
            Oferta lançada em Feveiro de 2025. Consulte o{" "}
            <Link
              className="underline underline-offset-2 text-xs text-white"
              href="#"
            >
              WhatsApp.
            </Link>{" "}
            para mais informações.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FreeService;
