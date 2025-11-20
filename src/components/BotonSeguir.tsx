import { useState } from "react";
import './BotonSeguir.css';

function BotonSeguir() {
    const [siguiendo, setSiguiendo] = useState(false);

    function handleClick() {
        setSiguiendo(!siguiendo);
    }

    return (
    <button className={siguiendo ? "boton-seguir boton-seguir-siguiendo" : "boton-seguir"} onClick={handleClick}>
        <span className="boton-seguir-mensaje">{ siguiendo ? "Siguiendo" : "Seguir"}</span>
        { siguiendo && <span className="boton-seguir-mensaje-dejar">Dejar de seguir</span>}
    </button>
        );
}

export default BotonSeguir;