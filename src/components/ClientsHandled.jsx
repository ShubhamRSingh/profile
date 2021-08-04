import { clientHandled } from "./Service";
import '../css/clientsHandled.css';

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
        </div>
    )
}

export default ClientsHandled;