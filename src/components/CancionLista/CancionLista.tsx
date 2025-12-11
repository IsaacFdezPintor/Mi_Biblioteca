import type { Cancion } from "../../types/Cancion";
import EtiquetaGenero from "../EtiquetaGenero/EtiquetaGenero";

// Importamos useState y useEffect, hooks de React.
// useState → crea estado dentro del componente.
// useEffect → ejecuta efectos cuando algo cambia.
import { useState, useEffect } from "react";

interface CancionListaProps {
  // Array de canciones que se va a mostrar.
  canciones: Cancion[];
  // Función que se ejecutará cuando se seleccione una canción de la lista.
  onSelectSong: (cancion: Cancion) => void;
}

const CancionLista = ({ canciones, onSelectSong }: CancionListaProps) => {

  // Estado local para guardar la cantidad de canciones.
  // Empezamos con 0.
  const [conteoCanciones, setConteoCanciones] = useState(0);

  // useEffect se ejecuta después de renderizar el componente.
  // En este caso, cada vez que el array 'canciones' cambie,
  // actualizamos el conteo de canciones.
  useEffect(() => {
    // Guardamos la cantidad actual de canciones en el estado.
    setConteoCanciones(canciones.length);
    // Dependencia: solo se re-ejecuta cuando 'canciones' cambia.
  }, [canciones]);

  return (
    <div>
      <h2>Mi Biblioteca ({conteoCanciones} Canciones)</h2>

      <ul>
        {canciones.map((c) => (
          // Llama a 'onSelectSong' al hacer clic para notificar al padre.
          <li onClick={() => onSelectSong(c)}>
            {c.titulo} - {c.artista} - <EtiquetaGenero genero={c.genero} />        
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CancionLista;