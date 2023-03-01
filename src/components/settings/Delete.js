import { deleteUser } from 'firebase/auth';
import React from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext/AuthContext';

function Delete({ hide }) {
    const { currentUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleDeleteAccount = () => {
        deleteUser(currentUser).then(() => {
            console.log("Account deleted!")
            navigate("/")
        }).catch((error) => {
            console.log("error")
        });
    }
    return (
        <>
            <div className='deletePopover'>
                <button onClick={hide}>Cencel</button>
                <button onClick={handleDeleteAccount}>Delete</button>
            </div>
        </>
    )
}

export default Delete