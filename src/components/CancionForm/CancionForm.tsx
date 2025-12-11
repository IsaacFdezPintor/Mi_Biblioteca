
import { useState, type ChangeEvent, type FormEvent } from "react";
import "./CancionForm.css";
import type { Cancion } from "../../types/Cancion";
import Boton from "../Boton/Boton";

interface CancionFormProps {
  onAgregarCancion: (cancion: Cancion) => void;
}

// Componente funcional del formulario.
function CancionForm({ onAgregarCancion }: CancionFormProps) {

  // Estados para cada campo del formulario.
  // Se guardan los valores conforme el usuario escribe.
  const [titulo, setTitulo] = useState("");
  const [artista, setArtista] = useState("");
  const [genero, setGenero] = useState("");

  // Maneja el envío del formulario.
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    // Evita que la página se recargue al enviar el formulario.
    e.preventDefault();

    // Validamos que los campos tengan texto real (no solo espacios).
    if (
      titulo.trim().length > 0 &&
      artista.trim().length > 0 &&
      genero.trim().length > 0
    ) {

      // Creamos un objeto Cancion con los valores actuales.
      const nuevaCancion: Cancion = {
        titulo: titulo.trim(),
        artista: artista.trim(),
        genero: genero.trim()
      };

      // Llamamos a la función del padre para agregar la canción a la lista general.
      onAgregarCancion(nuevaCancion);

      // Limpiamos los inputs para dejarlos listos para otra canción.
      setTitulo("");
      setArtista("");
      setGenero("");
    }
  }

  // Cada una de estas funciones actualiza el estado correspondiente
  // mientras el usuario va escribiendo.

  function handleTituloChange(e: ChangeEvent<HTMLInputElement>) {
    setTitulo(e.currentTarget.value);
  }

  function handleArtistaChange(e: ChangeEvent<HTMLInputElement>) {
    setArtista(e.currentTarget.value);
  }

  function handleGeneroChange(e: ChangeEvent<HTMLInputElement>) {
    setGenero(e.currentTarget.value);
  }

  // Render del formulario
  return (
    <>
      <h4>Agregar nueva canción</h4>

      <form onSubmit={handleSubmit} className="cancion-form">

        <input
          type="text"
          placeholder="Título"
          value={titulo}           // El valor del input viene del estado
          onChange={handleTituloChange} // Cada cambio actualiza el estado
          required                 // El campo debe estar lleno antes de enviar
        />

        <input
          type="text"
          placeholder="Artista"
          value={artista}
          onChange={handleArtistaChange}
          required
        />

        <input
          type="text"
          placeholder="Género"
          value={genero}
          onChange={handleGeneroChange}
          required
        />

        <button type="submit">Agregar canción</button>
        <Boton texto="Limpiar" estilo="rojo" onClick={()=>{}} />
      </form>
    </>
  );
}

export default CancionForm;