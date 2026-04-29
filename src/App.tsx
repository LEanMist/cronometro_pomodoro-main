import { Home } from "./pages/Home";
import { Exemplo } from "./components/Exemplo";

import "./styles/global.css";
import "./styles/theme.css";

export function App() {
  return (
    <>
      <Exemplo>
        Conteudo do exemplo
      </Exemplo>
      <Home />
    </>
  );
}