import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Briefcase,
  CalendarDays,
  CheckCircle2,
  CircleDollarSign,
  Clock,
  Image as ImageIcon,
  LogOut,
  MapPin,
  Route,
  Settings,
  Star,
  User2,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import * as React from "react";

/* ---------- Tipos ---------- */
type Metric = { label: string; value: string };
type ActiveService = {
  title: string;
  client: string;
  address: string;
  status: "Em andamento" | "Início de serviço" | "Concluído";
};
type Job = {
  title: string;
  client: string;
  desc: string;
  address: string;
  distanceKm: number;
  date: string;
  valueBRL: string;
  available: boolean;
};

/* ---------- Mock Data ---------- */
const metrics: Metric[] = [
  { label: "Trabalhos Disponíveis", value: "12" },
  { label: "Em Andamento", value: "1" },
  { label: "Concluídos", value: "127" },
  { label: "Faturamento", value: "R$ 45.2k" },
];

const active: ActiveService = {
  title: "Pintura de Apartamento Completo",
  client: "João Oliveira",
  address: "Rua Central, 789",
  status: "Em andamento",
};

const nearbyJobs: Job[] = [
  {
    title: "Pintura de Sala e Quartos",
    client: "Carlos Silva",
    desc: "Pintura completa de 2 quartos e 1 sala. Aproximadamente 60m².",
    address: "Rua das Flores, 123",
    distanceKm: 2.3,
    date: "2024-01-18",
    valueBRL: "R$ 1.200,00",
    available: true,
  },
  {
    title: "Pintura de Fachada",
    client: "Maria Santos",
    desc: "Pintura externa de fachada residencial, área aproximada de 120m².",
    address: "Av. Principal, 456",
    distanceKm: 3.8,
    date: "2024-01-20",
    valueBRL: "R$ 2.500,00",
    available: true,
  },
];

/* ---------- Componente ---------- */
export default function Professional(): React.JSX.Element {
  const handleClick = (label: string) => (): void => {
    console.log(`[professional] ${label} clicado`);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
      {/* SIDEBAR */}
      <aside className="h-fit lg:sticky lg:top-4">
        {/* Logo/Marca (opcional) */}
        <div className="mb-4 hidden lg:block">
          <div className="text-lg font-semibold">
            <span className="text-primary">Paint</span>Service
          </div>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <Avatar className="h-12 w-12">
                {/* Coloque uma foto real se tiver URL */}
                <AvatarImage
                  src="https://i.pravatar.cc/120?img=12"
                  alt="Pedro Silva"
                />
                <AvatarFallback>PS</AvatarFallback>
              </Avatar>
              <div>
                <p className="leading-tight font-semibold">Pedro Silva</p>
                <p className="text-muted-foreground text-xs">
                  Pintor Profissional
                </p>
              </div>
            </div>

            {/* Avaliação */}
            <div className="mt-3 flex items-center gap-2">
              <span className="text-sm font-medium">4.9</span>
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < 5 ? "fill-yellow-400 text-yellow-400" : ""
                    }`}
                  />
                ))}
              </div>
              <span className="text-muted-foreground text-xs">(127)</span>
            </div>
          </CardContent>
        </Card>

        {/* Ações & Menu */}
        <div className="space-y-2">
          <Button
            className="w-full"
            onClick={handleClick("Trabalhos Próximos")}
          >
            <Briefcase className="mr-2 h-4 w-4" />
            Trabalhos Próximos
          </Button>

          <nav className="bg-card rounded-xl border">
            <button
              className="hover:bg-muted flex w-full items-center gap-3 px-4 py-3 text-sm"
              onClick={handleClick("Perfil")}
            >
              <Settings className="h-4 w-4" />
              Perfil
            </button>
            <Separator />
            <a href="/">
              {" "}
              <button
                className="hover:bg-muted flex w-full items-center gap-3 px-4 py-3 text-sm text-red-600"
                onClick={handleClick("Sair")}
              >
                <LogOut className="h-4 w-4" />
                Sair
              </button>
            </a>
          </nav>
        </div>
      </aside>

      {/* MAIN */}
      <main>
        {/* Título */}
        <div className="mb-6">
          <h1 className="text-3xl font-extrabold tracking-tight">
            Painel do Profissional
          </h1>
          <p className="text-muted-foreground text-sm">
            Encontre novos trabalhos e gerencie seus serviços
          </p>
        </div>

        {/* Métricas */}
        <section className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m) => (
            <Card key={m.label}>
              <CardHeader className="pb-2">
                <CardDescription>{m.label}</CardDescription>
                <CardTitle className="text-3xl">{m.value}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </section>

        {/* Meus Serviços Ativos */}
        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-bold">Meus Serviços Ativos</h2>
          <Card className="relative overflow-hidden">
            <Badge className="absolute top-3 right-3" variant="secondary">
              {active.status}
            </Badge>

            <CardHeader className="pb-3">
              <CardTitle className="text-xl">{active.title}</CardTitle>
              <CardDescription className="flex items-center gap-1">
                <User2 className="h-4 w-4" />
                <span>Cliente: {active.client}</span>
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="text-muted-foreground flex flex-wrap items-center gap-4 text-sm">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {active.address}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  Status: {active.status}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <Button variant="secondary" onClick={handleClick("Cheguei")}>
                  Cheguei
                </Button>
                <Button onClick={handleClick("Finalizar Serviço")}>
                  Finalizar Serviço
                </Button>
                <Button variant="outline" onClick={handleClick("Enviar Fotos")}>
                  <ImageIcon className="mr-2 h-4 w-4" />
                  Enviar Fotos
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Trabalhos Próximos */}
        <section>
          <h2 className="mb-3 text-2xl font-bold">
            Trabalhos Disponíveis Próximos a Você
          </h2>
          <div className="space-y-4">
            {nearbyJobs.map((job) => (
              <JobCard
                key={job.title}
                job={job}
                onAccept={handleClick(`Aceitar ${job.title}`)}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

/* ---------- Subcomponentes ---------- */
function JobCard({ job, onAccept }: { job: Job; onAccept: () => void }) {
  return (
    <Card className="relative">
      {job.available && (
        <Badge className="absolute top-3 right-3" variant="secondary">
          Disponível
        </Badge>
      )}

      <CardHeader className="pb-3">
        <CardTitle className="text-base">{job.title}</CardTitle>
        <CardDescription className="flex items-center gap-1">
          <User2 className="h-4 w-4" />
          <span>Cliente: {job.client}</span>
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-3">
        <p className="text-muted-foreground text-sm">{job.desc}</p>

        <div className="text-muted-foreground flex flex-wrap items-center gap-4 text-sm">
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            {job.address}, ~ {job.distanceKm.toFixed(1)} km
          </span>

          <span className="inline-flex items-center gap-1">
            <CalendarDays className="h-4 w-4" />
            Data Prevista: {new Date(job.date).toLocaleDateString("pt-BR")}
          </span>

          <span className="inline-flex items-center gap-1">
            <CircleDollarSign className="h-4 w-4" />
            {job.valueBRL}
          </span>
        </div>

        <Separator />

        <div className="flex items-center justify-between">
          <div className="text-muted-foreground flex items-center gap-2 text-xs">
            <Route className="h-4 w-4" />
            <span>Próximo de você</span>
          </div>

          <Button onClick={onAccept}>
            <CheckCircle2 className="mr-2 h-4 w-4" />
            Aceitar Serviço
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
