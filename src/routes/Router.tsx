import Layout from "@/layout/Layout";
import Contactpage from "@/pages/Contactpage";
import Homepage from "@/pages/Homepage";
import NotFound from "@/pages/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" index element={<Homepage />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
