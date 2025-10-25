import { Home } from "@/pages/home";
import { BrowserRouter, Route, Routes } from "react-router";

export function Approutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
