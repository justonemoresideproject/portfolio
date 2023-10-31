import React from 'react'
import './Home.css'

function Home() {
    return (
        <div id='homeContainer' className='componentContainer routeContainer'>
            {/* <div className='intro'>
            Hello my name is...
            </div> */}
            <div id='nameTitle'>
                Austin Ellis
            </div>
            <div id='jobTitle'>
                Software Engineer
            </div>
            <div id='jobDescription'>
                Committed, focused and motivated software engineer always on the lookout for more knowledge and unique challenges.
            </div>
        </div>
    )
}

export default Home;