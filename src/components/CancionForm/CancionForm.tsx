import { useState } from 'react';
import { Boton } from '../Boton/Boton';
import './CancionForm.css';

interface CancionFormProps {
  // onAgregarCancion: Esta es la función CALLBACK que el Padre (App.tsx) nos pasa.
  // La llamaremos para enviar los datos recogidos.
  onAgregarCancion: (titulo: string, artista: string, genero: string) => void; 
}

export const CancionForm = ({ onAgregarCancion }: CancionFormProps) => {
  
  // El formulario solo gestiona el texto que el usuario está tecleando.
  const [titulo, setTitulo] = useState('');
  const [artista, setArtista] = useState('');
  const [genero, setGenero] = useState('');

  // 4. Manejador de Envío (La Lógica Central)
  const manejarEnvio = (e: React.FormEvent) => {
    e.preventDefault(); // Detiene la recarga de la página.
    
    // Si los campos obligatorios están llenos...
    if (titulo && artista) {
      onAgregarCancion(titulo, artista, genero); 
      setTitulo('');
      setArtista('');
      setGenero('');
    }
  };

  return (
    <div className="panel">
      <h3>Añadir Nueva Canción</h3>
      <form onSubmit={manejarEnvio}> 
        <input  type="text"  placeholder="Título de la canción"  value={titulo}  onChange={(e) => setTitulo(e.target.value)} />
        <input type="text" placeholder="Artista" value={artista}  onChange={(e) => setArtista(e.target.value)} />
        <select value={genero} onChange={(e) => setGenero(e.target.value)}>
           <option value="">Selecciona género</option>
           <option value="Rock">Rock</option>
           <option value="Jazz">Jazz</option>
           <option value="Pop">Pop</option>
        </select>
        <Boton texto="Guardar Canción" onClick={() => {}} estilo="azul" />
      </form>
    </div>
  );
};