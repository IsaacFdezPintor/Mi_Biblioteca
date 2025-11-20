import "./TagCloud.css"

interface TagCloudProps {
    etiquetas: string[]
}
function TagCloud({etiquetas} : TagCloudProps) {
    return (
        <div className="tag-cloud">
            <h3>Etiquetas</h3>
            <div className="tag-cloud__container">
                {
                    etiquetas.map((etiqueta) => <span key={etiqueta}>#{etiqueta}</span>)
                }
            </div>
        </div>
    );
}

export default TagCloud;