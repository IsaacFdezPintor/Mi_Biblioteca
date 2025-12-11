import Boton from '../Boton/Boton';
import { type Cancion } from '../../types/Cancion'; 
import './CancionCard.css';
import EtiquetaGenero from '../EtiquetaGenero/EtiquetaGenero';

interface CancionCardProps {

  // 'cancion' es el objeto que contiene toda la información
  // (titulo, artista, genero, etc.) que mostrará esta tarjeta.
  cancion: Cancion;

  // 'onSelect' es una función que viene desde el componente padre.
  // Se usa para notificarle qué canción ha sido seleccionada.
  // Le pasaremos un objeto Cancion cuando se pulse el botón.
  onSelect: (cancion: Cancion) => void;
}

export const CancionCard = ({ cancion, onSelect }: CancionCardProps) => {
  return (
    <div className="cancion-card">
      <div className="cancion-info">
        <h3>{cancion.titulo}</h3>
        <span>{cancion.artista}</span>
        <EtiquetaGenero genero={cancion.genero} />        
        
      </div>
      
      <Boton 
        texto="Ver Detalle"
        
        // Comunicación al Padre (Callback):
        // Al hacer clic, ejecutamos la función 'onSelect' que vino como prop,
        // y le devolvemos el objeto 'cancion' actual para que el padre
        // sepa qué canción fue seleccionada.
        onClick={() => onSelect(cancion)} 
        estilo="rojo"
      />
    </div>
  );
};

export default CancionCard;