import React, {useState} from 'react';

const Dashboard = ({balls, setBalls, strikes, setStrikes}) => {
  

    const handleBall = () => {
        balls > 3 ? setBalls(0) : setBalls(balls + 1)
    }
    const handleStrike = () => {
        strikes > 2 ? setStrikes(0) : setStrikes(strikes + 1) 
    }
    const handleFoul = () => {
        strikes === 0 ? setStrikes(strikes + 1) : setStrikes(strikes + 2)
    }
    const handleHit = () => {
        setStrikes(0)
        setBalls(0)
    }

    return (
        <div>
            <button onClick = {handleBall}>Ball</button>
            <button onClick = {handleStrike}>Strike</button>
            <button onClick = {handleFoul}>Foul</button>
            <button onClick = {handleHit}>Hit</button>
        </div>
    )

}

export default Dashboard;