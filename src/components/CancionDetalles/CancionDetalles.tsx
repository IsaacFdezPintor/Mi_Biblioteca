// Importamos 'useState', que es la herramienta de React que nos permite crear memoria
import { useState } from 'react'; 
// Importamos el tipo 'Cancion', que describe cómo es un objeto canción.
import { type Cancion } from '../../types/Cancion';
import Boton from '../Boton/Boton';
import './CancionDetalles.css';
import EtiquetaGenero from '../EtiquetaGenero/EtiquetaGenero';

interface CancionDetalleProps {
  // 'cancion' puede ser un objeto Cancion... o null si no hay una canción seleccionada.
  cancion: Cancion | null;
  
  // 'onCerrar' es una función que se ejecutará cuando se quiera cerrar el panel
  onCerrar: () => void;
}

export default function CancionDetalle ({ cancion, onCerrar }: CancionDetalleProps) {

    // Creamos un estado local llamado 'reproducciones'.
    // 'useState(0)' significa que empezamos con valor 0.
    // 'setReproducciones' sirve para actualizar ese valor.
    // Este valor solo existe mientras el componente esté montado.
    const [reproducciones, setReproducciones] = useState(0);

    // Si no hay ninguna canción seleccionada, se muestra un mensaje
    if (!cancion) return <p>Selecciona una canción para ver los detalles</p>;

    // Si sí hay canción, se muestra la interfaz completa.
    return (
     <div className="panel">
      <h2>💿 Ahora suena</h2>

      <div className="contenido">
        <h1>{cancion.titulo}</h1>

        <h3>{cancion.artista}</h3>

        

        {/* Componente visual que muestra el género */}
        <EtiquetaGenero genero={cancion.genero} />        

        <div className="reproducciones">
            {/* Muestra cuántas veces se ha pulsado "Reproducir" durante esta sesión */}
            <p>Veces escuchada en esta sesión: <strong>{reproducciones}</strong></p>
            
            {/* Botón para sumar una reproducción.
                Cada vez que se pulsa, setReproducciones(actual + 1)
                vuelve a renderizar el componente con el número actualizado. */}
            <Boton  
                texto="▶ Reproducir" 
                onClick={() => setReproducciones(reproducciones + 1)} 
                estilo="azul" 
            />
            
            {/* Botón para cerrar los detalles, ejecuta la función que viene por props. */}
            <Boton 
              texto="Cerrar Detalle"  
              onClick={onCerrar} 
              estilo="rojo" 
            />
        </div>
      </div>
    </div>
  );
};