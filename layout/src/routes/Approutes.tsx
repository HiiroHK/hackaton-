import { Home } from "@/pages/home";
import PainelCliente from "@/pages/user";
import { BrowserRouter, Route, Routes } from "react-router";

export function Approutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<PainelCliente />} />
      </Routes>
    </BrowserRouter>
  );
}
