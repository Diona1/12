import React, { useState, useEffect } from 'react'
import axios from 'axios';
import PopularData from './PopularData';
import "./popular.scss"

function Popular() {
    const API = "https://api.themoviedb.org/3/person/popular?api_key="
    const API_KEY = "917c387c9e20da3ba121bafdd8e7df79"
    const [popular, setPopular] = useState([])
    useEffect(() => {
        try {
            axios.get(`${API}${API_KEY}`)
                .then((data) => {
                    setPopular(data.data.results)
                });
        } catch (error) {
            console.log("Error in API", error)
        }
    }, []);
    
    return (
        <div className='container'>
            <div className="title-settings-box">
                <h1 className='title'><span className='sharp'>#</span> Popular Actors</h1>
            </div>
            <PopularData popular={popular} />
        </div>
    )
}

export default Popular