import React from 'react'

function DropdownCard() {
    return(
        <div className='dropdown-card'>
            <div className='card-img'>
                <i class="fas fa-user-circle"></i>
            </div>
            <div className='card-body'>
                <h1>Canadate Name</h1>
                <p>Prefers Democractic party</p>
                <h2>I am about:</h2>
                <ol>
                    <li>1. Issue</li>
                    <li>2. Issue</li>
                    <li>3. Issue</li>
                </ol>
                <button>ADD TO BALLOT</button>
                <button>LEARN MORE</button>
            </div>
        </div>
    )
}

export default DropdownCard