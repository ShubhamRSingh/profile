import { about, basicDetails } from "./Service";
import '../css/Home.css';

const Home = () => {
    return(
        <div className="container HomeWrap">
            <div className="NameWrap">
                <h1>{basicDetails.name}</h1>
                <h3>{basicDetails.position}</h3>
                <div className="">(+91) <a href={'tel:+91'+basicDetails.Mobile1}>{basicDetails.Mobile1}</a> / <a href={'tel:+91'+basicDetails.Mobile2}>{basicDetails.Mobile2}</a></div>
                <a href={"mailto:"+basicDetails.Email}>{basicDetails.Email}</a>
            </div>

            <div className="aboutSection">
                <h2>Profile</h2>
                <ul>
                {
                    about.map((aboutDeatils, aboutIdx)=>{
                        return(
                            <li key={aboutIdx}>{aboutDeatils.desc}</li>
                        )
                    })
                }
                </ul>
            </div>
        </div>
    )
}

export default Home;