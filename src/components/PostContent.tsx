import type { Entrada } from "../types/entrada";

interface PostContentProps {
    entrada : Entrada
};

function PostContent( {entrada} : PostContentProps) {
    return (<div className="post-content">
  <h2 className="post-content__title">{entrada.titular}</h2>
  <img className="post-content__image" alt={entrada.titular} src={entrada.imagen} />
  <p className="post-content__text">{entrada.cuerpo}</p>
</div>)
}

export default PostContent;