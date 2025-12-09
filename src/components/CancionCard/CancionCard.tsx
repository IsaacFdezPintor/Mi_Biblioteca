import { Boton } from '../Boton/Boton';
import { type Cancion } from '../../types/Cancion'; // Importación de tipo con 'type'
import './CancionCard.css';

// 1. Definición de Propiedades (Props)
// Define las propiedades que el componente necesita.
interface CancionCardProps {
  // Objeto con los datos de la canción.
  cancion: Cancion;
  
  // Función que se ejecutará para seleccionar esta canción.
  onSelect: (cancion: Cancion) => void;
}

// 2. Definición del Componente (Nombre corregido a CancionCard)
// Recibe las props y las desestructura.
export const CancionCard = ({ cancion, onSelect }: CancionCardProps) => {
  return (
    <div className="cancion-card">
      <div className="cancion-info">
        <h3>{cancion.titulo}</h3>
        <span>{cancion.artista}</span>
      </div>
      
      <Boton texto="Ver Detalle" 
        
        // 3. Comunicación al Padre (Callback)
        // Llama a la función 'onSelect' prestada por el padre,
        // devolviendo el objeto 'cancion' actual.
        onClick={() => onSelect(cancion)} 
        
        estilo="gris" // Usa el estilo 'gris' definido en Boton.tsx
      />
    </div>
  );
};

export default CancionCard;