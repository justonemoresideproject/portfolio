import React from 'react'

import './Navbar.css'

function Navbar() {
    return (
        <div className='navbarContainer'>
            <div>
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
                    Resume
                </button>
            </div>
            <div>
                <button>
                    Contact
                </button>
            </div>
        </div>
    )
}

export default Navbar