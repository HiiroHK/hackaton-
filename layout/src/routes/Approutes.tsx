import Home from "@/pages/home";
import Professional from "@/pages/professional";
import { BrowserRouter, Route, Routes } from "react-router";

export function Approutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/professional" element={<Professional />} />
      </Routes>
    </BrowserRouter>
  );
}
