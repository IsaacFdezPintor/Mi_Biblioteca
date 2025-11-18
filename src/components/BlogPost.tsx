import type { Entrada } from "../types/entrada";
import Comments from "./Comments";
import PostContent from "./PostContent";

interface BlogPostProps {
    entrada : Entrada
};

function BlogPost( {entrada} : BlogPostProps) {
    return (
    <article className="blog-post">
        <PostContent entrada={entrada} />
        <Comments comentarios={entrada.comentarios} />
    </article>)
}

export default BlogPost;