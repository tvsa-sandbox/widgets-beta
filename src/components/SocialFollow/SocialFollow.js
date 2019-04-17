import React from "react";
import { Link } from "gatsby";

const SocialFollow = () => (
    <aside className="SocialFollow WhiteLabel">
        <div className="SocialFollow__MiniHeroContainer WhiteLabel">
            <Link to="/" className="SocialFollow__MiniHero WhiteLabel">
                <picture>
                    <source media="(min-width: 0px) and (max-width: 414px)" srcSet="./static/aspect-ratio-images/16x9-Graphic1-258x145.jpg" />
                    <source media="(min-width: 415px) and (max-width: 768px)" srcSet="./static/aspect-ratio-images/16x9-Graphic2-716x403.jpg" />
                    <source media="(min-width: 769px)" srcSet="./static/aspect-ratio-images/16x9-Graphic2-414x233.jpg" />
                    <img className="SocialFollow__Image WhiteLabel" src="./static/aspect-ratio-images/16x9-Graphic2-414x233.jpg" alt="Test"/>
                </picture>
            </Link>
        </div>
        <div className="SocialFollow__ShareContainer WhiteLabel">
            <span className="SocialFollow__ShareCopy WhiteLabel">
                Te invitamos a seguirnos en nuestras redes
            </span>
            <div className="SocialFollow__ShareBar WhiteLabel">
                <div className="SocialFollow__ShareBarDesktop WhiteLabel">
                    <a className="SocialFollow__ShareBarLink Icn_Facebook WhiteLabel" href="https://www.facebook.com/GameTimeOf/" target="_blank" rel="noopener noreferrer" title="">
                        <p className="Display">
                            facebook
                        </p>
                    </a>
                    <a className="SocialFollow__ShareBarLink Icn_Instagram WhiteLabel" href="https://www.instagram.com/gametimeof/"  target="_blank" rel="noopener noreferrer" title="">
                        <p className="Display">
                            instagram
                        </p>
                    </a>
                    <a className="SocialFollow__ShareBarLink Icn_Twitter WhiteLabel" href="https://twitter.com/@GameTimeOf" target="_blank" rel="noopener noreferrer" title="">
                        <p className="Display">
                            twitter
                        </p>
                    </a>
                </div>
                <button className="SocialFollow__ShareBarTrigger Icn_ArrowShare WhiteLabel" type="button">
                    <span className="SocialFollow__ShareBarTriggerText WhiteLabel">
                        Compartir
                    </span>
                </button>
            </div>
        </div>
        <div className="SocialFollow__Ads WhiteLabel">
            <div className="Banner WhiteLabel">
                <img src="http://via.placeholder.com/365x287" alt="test"/>
            </div>
        </div>
    </aside>
);

export default SocialFollow;
