import type { Entrada } from "../types/entrada";
import PostCard from "./PostCard";
import "./RelatedPosts.css"

interface RelatedPostsProps {
    entradasRelacionadas : Entrada[]
}

function RelatedPosts( {entradasRelacionadas} : RelatedPostsProps) {
    return (<section className="related-posts">
        <h3>Noticias relacionadas</h3>
        <div className="related-posts__list">
            {entradasRelacionadas.map(entrada => <PostCard key={entrada.id} entrada={entrada} />)}
        </div>
    </section>);
}

export default RelatedPosts;