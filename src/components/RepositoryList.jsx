import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';

const item = [
    {
        name: "Kaique",
        description: 'asdasdasdadasdsad',
        link: '#'
    },
    {
        name: "Kaique",
        description: 'asdasdasdadasdsad',
        link: '#'
    },
    {
        name: "Kaique",
        description: 'asdasdasdadasdsad',
        link: '#'
    },
]
export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>
            <ul>
                {item.map(i => <RepositoryItem repository={i} />)}
            </ul>
        </section>
    )
}