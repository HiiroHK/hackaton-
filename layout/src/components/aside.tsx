import { Home, LogOut } from "lucide-react";
import { Button } from "./ui/button";

export function Aside() {
  return (
    <aside className="fixed top-0 flex h-full w-64 flex-col justify-between border-r bg-white p-6">
      <div>
        <h1 className="mb-8 text-2xl font-bold text-blue-700">
          Painting Services
        </h1>
        <nav className="space-y-3">
          <Button variant="secondary" className="w-full justify-start gap-2">
            <Home size={18} /> Painel
          </Button>

          <Button variant="ghost" className="w-full justify-start">
            Perfil
          </Button>
        </nav>
      </div>
      <a href="/">
        <Button
          variant="destructive"
          className="mt-6 w-full justify-start gap-2"
        >
          <LogOut size={18} /> Sair
        </Button>
      </a>
    </aside>
  );
}
