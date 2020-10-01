import React, {useState} from 'react'
import './Candidate.scss'

import CandidateDeck from '../../components/CandidateDeck/CandidateDeck'

function Candidate() {
    const [ isDisplay, setIsDisplay ] = useState(true)

    const handleDisplayClick = () =>{
        setIsDisplay(false)
    }

    let display = isDisplay ? '' : 'slide-down'

    return (
        <div className='Candidate'>
            <div className= {`candidate-modal-bottom ${display}`}>
                <div className='exit-icon-container' onClick=       {handleDisplayClick}>
                    <i class="far fa-times-circle"></i>
                </div>
                <h1>City Council</h1>
                <h1>District 4</h1>
                <p>Candidates</p>

                <CandidateDeck />

            </div>
        </div>
    )
}

export default Candidate
