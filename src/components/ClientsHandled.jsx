import { clientHandled } from "./Service";
import '../css/clientsHandled.css';
import Footer from "./Footer";

const ClientsHandled = () => {
    return(
        <div className="container ClientsHandledWrap">
            <div className="clientWrap">
                {
                    clientHandled.map((clientName, clientIdx) => {
                        return(
                            <p>{clientName.name}</p>
                        )
                    })
                }
            </div>
            <Footer />
        </div>
    )
}

export default ClientsHandled;