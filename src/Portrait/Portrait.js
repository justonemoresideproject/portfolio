import React from 'react'
import './Portrait.css'

import logo from '../logo.svg'

function Portrait() {
    return (
        <div id='portraitContainer'  className='componentContainer'>
            <img className='portraitImg' src={logo}/>
            <div id='downloadContainer'>
                <button>
                    Resume.docx
                </button>
                <button>
                    Cover Letter.docx
                </button>
            </div>
        </div>
    )
}


export default Portrait