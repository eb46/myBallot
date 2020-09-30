import React from 'react'
import './CandidateCard.scss'


function CandidateCard() {
    return (
        <div className='canadate-card-container'>
        <div className='canadate-card'>
            <h1>Canadate Name</h1>
            <p>Prefers Democractic party</p>
            <h2>I am about:</h2>
            <ol>
                <li>Issue</li>
                <li>Issue</li>
                <li>Issue</li>
            </ol>
        </div>
    </div>
    )
}

export default CandidateCard
