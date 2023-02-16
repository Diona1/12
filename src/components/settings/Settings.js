import React from 'react'
import Navbar from "../navbar/Navbar"
import user from "../../assets/user-not-downloaded.jpg"
import Footer from "../footer/Footer"
import "./settings.scss"
import ImageSize from './ImageSize'
import SliderSpeed from './SliderSpeed'
import ThemeColor from './ThemeColor'

function Settings() {

    return (
        <>
            <Navbar />
            <div className='container'>
                <div className="settings-container">
                    <div className="set-title">
                        <h1>
                            <span>#</span>
                            Settings
                        </h1>
                        <img width="30px" height="30px" src={user} alt="user photo" />
                    </div>
                    <p className='info'>You can set the settings for yourself in this <br /> section you can make it comfortable.</p>
                    <ul className='settings'>
                        <li>
                            <ImageSize />
                        </li>
                        <li>
                            <SliderSpeed />
                        </li>
                        <li>
                            <ThemeColor />
                        </li>
                    </ul>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Settings