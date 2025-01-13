import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Home } from "./Home";
import { Ministery } from "./Ministery";
import { Done } from "./Done";
import { Evolium } from "./Evolium";
import { Tradulo } from "./Tradulo";
import { Contact } from "./Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" Component={Home} />
            <Route
              path="/trabalho/ministerio-do-planeamento"
              Component={Ministery}
            />
            <Route path="/trabalho/feito-em-angola" Component={Done} />
            <Route path="/trabalho/evolium" Component={Evolium} />
            <Route path="/trabalho/tradu-lo" Component={Tradulo} />
            <Route path="/contacto" Component={Contact} />
          </Routes>
        </main>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
