import Link from 'next/link';
import { SimplePokemon } from '../interfaces/simple-pokemon';
import Image from 'next/image';
import { IoHeartOutline } from 'react-icons/io5';

interface Props {
    pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {

    const { id, name } = pokemon;


    return (
        <div className="mx-auto right-0 mt-2 w-60">
            <div className="bg-white rounded overflow-hidden shadow-lg ">
                <div className="flex flex-col items-center justify-center p-6 bg-gray-800 border-b relative">

                    <span className='text-white absolute right-1 top-1 w-[45px] h-[45px] border border-gray-500 rounded-sm p-[2px] flex items-center justify-center'>#{id}</span>
                    <Image

                        key={id}
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                        alt={name}
                        width={100}
                        height={100}
                        priority={false}
                    />
                    <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{name}</p>

                    <div className="mt-5">
                        <Link
                            href={`/dashboard/pokemon/${name}`}
                            className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                        >
                            Ver Pókemon
                        </Link>
                    </div>
                </div>
                <div className="border-b">
                    <Link href="/dashboard/main" className="px-4 py-2 hover:bg-gray-100 flex items-center">
                        <div className="text-red-600">
                            <IoHeartOutline size={20} />
                        </div>
                        <div className="pl-3">
                            <p className="text-sm font-medium text-gray-800 leading-none">                                No es favorito
                            </p>
                            <p className="text-xs text-gray-500">Añadelo a tu colección</p>
                        </div>
                    </Link>

                </div>
            
            </div>
        </div>
    )
}