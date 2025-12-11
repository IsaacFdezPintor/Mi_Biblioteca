import { useState } from "react";
import { canciones } from "./data/Canciones";
import type { Cancion } from "./types/Cancion";

// Importación de los componentes usados en la interfaz principal.
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CancionForm from "./components/CancionForm/CancionForm";
import CancionLista from "./components/CancionLista/CancionLista";
import CancionDetalle from "./components/CancionDetalles/CancionDetalles";
import "./App.css";

const App = () => {
  // Estado para el tema visual de la app.
  // Solo puede ser 'claro' o 'oscuro'. Inicia en 'claro'.
  const [tema, setTema] = useState<'claro' | 'oscuro'>('claro');

  // Función que alterna entre ambos temas.
  const cambioTema = () => {
    setTema(prevTema => (prevTema === 'claro' ? 'oscuro' : 'claro'));
  };


  // Lista de canciones. useState inicia con las canciones importadas.
  const [listaCanciones, setListaCanciones] = useState<Cancion[]>(canciones);

  // Canción seleccionada para ver sus detalles.
  // Empieza en null porque al inicio no hay ninguna seleccionada.
  const [selectedSong, setCancionSeleccionada] = useState<Cancion | null>(null);

  // Determina la clase CSS que se aplicará según el tema actual.
  const claseTema = tema === 'claro' ? 'tema-claro' : 'tema-oscuro';

  const newCancion = (nuevaCancion: Cancion) => {
    // Creamos una nueva lista copiando la anterior (...listaCanciones)
    // y agregando la nueva al final.
    setListaCanciones([...listaCanciones, nuevaCancion]);
  };

  return (
    // Contenedor principal de la app, con el tema aplicado dinámicamente.
    <div className={`app-container ${claseTema}`}>

      {/* Botón que alterna entre tema claro y oscuro. */}
      <button 
        onClick={cambioTema}
        style={{
          position: 'absolute', 
          top: '10px', 
          right: '10px', 
          padding: '8px 15px'
        }}
      >
        {tema === 'claro' ? 'Oscuro ' : 'Claro '}
      </button>

      <Header />

      <main className="main-content">
        
        <div className="columnaderecha">
          {/* Formulario para agregar nuevas canciones */}
          <CancionForm onAgregarCancion={newCancion} />

          {/* Lista de canciones con función para seleccionar una */}
          <CancionLista 
            canciones={listaCanciones} 
            onSelectSong={setCancionSeleccionada} 
          />
        </div>

        <div className="columnaizquierda">
          {/* Vista de detalles de la canción seleccionada */}
          <CancionDetalle 
            cancion={selectedSong} 
            onCerrar={() => setCancionSeleccionada(null)} 
          />
        </div>

      </main>

      {/* Pie de página */}
      <Footer />
    </div>
  );
};

export default App;