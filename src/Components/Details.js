import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Details = () => {
    const { pokemonId } = useParams();
    const [pokemonData, setPokemonData] = useState(null);
    const [sliced, setsliced] = useState([]);

    useEffect(() => {
        const fetchPokemonData = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
                const data = await response.json();
                console.log(data);
                setPokemonData(data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };



        fetchPokemonData();
    }, [pokemonId]);

    useEffect(() => {
        if (pokemonData && pokemonData.moves) {
            const Moves = [...pokemonData.moves];
            const New = Moves.slice(0, 4);
            setsliced(New);
        }
    }, [pokemonData]);






    return (
        <div className='flex justify-center py-14 w-100'>
            {pokemonData && (
                <div className="card card-compact w-96 bg-neutral text-neutral-content shadow-xl">
                    <div className='flex justify-center'>
                        <img src={pokemonData.sprites.front_default} alt={pokemonData.name} width={150} />
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">{pokemonData.name}</h2>
                        <p><b>Type:</b> {pokemonData.types.map(data => data.type.name).join(', ')}</p>
                        <p><b>Abilities:</b> {pokemonData.abilities.map(a => a.ability.name).join(", ")}</p>
                        <p><b>Height:</b> {pokemonData.height}m</p>
                        <p><b>Weight:</b> {pokemonData.weight}kg</p>
                        <p><b>Moves:</b> {sliced.map(m => m.move.name).join(", ")}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">
                                <Link to='/'>Home</Link></button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Details;
