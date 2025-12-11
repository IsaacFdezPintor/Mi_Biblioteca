import './EtiquetaGenero.css';

interface EtiquetaGeneroProps {
  genero: string;
}

export default function EtiquetaGenero({ genero }: EtiquetaGeneroProps) {

  return (
    <span className={`genero`}>
      {/* Mostramos el valor del género recibido por props */}
      {genero}
    </span>
  );
};