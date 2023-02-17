import heroImg from "../images/hero.png"
import viianImg from "../images/villan.png"
import startMusic from "../music/start.mp3"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


function Main() {
    const [disabled, setDisabled] = useState(false)
    const navigate = useNavigate()

    let SCORE = 0
    // hero movement
    function move() {
        setDisabled(true)
        let num = 0;
        const id = setInterval(frame, 100);
        function frame() {
            if (num === 90) {
                clearInterval(id);
                SCORE++
                document.getElementById("score").innerHTML = `SCORE - ${SCORE}`
                start()
                move()
            } else {
                num++;
                this.hero.style.left = `${num}%`
            }
        }
    }

    // restartgame
    function start() {
        let hero = document.getElementById("hero")
        let villan = document.getElementById("villan")
        hero.style.left = "0%"
        villan.style.left = "100%"
        return ""
    }


    // hero jump and down
    function jumpup() {
        let hero = document.getElementById("hero")
        hero.style.bottom = "25%"
        setTimeout(jumpdown, 2000)
    }
    function jumpdown() {
        let hero = document.getElementById("hero")
        hero.style.bottom = "3%"
        return ""
    }

    // villan movement
    function villanmove() {
        let num = 90
        const id = setInterval(frame, 50);
        function frame() {
            if (num === 0) {
                clearInterval(id);
                villanmove()
            } else {
                num--;
                this.villan.style.left = `${num}%`
            }
            let hero = document.getElementById("hero").getBoundingClientRect();
            let villan = document.getElementById("villan").getBoundingClientRect();
            function touching(d1, d2) {
                let ox = Math.abs(d1.x - d2.x) < (d1.x < d2.x ? d2.width : d1.width);
                let oy = Math.abs(d1.y - d2.y) < (d1.y < d2.y ? d2.height : d1.height);
                return ox && oy;
            }
            var touch = touching(hero, villan) // should return whether they are touching
            if (touch) {
                localStorage.setItem("Score", SCORE)
                navigate("/over")
            }


        }
    }


    const gameStart = () => {
        villanmove()
        move()
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
            <div className="container">
                <div id="hero">
                    <img src={heroImg} alt="" className="img-1" />
                </div>
                <div id="villan">
                    <img src={viianImg} alt="" className="img-2" />
                </div>
                <button className="btn btn-outline-dark p-3" id="run" onClick={gameStart} disabled={disabled}>Run</button>
                <button className="btn btn-outline-dark p-3" id="jump" onClick={jumpup} >jump</button>
            </div>
            <audio controls autoPlay preload="none" style={{ visibility: "hidden" }}>
                <source src={startMusic} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            <div className="card">
                <div className="card-body">
                    <h3 id="score">SCORE 0</h3>
                </div>
            </div>
        </>
    )
}

export default Main