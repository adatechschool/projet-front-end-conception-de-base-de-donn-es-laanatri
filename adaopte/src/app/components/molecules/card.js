export default function card({text}) {
    return (
        <div className="cards">
            <p>{text.icon}</p>
            <p>{text.title}</p>
            <p>{text.paragraphe}</p>
        </div>
    )
}