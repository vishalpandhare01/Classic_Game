import { useEffect } from "react"
import { Link } from "react-router-dom"

function Home() {
    
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
            <div id="gif">
                <img className="p-4" id="goku" src="https://1b-f.s3.eu-west-1.amazonaws.com/a/81518-F1F0A524-B564-4FAF-931D-D7188DCA80B5-0-1497881519.gif" width="30%" alt="img" /><br /><br />
                <Link to={"/main"}><button className="btn btn-dark p-4">PLAY NOW</button></Link><br/>
                 <Link to={"/"}>@ vishal pandhare</Link>
            </div>

        </>
    )
}

export default Home