import {Link} from "react-router-dom";

import '../css/Header.css';
import {pageDetails} from './Service';
import { useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    // console.log("abc", location);
    return(
            <div className="HeaderWrap">
                <ul>
                    {
                        pageDetails.map((pageValue, pageIdx) => {
                            return (
                                <li key={pageIdx} className={location.pathname === pageValue.pageUrl ? 'active' : ''}><Link to={pageValue.pageUrl}>{pageValue.pageName}</Link></li>
                            )
                        })
                    }
                </ul>
            </div>
    )
}
export default Header;