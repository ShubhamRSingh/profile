//import {companyDetails} from './Service';
import '../css/Experience.css';
import Footer from './Footer';

const Experience = (props) => {
    const companyKadata = props.compnyDetails;
    return(
        <div className="container ExperienceWrap">
            <h2>Experience</h2>
            {
                companyKadata.map((cmpny, idx) =>{
                    return(
                        <div key={idx} className="companyDetails">
                            <div className="companyName">
                                <h3>{cmpny.name},&nbsp;</h3>
                                <h3>{cmpny.location}-&nbsp;</h3>
                                <p>&nbsp;<i>{cmpny.position}</i></p>
                            </div>
                                <a rel="noopener noreferrer" href={cmpny.siteUrl}  target="_blank">{cmpny.siteUrl}</a>
                            <p>{cmpny.tenureStart} - {cmpny.tenureEnd}</p>
                        </div>
                    )
                })
            }
            <Footer />
        </div>
    )
}

export default Experience;