import { projectDetails } from "./Service";
import '../css/Projects.css'
import Footer from "./Footer";

const Projects = () => {
    return(
        <div className="container ProjectsWrap">
            <h2>projects</h2>
                <div className="projectSubWrap">
                    {
                        projectDetails.map((prjctDetails, prjctid)=>{
                            return (
                                <div className="prjctWrap" key={prjctid}>
                                    <h3><span>Project Name:</span> {prjctDetails.name}</h3>
                                    <a href={prjctDetails.clientUrl}>{prjctDetails.clientUrl}</a>
                                    <p>{prjctDetails.techUsed}</p>
                                </div>
                            )
                        })
                    }
                </div>
            <Footer />
        </div>
    )
}

export default Projects;