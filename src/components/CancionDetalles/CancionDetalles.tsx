
//Es la herramienta que nos permite añadir memoria los componentes funcionales.
import { useState } from 'react'; 
import { type Cancion } from '../../types/Cancion';
import { Boton } from '../Boton/Boton';
import './CancionDetalles.css';

interface CancionDetalleProps {
  // Es un objeto 'Cancion' si hay algo seleccionado, o 'null' si el panel está vacío.
  cancion: Cancion | null;
  
  // Función que hace pueda establecer 'Cancion' a null).
  onCerrar: () => void;
}

export const CancionDetalle = ({ cancion, onCerrar }: CancionDetalleProps) => {
  
  // - 'reproducciones' es la variable de estado actual (inicializada a 0).
  // - 'setReproducciones' es la función que usamos para actualizar el valor.
  const [reproducciones, setReproducciones] = useState(0);


  if (!cancion) {
    return <div className="cancion-vacia">Selecciona una canción para ver detalles</div>;
  }

  return (
    <div className="panel">
      <h2>💿 Ahora suena</h2>
      <div className="contenido">
        {/* Lectura de las props (estado global) */}
        <h1>{cancion.titulo}</h1>
        <h3>{cancion.artista}</h3>
        <span className="genero">{cancion.genero || 'Sin género'}</span>
        
        <div className="reproducciones">
            <p>Veces escuchada en esta sesión: <strong>{reproducciones}</strong></p>
            
            <Boton  texto="▶ Reproducir" 
                // Esto SOLO afecta a este componente.
                onClick={() => setReproducciones(reproducciones + 1)} 
                estilo="azul" 
            />
            
             <Boton texto="Cerrar Detalle"  onClick={onCerrar} estilo="rojo" 
            />
        </div>
      </div>
    </div>
  );
};