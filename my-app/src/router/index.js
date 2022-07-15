import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutUser from "../components/Layout";
import Informasi_Akun from "../pages/Informasi_Akun";
import Informasi_Akun1 from "../pages/Informasi_Akun/Informasi_Akun1";
import Informasi_Akun2 from "../pages/Informasi_Akun/Informasi_Akun2";
import { routes } from "./routes";

function router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutUser />}>
          {routes.map((route, index) => (
            <Route
              key={index}
              element={<route.component />}
              path={route.path()}
            />
          ))}
        </Route>
        <Route element={<Informasi_Akun />} path={"/informasiAkun"}>
          <Route element={<Informasi_Akun1 />} path={"/informasiAkun"} />
          <Route element={<Informasi_Akun2 />} path={"/informasiAkun/akun2"} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default router;
