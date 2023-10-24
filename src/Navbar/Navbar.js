import React from 'react'

import './Navbar.css'

function Navbar() {
    return (
        <div id='navbarContainer' className='componentContainer'>
            <button className='navbarButton'>
                Home
            </button>
            <button className='navbarButton'>
                Projects
            </button>
            <button className='navbarButton'>
                Contact
            </button>
            {/* <div>
                <button>
                    Home
                </button>
            </div>
            <div>
                <button>
                    Projects
                </button>
            </div>
            <div>
                <button>
                    Contact
                </button>
            </div> */}
        </div>
    )
}

export default Navbar