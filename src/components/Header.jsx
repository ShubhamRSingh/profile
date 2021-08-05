import {Link} from "react-router-dom";

import '../css/Header.css';
import {pageDetails} from './Service';
import { useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    // console.log("abc", location);

    const burgerMenuClickHandler = (e) => {
        //debugger;
        e.currentTarget.classList.toggle("open");
        const targetMenu = e.currentTarget.parentElement
        targetMenu.classList.toggle("headerOpen");
    }

    const menuLinkClickHandler = (e) => {
        // debugger;
        // console.log();
        let targetHeader =  e.currentTarget.offsetParent;
        targetHeader.classList.toggle('headerOpen');
        let openMenu = document.querySelector('.HeaderWrap ul');
        openMenu.nextElementSibling.classList.toggle('open');
    }

    return(
            <div className="HeaderWrap">
                <ul>
                    {
                        pageDetails.map((pageValue, pageIdx) => {
                            return (
                                <li key={pageIdx} className={location.pathname === pageValue.pageUrl ? 'active' : ''}><Link onClick={menuLinkClickHandler} to={pageValue.pageUrl}>{pageValue.pageName}</Link></li>
                            )
                        })
                    }
                </ul>
                <div id="menu-toggle" className="onlyMob" onClick={burgerMenuClickHandler}>
                    <div className="bar bar1"></div>
                    <div className="bar bar2"></div>
                    <div className="bar bar3"></div>
                </div>
            </div>
    )
}
export default Header;