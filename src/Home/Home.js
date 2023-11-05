import React from 'react'
import './Home.css'

function Home() {
    return (
        <div id='homeContainer' className='componentWrapper routeContainer'>
            {/* <div className='intro'>
            Hello my name is...
            </div> */}
            <div id='titleContainer'>
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
            <div id='gameContainer'>

            </div>
        </div>
    )
}

export default Home;