import React from 'react'

import './Navbar.css'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate()
    return (
        <div id='navbarContainer'>
            <button 
            className='navbarButton' 
            onClick={() => navigate('/')}>
                Home
            </button>
            <button 
            className='navbarButton'
            onClick={() => navigate('/Projects')}>
                Projects
            </button>
            <button 
            className='navbarButton'
            onClick={() => navigate('/Contact')}>
                Contact
            </button>
        </div>
    )
}

export default Navbar