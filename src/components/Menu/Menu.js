import React from "react";
import { Link } from "gatsby";
import { withPrefix } from "gatsby";


const Menu = () => (
    <div className="Menu WhiteLabel">
        <div className="Menu__Wrapper">
            <div className="Menu__LogoContainer WhiteLabel">
                <Link to="/">
                    <img className="Menu__Logo WhiteLabel" src={withPrefix("/static/aspect-ratio-images/wl_1x1-220x220.png")} alt=""/>
                </Link>
            </div>
            <div className="Menu__LinksContainer WhiteLabel">
                <div className="Menu__Links WhiteLabel">
                    Links
                </div>
            </div>
            <div className="Menu__DynamicContainer WhiteLabel">
                <a href="https://televisa-digital.github.io/whitelabel/" target="__blank">
                    <img className="Menu__DynamicLogo WhiteLabel" src={withPrefix("/static/aspect-ratio-images/1x1-220x220_document.png")} alt=""/>
                </a>
            </div>
        </div>
    </div>
);

export default Menu;
