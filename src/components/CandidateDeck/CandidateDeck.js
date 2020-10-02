import React from 'react'
import CandidateCard from '../CandidateCard/CandidateCard'
import './CandidateDeck.scss'

function CandidateDeck({cardData, categoryName}) {
    const candidates = cardData.Candidates

    console.log('cardData', cardData)

    let candidateMap =[];

    if(candidates !== undefined){
        candidateMap = candidates.map((candidate)=>(
            <CandidateCard candidate={candidate} categoryName={categoryName} position={cardData.BallotTitle}/>
        ))
    }

    return (
        <div className='candidate-card-container'>
            {candidateMap}    
        </div>
       
    )
}

export default CandidateDeck
