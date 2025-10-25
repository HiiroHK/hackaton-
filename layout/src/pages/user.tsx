import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MapPin } from "lucide-react";
import { Aside } from "@/components/aside";

export default function PainelCliente() {
  const servicos = [
    {
      id: 1,
      titulo: "Pintura de Sala e Quartos",
      profissional: "João Silva",
      endereco: "Rua das Flores, 123 - São Paulo, SP",
      data: "2024-01-15",
      valor: 1200,
      status: "Em andamento",
      cor: "bg-blue-600",
    },
    {
      id: 2,
      titulo: "Pintura de Fachada",
      profissional: "Maria Santos",
      endereco: "Av. Direita, 456 - São Paulo, SP",
      data: "2024-01-20",
      valor: 2500,
      status: "Aguardando",
      cor: "bg-yellow-500",
    },
    {
      id: 3,
      titulo: "Pintura Completa do Apartamento",
      profissional: "Carlos Oliveira",
      endereco: "Rua Central, 789 - São Paulo, SP",
      data: "2023-12-10",
      valor: 3800,
      status: "Finalizado",
      cor: "bg-green-600",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Aside />
      {/* Conteúdo principal */}
      <main className="flex-1 p-10 pl-80">
        <h2 className="mb-6 text-2xl font-bold">Painel do Cliente</h2>
        <p className="mb-8 text-gray-600">
          Acompanhe seus serviços e gerencie seus pedidos.
        </p>

        {/* Cards de resumo */}
        <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Serviços Ativos</CardTitle>
            </CardHeader>
            <CardContent className="text-3xl font-bold">2</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Finalizados</CardTitle>
            </CardHeader>
            <CardContent className="text-3xl font-bold">8</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Total Investido</CardTitle>
            </CardHeader>
            <CardContent className="text-3xl font-bold">R$ 12.500</CardContent>
          </Card>
        </div>

        <h3 className="mb-4 text-xl font-semibold">Meus Serviços</h3>

        {/* Lista de serviços */}
        <div className="space-y-4">
          {servicos.map((s) => (
            <Card key={s.id} className="border shadow-sm">
              <CardContent className="p-6">
                <div className="mb-3 flex items-start justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-blue-700">
                      {s.titulo}
                    </h4>
                    <p className="text-sm text-gray-600">
                      Profissional: {s.profissional}
                    </p>
                  </div>
                  <Badge className={`${s.cor} text-white`}>{s.status}</Badge>
                </div>

                <div className="mb-2 flex items-center text-sm text-gray-600">
                  <MapPin size={14} className="mr-2" /> {s.endereco}
                </div>

                <Separator className="my-3" />

                <div className="flex items-center justify-between text-sm">
                  <div>
                    <p className="text-gray-500">Data</p>
                    <p className="font-medium">{s.data}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Valor</p>
                    <p className="font-medium text-blue-700">
                      R${" "}
                      {s.valor.toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                      })}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {s.status === "Em andamento" && (
                      <Button size="sm" variant="secondary">
                        Acompanhar no Mapa
                      </Button>
                    )}
                    {s.status === "Finalizado" && (
                      <Button size="sm" variant="outline">
                        Avaliar
                      </Button>
                    )}
                    <Button size="sm" variant="outline">
                      Ver Detalhes
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
