import React, {useContext, useEffect, useState} from "react";
import { Link } from 'react-router-dom'
import { DataContext } from '../../App'
import './BuildBallot.scss'
import CategoryContainers from '../../components/Categories/CategoryContainers'
import logo from '../../images/MyBallotWA.svg'

function BallotMeasure(){
    const {data} = useContext(DataContext);
    const [ category, setCategory ] = useState([])
   
    useEffect(()=>{
        if(data.Categories !== undefined){
            if(data.Categories[0] !== undefined){
                console.log('data', data.Categories[0])
                setCategory(data.Categories[0])
            }
        }
    }, [data])

    return(
        <div className="ballot-measure">
            <div className="help-container">
              Help 
              <i class="far fa-question-circle"></i>
            </div>

            <img 
              className="logo" 
              src={logo} 
              alt="logo" />
            <h3 className="election-date">ELECTION: November 3, 2020</h3>
            <p className="ballot-measure-instructions">Click to expand view and select the candidates and measures.</p>
            <div className="card-container">

              <CategoryContainers />

              <div className="ballot-bottom-buttons">
                <Link to='/endballot'>
                  <button>Complete myBallot</button>
                </Link>
                <Link 
                  className="star-over-button"
                  to='/startform'>
                  <a>Start Over</a>
                </Link>
              </div>
              
            </div>
        </div>
    )
}

export default BallotMeasure