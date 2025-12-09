import React, { useState } from 'react';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { SongList } from './components/CancionLista/CancionLista';
import { CancionDetalle } from './components/CancionDetalles/CancionDetalles';

import { CancionForm } from './components/CancionForm/CancionForm';
// ⬅️ Importamos la interfaz Song
import { type Cancion } from './types/Cancion';
// ⬅️ Importamos los datos iniciales
import { INITIAL_SONG_DATA } from './data/initialSongs'; 

import './App.css';

function App() {
  // --- ESTADOS COMPARTIDOS ---
  // 1. Estado de la lista de canciones. Usamos la constante importada.
  const [songs, setSongs] = useState<Cancion[]>(INITIAL_SONG_DATA); // ⬅️ CAMBIO AQUÍ

  // 2. Estado del elemento seleccionado
  const [selectedSong, setSelectedSong] = useState<Cancion | null>(null);

  // Función Callback: Añadir canción
  const handleAddSong = (titulo: string, artista: string, genero: string) => {
    const newSong: Cancion = {
      id: Date.now(),
      titulo,
      artista,
      genero
    };
    setSongs([...songs, newSong]);
  };

  // Función Callback: Seleccionar canción
  const handleSelectSong = (song: Cancion) => {
    setSelectedSong(song);
  };

  // Función Callback: Cerrar panel
  const handleCloseDetail = () => {
    setSelectedSong(null);
  };

  return (
    <div className="app-container">
      <Header />
      
      <main className="main-content">
        <div className="left-column">
          <CancionForm onAgregarCancion={handleAddSong} />
          <SongList canciones={songs} onSelectSong={handleSelectSong} />
        </div>
        
        <div className="right-column">
          <CancionDetalle cancion={selectedSong} onCerrar={handleCloseDetail} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;