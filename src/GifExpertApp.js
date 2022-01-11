import React,{useState} from 'react';
import AddCategory from './Components/AddCategory';
import Gifgrid from './Components/GifGrid';


const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['Ejemplos']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />
            <ol>
                {
                    categories.map(category => (
                        <Gifgrid 
                            key={category} 
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    );
}
 
export default GifExpertApp;