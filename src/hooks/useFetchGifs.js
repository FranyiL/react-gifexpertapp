import {getGif} from './../helpers/getGifs';
import React,{useState, useEffect} from 'react';

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        louding: true
    })
    useEffect(() => {
        getGif(category)
            .then( imgs => {

                setState({
                    data: imgs,
                    louding: false
                });

            });
    }, [category]);
    return state;
}
