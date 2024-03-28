import React from 'react';
import Getpokedata from './Hooks/Getpokedata';
import Footer from './Footer';
import {  useNavigate } from 'react-router-dom';
import Header from './Header';

const Main = () => {
    const { pokemonData, currentPage, totalPages, handlePageChange } = Getpokedata();
    const navigate = useNavigate();

    const viewPokemonDetails = (pokemon) => {
     
        navigate(`/details/${pokemon.name}`);
    };

    return (
        <>
        <Header/>
            <div className='p-12 flex flex-wrap justify-between'>
                {pokemonData.map((item, index) => (
                    <div key={index} className="card card-compact w-80 bg-base-100 shadow-xl z-10 m-2">
                        <div className='flex justify-center'><img src={item.sprites.front_default} alt={item.name} width={140}/></div>
                        <div className="card-body">
                            <h2 className="card-title">{item.name}</h2>
                            <p>Type: {item.types.map(data => data.type.name).join(', ')}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary" onClick={() => viewPokemonDetails(item)}>View</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Footer
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </>
    );
};

export default Main;
