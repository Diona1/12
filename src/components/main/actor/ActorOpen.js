import axios from 'axios'
import "./actors.scss"
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from "../../footer/Footer"
import BannedContent from "../../BannedContent/BannedContent"
import Navbar from '../../navbar/Navbar'
import { Image } from 'antd'
import { initial } from '../../../assets/reducer'

function ActorOpen() {
    const { actorId } = useParams()
    const API = "https://api.themoviedb.org/3/person/"
    const API_KEY = "917c387c9e20da3ba121bafdd8e7df79"
    const [actor, setActor] = useState([])
    const [actorImage, setActorImage] = useState([])
    useEffect(() => {
        try {
            axios.get(`${API}${actorId}?api_key=${API_KEY}`)
                .then((data) => {
                    setActor(data.data)
                })
        } catch (error) {
            console.log("API Error", error)
        }
    }, [])

    useEffect(() => {
        try {
            axios.get(`${API}${actorId}/images?api_key=${API_KEY}`)
                .then((data) => {
                    setActorImage(data)
                    console.log(data)
                })
        } catch (error) {
            console.log("API Error", error)
        }
    }, [])

    const { adult, birthday, biography, name, place_of_birth, profile_path, gender } = actor

    return (
        <div>
            {!adult ? <>
                <Navbar />
                <div className="bg-image"
                    style={{
                        opacity: "1",
                        backgroundImage: `url("https://image.tmdb.org/t/p/${initial.size}/${profile_path}")`
                    }}
                >
                    <div className="bg-color">
                        <div className='container'>
                            <div className="actor-box">
                                <div className="left">
                                    <Image
                                        width="100px"
                                        src={`https://image.tmdb.org/t/p/${initial.size}/${profile_path}`}
                                    />
                                </div>
                                <div className="right">
                                    <h1>{name}</h1>
                                    <p className='birthday'>{birthday?.replaceAll("-", " ")}</p>
                                    <p className='birthday'>{place_of_birth}</p>
                                    <p>{biography}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </> : <>
                <BannedContent />
                <Footer />
            </>}
        </div>
    )
}

export default ActorOpen