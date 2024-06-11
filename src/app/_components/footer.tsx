import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter text-bionutri--4 leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Blog da BioNutri.
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://wa.me/558494026402"
              className="mx-3 bg-bionutri-0 hover:bg-bionutri-3 hover:text-bionutri--3 border border-bionutri--3 text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Entre em contato
            </a>
            <a
              href={`https://github.com/felipe-sbm/BioNutri`}
              className="mx-3 font-bold hover:underline text-bionutri--3"
            >
              Ver repositório
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
