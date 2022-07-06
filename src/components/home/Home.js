import Article from "../Article"
import home from "../../assets/home.png"
import "../../assets/css/Home.css"

function Home(){
    return(
        <main>
            <div style={{display:"flex", justifyContent:"center", alignItems:"center"}} className="home-img">
                <img src={home} style={{borderRadius:20}} alt="illustration page d'accueil"/>
                <div></div>
                <span>Chez vous, partout et ailleurs</span>
            </div>
            <Article/>
        </main>
    )
}

export default Home