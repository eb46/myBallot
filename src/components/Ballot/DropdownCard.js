import React, {useContext} from 'react'
import './DropdownCard.scss'
import { DataContext } from '../../App'

function DropdownCard({races, handleDropCardClick, clickedName}) {
    const { ballot, setBallot } = useContext(DataContext);

    console.log(ballot)
    
    let cName = clickedName.split(" ").join('') 
    let ballotArray = ballot[cName]

    console.log('ballotArray', ballotArray)

    // let ballotFilter = ballotArray.filter((candidate) => candidate.position === races.Name)

    // console.log('ballotFilter', ballotFilter)

    return(
        <div className='dropdown-card'>
            <div className='card-img'>
                <i class="fas fa-user-circle"></i>
                <p>No Position</p>
                <p>Selected</p>
            </div>
            <div className='card-body'>
                <h1 className="race-title">
                    {races.Name}
                </h1>
                <h1 className="selected">
                        Placeholder text
                </h1>
                <button
                    className="select-position-button"
                    onClick={()=> handleDropCardClick(races)}
                    >
                    Select Position
                    
                </button>
            </div>
        </div>
    )
}

export default DropdownCard