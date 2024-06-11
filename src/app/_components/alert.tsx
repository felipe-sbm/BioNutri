import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";
import cn from "classnames";

type Props = {
  preview?: boolean;
};

const Alert = ({ preview }: Props) => {
  return (
    <div
      className={cn("border-b", {
        "bg-neutral-800 border-neutral-800 text-white": preview,
        "bg-neutral-50 border-neutral-200": !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              Essa página é uma preview.{" "}
              <a
                href="/api/exit-preview"
                className="underline hover:text-teal-300 duration-200 transition-colors"
              >
                Pressione aqui
              </a>{" "}
              para sair do modo de preview.
            </>
          ) : (
            <>
              O código fonte desse site{" "}
              <a
                href={`https://github.com/felipe-sbm/BioNutri`}
                className="underline hover:text-bionutri-0 duration-200 transition-colors"
              >
                está disponível no GitHub
              </a>
              , é open source!
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Alert;
