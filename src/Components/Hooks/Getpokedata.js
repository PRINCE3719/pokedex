// Hooks/Getpokedata.js
import { useState, useEffect } from 'react';

const useGetPokemonData = () => {
    const [pokemonData, setPokemonData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const[selected,setselected] = useState(null)
    const itemsPerPage = 25; 

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${itemsPerPage}&offset=${(currentPage - 1) * itemsPerPage}`);
                const data = await response.json();
                const pokemonList = await Promise.all(data.results.map(async (pokemon) => {
                    const detailedResponse = await fetch(pokemon.url);
                    const detailedData = await detailedResponse.json();
                    return detailedData;
                }));
                setPokemonData(pokemonList);
               
                setTotalPages(Math.ceil(100 / itemsPerPage));
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchPokemon();
    }, [currentPage]);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const Selectedpokemon = (url)=>{
        
    }

    return { pokemonData, currentPage, totalPages, handlePageChange };
};

export default useGetPokemonData;
