import { CancionCard } from '../CancionCard/CancionCard';
import { type Cancion } from '../../types/Cancion'; 
import './CancionLista.css';

interface CancionListaProps {
  // Ahora usamos el tipo 'Cancion' importado correctamente.
  canciones: Cancion[];
  onSelectSong: (song: Cancion) => void;
}

// 4. Componente Funcional (Simplificando el React.FC)
export const SongList = ({ canciones, onSelectSong }: CancionListaProps) => {
  return (
    <div className="list-container">
      <h2>Biblioteca ({canciones.length})</h2>
      <div className="scroll-area">
        {canciones.map((cancion) => (
          <CancionCard 
            key={cancion.id} 
            cancion={cancion} 
            onSelect={onSelectSong} 
          />
        ))}
      </div>
    </div>
  );
};