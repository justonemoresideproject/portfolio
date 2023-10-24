import React from 'react'
import './Portrait.css'

import logo from '../logo.svg'

function Portrait() {
    return (
        <div id='portraitContainer'  className='componentContainer'>
            <img className='portraitImg' src={logo}/>
            <div className='downloadContainer'>
                <div>
                    Downloads
                </div>
                <div className='portraitButtonContainer'>
                    <button>
                        Resume.docx
                    </button>
                    <button>
                        Cover Letter.docx
                    </button>
                </div>
            </div>
        </div>
    )
}


export default Portrait