import React, { Component } from "react";
import { Link } from "gatsby";
import Orca from "orcaslide";

class HighImpactJustifiedLeft_Slider extends Component {
    componentDidMount() {
        Orca.config = {
            arrowPrevious: "#arrow_previous2",
            arrowNext: "#arrow_next2",
            contentItem: "#swipe2",
            time: 1,
            jump: 16,
        };
    }
    render() {
        return (
            <section className="HighImpactJustifiedLeft__Slider WhiteLabel">
                <div className="HighImpactJustifiedLeft__SliderArrow-Previous WhiteLabel">
                    <button className="HighImpactJustifiedLeft__SliderButton Icn_ArrowLeft WhiteLabel" id="arrow_previous2" type="button">
                        <span className="Display">
                            Previous Arrow
                        </span>
                    </button>
                </div>
                <div className="HighImpactJustifiedLeft__SliderTrack WhiteLabel">
                    <div className="HighImpactJustifiedLeft__SliderThumbnails WhiteLabel" id="swipe2">
                        <div className="HighImpactJustifiedLeft__SliderThumbContainer WhiteLabel" >
                            <Link to="/" className="HighImpactJustifiedLeft__SliderItem WhiteLabel">
                                <div className="HighImpactJustifiedLeft__SliderItemThumbnail WhiteLabel">
                                    <div className="HighImpactJustifiedLeft__SliderItemImageContainer WhiteLabel">
                                        <picture>
                                            <source media="(min-width: 0px) and (max-width: 414px)" srcSet="./static/aspect-ratio-images/16x9-Graphic1-414x233.jpg" />
                                            <source media="(min-width: 415px) and (max-width: 768px)" srcSet="./static/aspect-ratio-images/16x9-Graphic1-716x403.jpg" />
                                            <source media="(min-width: 769px)" srcSet="./static/aspect-ratio-images/16x9-Graphic1-820x461.jpg" />
                                            <img alt="test" src="./static/aspect-ratio-images/16x9-Graphic1-414x233.jpg" className="HighImpactJustifiedLeft__SliderItemImage WhiteLabel" />
                                        </picture>
                                    </div>
                                    {/* OPTIONAL */}
                                    <div className="HighImpactJustifiedLeft__SliderItemVideoContainer WhiteLabel">
                                        <div className="HighImpactJustifiedLeft__SliderItemVideo WhiteLabel">
                                            AQUI VA UN VIDE0
                                        </div>
                                    </div>
                                </div>
                                <div className="HighImpactJustifiedLeft__SliderItemCaption WhiteLabel">
                                    <div className="HighImpactJustifiedLeft__SliderItemTitleContainer WhiteLabel">
                                        <h3 className="HighImpactJustifiedLeft__SliderItemTitle WhiteLabel">
                                            HighImpactCentered Title
                                        </h3>
                                    </div>
                                    <div className="HighImpactJustifiedLeft__SliderItemDescriptionContainer WhiteLabel">
                                        <p className="HighImpactJustifiedLeft__SliderItemDescription WhiteLabel">
                                            Ahoy interloper deadlights stern spike man-of-war
                                            snow hearties Chain Shot Davy Jones" Locker.
                                        </p>
                                    </div>
                                    <div className="HighImpactJustifiedLeft__SliderItemSourceContainer WhiteLabel">
                                        <span className="HighImpactJustifiedLeft__SliderItemSource WhiteLabel">
                                            Crédito: Rafael Iván
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="HighImpactJustifiedLeft__SliderThumbContainer WhiteLabel" id="swipe">
                            <div to="/" className="HighImpactJustifiedLeft__SliderItem WhiteLabel">
                                <div className="HighImpactJustifiedLeft__SliderItemThumbnail WhiteLabel">
                                    <div className="HighImpactJustifiedLeft__SliderItemImageContainer WhiteLabel">
                                        <picture>
                                            <source media="(min-width: 0px) and (max-width: 414px)" srcSet="./static/aspect-ratio-images/16x9-Graphic1-414x233.jpg" />
                                            <source media="(min-width: 415px) and (max-width: 768px)" srcSet="./static/aspect-ratio-images/16x9-Graphic1-716x403.jpg" />
                                            <source media="(min-width: 769px)" srcSet="./static/aspect-ratio-images/16x9-Graphic1-820x461.jpg" />
                                            <img alt="test" src="./static/aspect-ratio-images/16x9-Graphic1-414x233.jpg" className="HighImpactJustifiedLeft__SliderItemImage WhiteLabel" />
                                        </picture>
                                    </div>
                                    {/* OPTIONAL */}
                                    <div className="HighImpactJustifiedLeft__SliderItemVideoContainer WhiteLabel">
                                        <div className="HighImpactJustifiedLeft__SliderItemVideo WhiteLabel">
                                            AQUI VA UN VIDE0
                                        </div>
                                    </div>
                                    <div className="HighImpactJustifiedLeft__SliderItemIconContainer WhiteLabel">
                                        <div className="HighImpactJustifiedLeft__SliderItemIcon Icn_Video WhiteLabel">
                                            <span className="Display">
                                                Icono de Play
                                            </span>
                                        </div>
                                    </div>
                                    <div className="HighImpactJustifiedLeft__SliderItemInfoContainer WhiteLabel">
                                        <div className="HighImpactJustifiedLeft__SliderItemDuration WhiteLabel">
                                            <span>
                                                04:15
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <Link to="/" className="HighImpactJustifiedLeft__SliderItemCaption WhiteLabel">
                                    <div className="HighImpactJustifiedLeft__SliderItemTitleContainer WhiteLabel">
                                        <h3 className="HighImpactJustifiedLeft__SliderItemTitle WhiteLabel">
                                            HighImpactCentered Title
                                        </h3>
                                    </div>
                                    <div className="HighImpactJustifiedLeft__SliderItemDescriptionContainer WhiteLabel">
                                        <p className="HighImpactJustifiedLeft__SliderItemDescription WhiteLabel">
                                            Ahoy interloper deadlights stern spike man-of-war
                                            snow hearties Chain Shot Davy Jones" Locker.
                                        </p>
                                    </div>
                                    <div className="HighImpactJustifiedLeft__SliderItemSourceContainer WhiteLabel">
                                        <span className="HighImpactJustifiedLeft__SliderItemSource WhiteLabel">
                                            Crédito: Rafael Iván
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="HighImpactJustifiedLeft__SliderThumbContainer WhiteLabel" id="swipe">
                            <div to="/" className="HighImpactJustifiedLeft__SliderItem WhiteLabel">
                                <div className="HighImpactJustifiedLeft__SliderItemThumbnail WhiteLabel">
                                    <div className="HighImpactJustifiedLeft__SliderItemImageContainer WhiteLabel">
                                        <picture>
                                            <source media="(min-width: 0px) and (max-width: 414px)" srcSet="./static/aspect-ratio-images/16x9-Graphic1-414x233.jpg" />
                                            <source media="(min-width: 415px) and (max-width: 768px)" srcSet="./static/aspect-ratio-images/16x9-Graphic1-716x403.jpg" />
                                            <source media="(min-width: 769px)" srcSet="./static/aspect-ratio-images/16x9-Graphic1-820x461.jpg" />
                                            <img alt="test" src="./static/aspect-ratio-images/16x9-Graphic1-414x233.jpg" className="HighImpactJustifiedLeft__SliderItemImage WhiteLabel" />
                                        </picture>
                                    </div>
                                    {/* OPTIONAL */}
                                    <div className="HighImpactJustifiedLeft__SliderItemVideoContainer WhiteLabel">
                                        <div className="HighImpactJustifiedLeft__SliderItemVideo WhiteLabel">
                                            AQUI VA UN VIDE0
                                        </div>
                                    </div>
                                    <div className="HighImpactJustifiedLeft__SliderItemIconContainer WhiteLabel">
                                        <div className="HighImpactJustifiedLeft__SliderItemIcon Icn_Video WhiteLabel">
                                            <span className="Display">
                                                Icono de Play
                                            </span>
                                        </div>
                                    </div>
                                    <div className="HighImpactJustifiedLeft__SliderItemInfoContainer WhiteLabel">
                                        <div className="HighImpactJustifiedLeft__SliderItemInfo WhiteLabel">
                                            <span>
                                                Video
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <Link to="/" className="HighImpactJustifiedLeft__SliderItemCaption WhiteLabel">
                                    <div className="HighImpactJustifiedLeft__SliderItemTitleContainer WhiteLabel">
                                        <h3 className="HighImpactJustifiedLeft__SliderItemTitle WhiteLabel">
                                            HighImpactCentered Title
                                        </h3>
                                    </div>
                                    <div className="HighImpactJustifiedLeft__SliderItemDescriptionContainer WhiteLabel">
                                        <p className="HighImpactJustifiedLeft__SliderItemDescription WhiteLabel">
                                            Ahoy interloper deadlights stern spike man-of-war
                                            snow hearties Chain Shot Davy Jones" Locker.
                                        </p>
                                    </div>
                                    <div className="HighImpactJustifiedLeft__SliderItemSourceContainer WhiteLabel">
                                        <span className="HighImpactJustifiedLeft__SliderItemSource WhiteLabel">
                                            Crédito: Rafael Iván
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="HighImpactJustifiedLeft__SliderArrow-Next WhiteLabel">
                    <button className="HighImpactJustifiedLeft__SliderButton Icn_ArrowRight WhiteLabel" id="arrow_next2" type="button">
                        <span className="Display">
                                Next Arrow
                        </span>
                    </button>
                </div>
            </section>
        );
    }
}

export default HighImpactJustifiedLeft_Slider;
