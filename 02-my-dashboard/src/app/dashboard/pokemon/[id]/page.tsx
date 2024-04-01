
interface Props {
    params: { id: string };
};

export default function PokemonPage({ params }: Props) {

    const { id } = params

    return (
        <div>
            <h1>Pokemon {id}</h1>
        </div>
    );
}