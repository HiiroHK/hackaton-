
import { Cardcoments } from "@/components/Cardcoments";
import { Cardinfo } from "@/components/Cardinfo";
import {
  Clock,
  CreditCardIcon,
  MapPin,
  Shield,
  StarIcon,
  Users2Icon,
} from "lucide-react";

export function Home() {
  return (
    <div id="home">
      <header className="bg-background/95 sticky top-0 z-50 flex h-[60px] w-full items-center justify-between border-b px-10 backdrop-blur">
        <div>Painting Services</div>
        <div className="flex gap-3">
          <button className="font-normal">Como funciona</button>
          <button className="font-normal">Sou pintor</button>
          <button className="font-normal">Entrar</button>
          <a href="/user">
            <button className="rounded-md bg-blue-500 p-2 text-white">
              Quero pintar agora
            </button>
          </a>
        </div>
      </header>
      <div className="relative bg-[url('/src/assets/hiiro.jpg')] md:h-[760px]">
        <div className="absolute inset-0 h-[760px] w-full bg-blue-800" />
        <div className="relative mx-auto h-full w-full max-w-7xl place-content-center px-5 md:grid-cols-2">
          <div className="space-y-10">
            <h1 className="text-6xl font-bold text-white">
              Encontre Pintores Profissionais Perto de Você
            </h1>
            <p className="text-xl text-white">
              Conecte-se com profissionais qualificados em minutos. Rápido,
              seguro e confiável.
            </p>

            <div className="flex gap-3 rounded-md bg-white px-6 py-4">
              <div className="flex w-full items-center gap-2 rounded-md border border-gray-300 p-1">
                <MapPin className="h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Digite seu CEP"
                  className="h-full w-full border-none outline-none"
                />
              </div>
              <button className="cursor-pointer rounded-md bg-blue-400 p-2 text-white transition-colors hover:bg-blue-500">
                Buscar profissionais
              </button>
            </div>
            <div className="flex justify-center gap-3">
              <div className="flex justify-center gap-1 text-white">
                <Shield />
                <p>profissionais</p>
              </div>
              <div className="flex justify-center gap-1 text-white">
                <Clock />
                <p>atendimento rápido</p>
              </div>
              <div className="flex justify-center gap-1 text-white">
                <StarIcon className="fill-yellow-300 text-yellow-300" />
                <p>avaliações reais</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div>
            <div className="my-10 text-center">
              <h4 className="text-5xl font-semibold">Como funciona</h4>
              <p className="text-gray-600">
                Três passos simples para transformar sua casa
              </p>
            </div>
            <div className="flex gap-4 p-4">
              <Cardinfo
                simbolo={MapPin}
                titulo="1. Informe o Endereço"
                descricao="Digite seu CEP e encontre pintores estranhos em sua região"
                color="blue"
                bgColor="blue"
              />
              <Cardinfo
                simbolo={Users2Icon}
                titulo="2. Escolha o Pintor"
                descricao="Compare avaliações, preços e escolha o profissional ideal"
                color="orange"
                bgColor="orange"
              />
              <Cardinfo
                simbolo={CreditCardIcon}
                titulo="3. Pague com Segurança"
                descricao="Pagamento protegido e garantia de qualidade no serviço"
                color="blue"
                bgColor="blue"
              />
            </div>
          </div>
          <div>
            <div className="my-10 text-center">
              <h4 className="text-5xl font-semibold">
                O Que Nossos Clientes Dizem
              </h4>
              <p className="text-gray-600">
                Milhares de clientes satisfeitos em todo o Brasil
              </p>
            </div>
            <div className="flex gap-4 p-4">
              <Cardcoments
                simbolo={Users2Icon}
                titulo="Carlos Silva"
                descricao="Recomendo! Processo simples e profissionais de confiança. Voltarei a usar com certeza."
                color="blue"
                bgColor="blue"
              />
              <Cardcoments
                simbolo={Users2Icon}
                titulo="Maria Santos"
                descricao="Plataforma muito intuitiva. O pintor chegou no horário e fez um trabalho impecável!"
                color="orange"
                bgColor="orange"
              />
              <Cardcoments
                simbolo={Users2Icon}
                titulo="João Oliveira"
                descricao="Excelente serviço! Encontrei um pintor qualificado em minutos. Muito satisfeito com o resultado."
                color="blue"
                bgColor="blue"
              />
            </div>
          </div>
        </div>
        <footer className="">
          <div className="col-span-3 grid grid-cols-4 gap-4 p-10">
            <div className="space-y-2.5">
              <h4 className="text-3xl">Painting Services</h4>
              <p className="max-w-xs text-gray-600">
                Conectando você aos melhores pintores profissionais de sua
                região.
              </p>
            </div>

            <div className="space-y-2.5">
              <h2 className="text-2xl">Para Clientes</h2>
              <p className="max-w-xs text-gray-600">Como funciona</p>
              <p className="max-w-xs text-gray-600">Minha conta</p>
              <p className="max-w-xs text-gray-600">Central de ajuda</p>
            </div>

            <div className="space-y-2.5">
              <h2 className="text-2xl">Para Pintores</h2>
              <p className="max-w-xs text-gray-600">Cadastre-se</p>
              <p className="max-w-xs text-gray-600">Área do profissional</p>
              <p className="max-w-xs text-gray-600">Perguntas frequentes</p>
            </div>

            <div className="space-y-2.5">
              <h2 className="text-2xl">Institucional</h2>
              <p className="max-w-xs text-gray-600">Sobre nós</p>
              <p className="max-w-xs text-gray-600">Termos de uso</p>
              <p className="max-w-xs text-gray-600">Política de privacidade</p>
            </div>
          </div>
          <div></div>
        </footer>
      </div>

    </div>
  );
}
