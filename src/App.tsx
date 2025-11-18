import { entradas } from "./data/entradas";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import type { Entrada } from "./types/entrada";
import BlogPost from "./components/BlogPost.tsx";

const App = () => {
  const entrada: Entrada = entradas[0];

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <BlogPost entrada={entrada} />
      </main>
      <Footer />
    </div>
  );
};

export default App;