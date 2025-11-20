import type { Entrada } from "../types/entrada";
import PostCard from "./PostCard";
import "./CategoryPosts.css";

interface CategoryPostsProps {
    entradas: Entrada[]
}

function CategoryPosts({entradas} : CategoryPostsProps) {
    return (<div className="category-posts">
            <h3>Más sobre React</h3>
            <div className="category-posts__list">
                {
                    entradas.map((entrada) => <PostCard key={entrada.id} entrada={entrada}/>)
                }
                
            </div>
        </div>);
};

export default CategoryPosts;