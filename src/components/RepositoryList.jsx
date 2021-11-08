import { Increment } from "./Increment";
import { RepositoryItem } from "./RepositoryItem";

const item = [
    {
        name: "Kaique",
        description: 'asdasdasdadasdsad',
        link: 'http://google.com.br'
    },
]
export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>
            <ul>
                {item.map(i => <RepositoryItem repository={i} />)}
            </ul>
            <Increment />
        </section>
    )
}