import React, { useState }from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Ferrari']);

    // const handleAdd = (e) => {
        // let newArr = categories.slice(0, categories.length);
        // newArr.push('Naruto');
        // setCategories(newArr);

        // setCategories([...categories, 'Naruto']);
    // };

    return (
        <>
            <h2>Gif App</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key = {category}
                            category={category} 
                        />
                    ))
                }
            </ol>
        </>
    )
}

export default GifExpertApp

