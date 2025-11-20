import type { Autor } from "../types/autor";
import BotonSeguir from "./BotonSeguir";
import "./AuthorInfo.css";

interface AuthorInfoProps {
    autor : Autor
}

export default function AuthorInfo({autor} : AuthorInfoProps) {
    return (<div className="author-info">
            <h3>Sobre el autor</h3>
            <img alt={`Avatar de ${autor.nombre}`} src={autor.foto} />
            <p>{autor.nombre}</p>
            <p><BotonSeguir /></p>
        </div>);
};