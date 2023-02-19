import React, { useEffect, useReducer } from 'react'
import { Button, ConfigProvider, Drawer, Space } from 'antd';
import { AiOutlineHeart, AiOutlineInfoCircle, AiOutlineStar } from 'react-icons/ai';
import { RxShare1 } from 'react-icons/rx';
import { reducer } from '../../../assets/reducer';
import { useMovieContext } from '../../../context/MovieContex/MovieContex';
import Role from './Role';

function Right({ actor }) {
    const { colorState } = useMovieContext()
    const initialState = {
        info: false
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    const { name, birthday, biography, place_of_birth } = actor;

    const allInfo = () => {
        dispatch({ type: "OPEN_TRUE" })
    };

    const onClose = () => {
        dispatch({ type: "OPEN_FALSE" })
    };

    // USER SHARED THIS INFO
    const sharedData = {
        title: `Share Actor - ${name}`,
        text: `${name}`,
        url: window.location
    }

    const share = () => {
        navigator.share(sharedData)
    }

    useEffect(() => {
        document.title = `Actor - ${name}`
    });

    return (
        <div className="right">
            <h1>{name}</h1>
            {birthday ? <p className='birthday'>Birthday: {birthday?.replaceAll("-", "/")}</p> : ""}
            {place_of_birth ? <p className='birthday'>{place_of_birth}</p> : ""}
            {biography ? <p>{biography?.slice(0, 500)}</p> : ""}
            {state.info ? <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: colorState.color
                    }
                }}
            >
                <Drawer
                    title={name}
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
                    <Role />
                </Drawer>
            </ConfigProvider> : ""}
            <div className="events-box">
                <AiOutlineHeart className='events' />
                <AiOutlineStar className='events' />
                <AiOutlineInfoCircle className='events allInfo' onClick={allInfo} />
                <RxShare1 className='events' onClick={share} />
            </div>
        </div>
    )
}

export default Right