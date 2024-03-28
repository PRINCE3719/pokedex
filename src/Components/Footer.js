
import React from 'react';

const Footer = ({ currentPage, totalPages, onPageChange }) => {

  



    

    return (
        <div className='flex justify-center'>
            <div className="join">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        className={`join-item btn ${currentPage === index + 1 ? 'btn-active' : ''}`}
                        onClick={() => onPageChange(index + 1)}>
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
           
       
    )

        
                }

export default Footer;
