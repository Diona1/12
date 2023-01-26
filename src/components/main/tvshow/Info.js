import React from 'react'
import { useMovieContext } from '../../../context/MovieContex/MovieContex'
import "./info.scss"

function Info() {
    const { movie } = useMovieContext()
    const { languages, genres, production_companies, first_air_date, last_air_date, seasons, production_countries, number_of_episodes } = movie

    console.log(movie)
    return (
        <div className='info'>
            <div className='genres'>
                {genres?.map((data) => {
                    return (
                        <p key={data.id}>{data.name}</p>
                    )
                })}
            </div>
            <div className='border'>
                <p>Air Date: <span>{first_air_date?.replaceAll("-", "/")}</span></p>
                <p>Last Air Date: <span>{last_air_date?.replaceAll("-", "/")}</span></p>
                <p className='lang'>Languages: <span>{languages}</span></p>
                <p>Number of episoder: <span>{number_of_episodes}</span></p>
            </div>
            <div className="border">
                <p className='title'><span>Seasons: </span></p>
                {seasons?.map((data) => {
                    return (
                        <div key={data.id}>
                            <p>Air date: <span>{data.air_date}</span></p>
                            <p>Name: <span>{data.name}</span></p>
                            <p>Episode count: <span>{data.episode_count}</span></p>
                        </div>
                    )
                })}
            </div>
            <div className='border'>
                <p className='production_companies title'><span>Production companies: </span></p>
                {production_companies?.map((data) => {
                    return (
                        <p key={data.id}>{data.name} {data.origin_country ? <>({data.origin_country})</> : ""}</p>
                    )
                })}
            </div>
            <div style={{ marginTop: "5px" }}>
                <p className='title'><span>Production countries:</span></p>
                {production_countries?.map((data) => {
                    return (
                        <p key={data.id}>{data.name} ({data.iso_3166_1})</p>
                    )
                })}
            </div>
        </div>
    )
}

export default Info