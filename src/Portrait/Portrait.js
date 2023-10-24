import React from 'react'
import './Portrait.css'

function Portrait() {
    return (
        <div id='portraitContainer'  className='componentContainer'>
            <img className='portraitImg' src='../logo.svg'/>
            <div className='downloadContainer'>
                <div>
                    Downloads
                </div>
                <div className='portraitButtonContainer'>
                    <button>
                        Resume
                    </button>
                    <button>
                        Cover Letter
                    </button>
                </div>
            </div>
        </div>
    )
}


export default Portrait