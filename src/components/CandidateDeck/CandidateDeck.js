import React from 'react'
import CandidateCard from '../CandidateCard/CandidateCard'
import './CandidateDeck.scss'

function CandidateDeck({cardData, categoryName}) {
    const candidates = cardData.Candidates

    let candidateMap =[];

    if(candidates !== undefined){
        candidateMap = candidates.map((candidate)=>(
            <CandidateCard candidate={candidate} categoryName={categoryName}/>
        ))
    }

    return (
        <div className='candidate-card-container'>
            {candidateMap}    
        </div>
       
    )
}

export default CandidateDeck
