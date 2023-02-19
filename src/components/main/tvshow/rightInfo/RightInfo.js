import React from 'react'
import "./rightInfo.scss"
import { Button, ConfigProvider, Drawer, Space } from 'antd';
import { AiOutlineHeart, AiOutlineInfoCircle, AiOutlineStar } from 'react-icons/ai';
import Info from '../Info';
import { RxShare1 } from 'react-icons/rx';
import { reducer } from '../../../../assets/reducer';
import { useReducer } from 'react';
import { useMovieContext } from '../../../../context/MovieContex/MovieContex';

function RightInfo({ show }) {
    const { colorState } = useMovieContext()
    const initialState = {
        info: false
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    const { original_title, first_air_date, status, overview, production_countries, episode_run_time, name } = show;
    
    // GET THE PRODUCTION COUNTRIES WITH ARRAY
    const countries = production_countries || []
    const first = countries[0]?.iso_3166_1

    // OPEN ALL INFO MOVIE
    const allInfo = () => {
        dispatch({ type: "OPEN_TRUE" })
    }

    // CLOSE INFO PAGE
    const onClose = () => {
        dispatch({ type: "OPEN_FALSE" })
    };

    // USER SHARE THIS DATA
    const sharedData = {
        title: `Share Movie - ${name}`,
        text: `Watch the movie "${name}" via the link below.`,
        url: window.location
    }

    const share = () => {
        navigator.share(sharedData)
    }
    return (
        <>
            <div className="right-info">
                <h1>{original_title ? original_title : name}</h1>
                <div className='right-info-small'>
                    {first_air_date ? <p>{first_air_date?.replaceAll("-", "/")} ({first})</p> : ""}
                    {status ? <p>{status}</p> : ""}
                    {episode_run_time ? <p>Run time: {episode_run_time}min</p> : ""}
                </div>
                <div className="right-overview-box">
                    <p>{overview?.slice(0, 220)}</p>
                </div>
                {state.info ? <ConfigProvider
                    theme={{
                        token: {
                            colorPrimary: colorState.color
                        }
                    }}
                >
                    <Drawer
                        title={original_title ? original_title : name}
                        onClose={onClose}
                        width={800}
                        open={state.info}
                        placement={"bottom"}
                        extra={
                            <Space>
                                <Button type="primary" onClick={onClose}>
                                    OK
                                </Button>
                            </Space>
                        }
                    >
                        <Info show={show} />
                    </Drawer>
                </ConfigProvider> : ""}
                <div className="events-box">
                    <AiOutlineHeart className='events' />
                    <AiOutlineStar className='events' />
                    <AiOutlineInfoCircle className='events allInfo' onClick={allInfo} />
                    <RxShare1 className='events' onClick={share} />
                </div>
            </div>
        </>
    )
}

export default RightInfo