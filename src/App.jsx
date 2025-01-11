import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Home } from "./Home";

import { Container } from "./components/Header";
import { Ministery } from "./Ministery";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/trabalho/ministery" Component={Ministery} />
          </Routes>
        </main>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
