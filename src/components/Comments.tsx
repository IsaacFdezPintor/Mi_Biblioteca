import type { Comentario } from "../types/comentario";

interface CommentsProps {
    comentarios : Comentario[];
}

function Comments({comentarios} : CommentsProps) {
    return <section className="comments">
    <h3>Comentarios</h3>
    <ul>
        {comentarios.map(comentario => 
        <li><strong>{comentario.nombreUsuario}:</strong>{comentario.texto}</li>)}
    </ul>
    </section>
}

export default Comments;