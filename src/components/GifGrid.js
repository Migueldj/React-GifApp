// import React, { useState, useEffect } from 'react'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ( {category} ) => {

    const {data: images , loading} = useFetchGifs( category );

    // const [images, setImages] = useState([]);

    // useEffect( ()=> {
    //     getGifs(category)
    //         // .then( imgs => setImages( imgs ))
    //         .then( setImages )
    // }, [category] )

    
    return (
        <>
            <h3 className="animate__animated animate__bounceIn">{category}</h3>
            
            {loading && <p>Loading</p>}

            <div className="card-grid">
            
                {
                    images.map( ( img ) => 
                        <GifGridItem
                        key={img.id}
                        {...img}
                        />
                    )
                }
            </div>
        </>
        
    )
}
