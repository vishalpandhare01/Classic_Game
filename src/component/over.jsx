import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import OverMusic from "../music/game_over.mp3"


function Over() {
    const navigate = useNavigate()
    const [get_score, setScore] = useState("")
    let score = localStorage.getItem("Score")
    useEffect(() => {
        setScore(score)
    })

    function playagain() {
        localStorage.clear()
        navigate("/")
    }

    
    useEffect(() => {
        const handleContextmenu = e => {
            e.preventDefault()
        }
        document.addEventListener('contextmenu', handleContextmenu)
        return function cleanup() {
            document.removeEventListener('contextmenu', handleContextmenu)
        }
    }, [ ])

    return (
        <>
            <h2 style={{ marginTop: "10em" , fontWeight:"bold" }}><center> GAME OVER</center></h2>
            <audio controls autoPlay preload="none" style={{ visibility: "hidden" }}>
                <source src={OverMusic} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            <div className="card">
                <div className="card-body">
                    <h3 id="score">YOUR SCORE {get_score}</h3>
                </div>
            </div>
            <button id="start" className="btn btn-success" onClick={playagain}>Play Again</button>
        </>
    )
}

export default Over