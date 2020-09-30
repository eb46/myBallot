import React, {useState} from 'react'
import './Referendum.scss'

function Referendum() {
    const [ approved, setApproved ] = useState(false)
    const [ rejected, setRejected ] = useState(false)
    const [ isDisplay, setIsDisplay ] = useState(true)

    const handleDisplayClick = () =>{
        setIsDisplay(false)
    }

    const handleApproveClick = ()=> {
        setApproved(!approved)
        if( approved !== rejected) {
            setRejected(false)
        }
    }

    const handleRejectClick = ()=>{
        setRejected(!rejected)
        if( rejected !== approved){
            setApproved(false)
        }
    }

    const handleCancelClick = () =>{
        setApproved(false)
        setRejected(false)
    }

    let display = isDisplay ? '' : 'slide-down'

    return (
        <div className='Referendum'>
            <div className={`modalBottom ${display}`}>
                <div className='exit-icon-container' onClick={handleDisplayClick}>
                    <i class="far fa-times-circle"></i>
                </div>
                <h1>Referendum Measure No.90</h1>
                <p>The legislature passed Engrossed Substitute Senate Bill 5395 concerning comprehensive sexual health education. 

                This bill would require school districts to adopt or develop, consistent with state standards, comprehensive age-appropriate sexual health education, as defined, for all students, and excuse students if their parents request.
                </p>
                <div  className='choice-container'>
                    <p>Should this bill be:</p>
                    <div className='choice-toggle'>
                        {approved? <i onClick={handleApproveClick} class="far fa-dot-circle"></i> : <i onClick={handleApproveClick} class="far fa-circle"></i>}
                        <p>Approved</p>
                    </div>
                    <div className='choice-toggle'>
                        {rejected ? <i onClick={handleRejectClick} class="far fa-dot-circle"></i> : <i onClick={handleRejectClick} class="far fa-circle"></i>}
                        <p>Rejected</p>
                    </div>
                    <div className='confirm-button-container'>
                        <button>Confirm My Choice</button>
                    </div>
                </div>
                <p>Campaign Contributions</p>
                <p>Full Text</p>
            </div>
        </div>
    )
}

export default Referendum
