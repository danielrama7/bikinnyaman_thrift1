import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes";

function router() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            element={<route.component />}
            path={route.path()}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default router;
