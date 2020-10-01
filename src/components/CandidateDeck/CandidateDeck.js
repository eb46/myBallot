import React from 'react'
import CandidateCard from '../CandidateCard/CandidateCard'
import './CandidateDeck.scss'

function CandidateDeck() {
    return (
        <div className='candidate-card-container'>
            <CandidateCard />
            <CandidateCard />
            <CandidateCard />
            <CandidateCard />
            <CandidateCard />
            <CandidateCard />
            <CandidateCard />
        </div>
       
    )
}

export default CandidateDeck
