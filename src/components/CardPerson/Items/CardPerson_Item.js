import React from "react";
import { Link } from "gatsby";

const CardPerson_Item = props => (
    <div className="CardPerson__ThumbContainer WhiteLabel" id={props.id}>
        <div className="CardPerson WhiteLabel">
            <div className="CardPerson__Card WhiteLabel">
                <div className="CardPerson__Avatar WhiteLabel">
                    <picture>
                        <source media="(min-width: 0px) and (max-width: 414px)" srcSet="./static/aspect-ratio-images/3x4-225x301.jpg" />
                        <source media="(min-width: 415px) and (max-width: 768px)" srcSet="./static/aspect-ratio-images/3x4-320x426.jpg" />
                        <source media="(min-width: 769px)" srcSet="./static/aspect-ratio-images/3x4-414x552.jpg" />
                        <img className="CardPerson__Image WhiteLabel" src="./static/aspect-ratio-images/3x4-414x552.jpg" alt="Test" />
                    </picture>
                    <div className="CardPerson__ShareBar WhiteLabel">
                        <div className="CardPerson__ShareBarDesktop WhiteLabel">
                            <a className="CardPerson__ShareBarLink Icn_Facebook WhiteLabel" href="https://www.facebook.com/GameTimeOf/" target="_blank" rel="noopener noreferrer" title="">
                                <p className="Display">
                                    Facebook
                                </p>
                            </a>
                            <a className="CardPerson__ShareBarLink Icn_Instagram WhiteLabel" href="https://www.instagram.com/gametimeof/">
                                <p className="Display">
                                    Instagram
                                </p>
                            </a>
                            <a className="CardPerson__ShareBarLink Icn_Twitter WhiteLabel" href="https://twitter.com/@GameTimeOf">
                                <p className="Display">
                                    Twitter
                                </p>
                            </a>
                            <a className="CardPerson__ShareBarLink Icn_Email WhiteLabel" href="https://twitter.com/@GameTimeOf">
                                <p className="Display">
                                    Email
                                </p>
                            </a>
                        </div>
                        <button className="CardPerson__ShareBarTrigger Icn_ArrowShare WhiteLabel" type="button">
                            <span className="CardPerson__ShareBarTriggerText WhiteLabel">
                                <p className="Display">
    								Share Icon
                                </p>
                            </span>
                        </button>
                    </div>
                </div>
                <div className="CardPerson__Names WhiteLabel">
                    <h2 className="CardPerson__Name WhiteLabel">
                        Mandzukic marca el gol de la ventaja en tiempo extra,Francia-Croacia Final Rusia
                    </h2>
                    <Link to="/" className="CardPerson__BioLink WhiteLabel">
                        Ver Más
                    </Link>
                </div>
            </div>
        </div>
    </div>
);

export default CardPerson_Item;
