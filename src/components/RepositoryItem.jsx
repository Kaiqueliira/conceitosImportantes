export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props.repository.name ?? "Default"}</strong>
            <p>
                {props.repository.description ?? "AAAAAA"}
            </p>
            <a href={props.repository.link ?? "#"}>Acessar Repositório</a>
        </li>
    )
}