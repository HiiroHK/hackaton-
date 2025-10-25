import type { IconBaseProps } from "react-icons";

export type bgColorTypes = "green" | "red" | "blue" | "orange" | "purple";

interface CardcomentsProps {
  simbolo: React.ComponentType<IconBaseProps>;
  titulo: string;
  descricao: string;
  color?: bgColorTypes;
  bgColor?: bgColorTypes;
}

export function Cardcoments({
  simbolo: Simbolo,
  titulo,
  descricao,
  color,
  bgColor,
}: CardcomentsProps) {
  return (
    <div>
      {color === "orange" && bgColor === "orange" && (
        <div className="flex flex-col items-center gap-4 rounded-md border p-6 text-center">
          <div>{Simbolo && <Simbolo className="text-orange-500" />}</div>
          <div>
            <h1>{titulo}</h1>
          </div>
          <div>
            <p>{descricao}</p>
          </div>
        </div>
      )}
      {color === "blue" && bgColor === "blue" && (
        <div className="flex flex-col items-center gap-4 rounded-md border p-6 text-center">
          <div>{Simbolo && <Simbolo className="text-blue-500" />}</div>
          <div>
            <h1>{titulo}</h1>
          </div>
          <div>
            <p>{descricao}</p>
          </div>
        </div>
      )}
    </div>
  );
}
