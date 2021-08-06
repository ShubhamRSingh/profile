import '../css/Others.css'
import Footer from './Footer';

const Others = () => {
    return(
        <div className="container OthersWrap">
            <div className="EducationWrap">
                <h2>Education</h2>
                <h4>Shree L.R. Tiwari College of Engineering, Mumbai University - <i>B.E.I.T.</i></h4>
                <p>August 2010 - June 2014</p>
            </div>
            <div className="certificationsWrap">
                <h2>CERTIFICATIONS</h2>
                <h4>Monster India Certified Web Technologist - <i>2013.</i></h4>
            </div>
            <div className="coCurrWrap">
                <h2>CO-CURRICULAR ACTIVITIES</h2>
                <ul>
                    <li>Workshop on INFORMATION SECURITY and ETHICAL HACKING.</li>
                    <li>Presented working ROBOT at UTSAV National Technical festival 2012.</li>
                    <li>Student Member of Computer Society of India (CSI) Mumbai Chapter in year 2010-2011.</li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default Others;