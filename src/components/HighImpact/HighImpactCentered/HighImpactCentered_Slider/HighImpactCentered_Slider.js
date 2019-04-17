import React, { Component } from "react";
import { Link } from "gatsby";
import Orca from "orcaslide";

class HighImpactCentered_Slider extends Component {
    componentDidMount(){
        Orca.config = {
            arrowPrevious: "#arrow_previous1",
            arrowNext: "#arrow_next1",
            contentItem: "#swipe1",
            time: 1,
            jump: 16,
        };
    }
    render() {
        return (
            <section className="HighImpactCentered__Slider WhiteLabel">
                <div className="HighImpactCentered__SliderArrow-Previous WhiteLabel">
                    <button className="HighImpactCentered__SliderButton Icn_ArrowLeft WhiteLabel" id="arrow_previous1" type="button">
                        <span className="Display">
                            Previous Arrow
                        </span>
                    </button>
                </div>
                <div className="HighImpactCentered__SliderTrack WhiteLabel">
                    <div className="HighImpactCentered__SliderThumbnails WhiteLabel" id="swipe1">
                        <div className="HighImpactCentered__SliderThumbContainer WhiteLabel">
                            <Link to="/" className="HighImpactCentered__SliderItem WhiteLabel">
                                <div className="HighImpactCentered__SliderItemThumbnail WhiteLabel">
                                    <div className="HighImpactCentered__SliderItemImageContainer WhiteLabel">
                                        <picture>
                                            <source media="(min-width: 0px) and (max-width: 414px)" srcSet="./static/aspect-ratio-images/16x9-Graphic2-414x233.jpg" />
                                            <source media="(min-width: 415px) and (max-width: 768px)" srcSet="./static/aspect-ratio-images/16x9-Graphic2-716x403.jpg" />
                                            <source media="(min-width: 769px) and (max-width: 1024px)" srcSet="./static/aspect-ratio-images/16x9-Graphic2-820x461.jpg" />
                                            <source media="(min-width: 1024px)" srcSet="./static/aspect-ratio-images/16x9-Graphic2-716x403.jpg" />
                                            <img alt="test" src="./static/aspect-ratio-images/16x9-Graphic2-414x233.jpg" className="HighImpactCentered__SliderItemImage WhiteLabel" />
                                        </picture>
                                    </div>
                                    {/* OPTIONAL */}
                                    <div className="HighImpactCentered__SliderItemVideoContainer WhiteLabel">
                                        <div className="HighImpactCentered__SliderItemVideo WhiteLabel">
                                            AQUI VA UN VIDE0
                                        </div>
                                    </div>
                                </div>
                                <div className="HighImpactCentered__SliderItemCaption WhiteLabel">
                                    <div className="HighImpactCentered__SliderItemTitleContainer WhiteLabel">
                                        <h3 className="HighImpactCentered__SliderItemTitle WhiteLabel">
                                            la rosa de guadalupe capito 50.
                                        </h3>
                                    </div>
                                    <div className="HighImpactCentered__SliderItemDescriptionContainer WhiteLabel">
                                        <p className="HighImpactCentered__SliderItemDescription WhiteLabel">
                                            que sorpresas encontrara manely si llega a
                                            encontrar a su esposo con otra mujer.
                                        </p>
                                    </div>
                                    <div className="HighImpactCentered__SliderItemSourceContainer WhiteLabel">
                                        <span className="HighImpactCentered__SliderItemSource WhiteLabel">
                                            Crédito: Autor
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="HighImpactCentered__SliderThumbContainer WhiteLabel" id="swipe">
                            <div to="/" className="HighImpactCentered__SliderItem WhiteLabel">
                                <div className="HighImpactCentered__SliderItemThumbnail WhiteLabel">
                                    <div className="HighImpactCentered__SliderItemImageContainer WhiteLabel">
                                        <picture>
                                            <source media="(min-width: 0px) and (max-width: 414px)" srcSet="./static/aspect-ratio-images/16x9-Graphic2-414x233.jpg" />
                                            <source media="(min-width: 415px) and (max-width: 768px)" srcSet="./static/aspect-ratio-images/16x9-Graphic2-716x403.jpg" />
                                            <source media="(min-width: 769px) and (max-width: 1024px)" srcSet="./static/aspect-ratio-images/16x9-Graphic2-820x461.jpg" />
                                            <source media="(min-width: 1024px)" srcSet="./static/aspect-ratio-images/16x9-Graphic2-716x403.jpg" />
                                            <img alt="test" src="./static/aspect-ratio-images/16x9-Graphic2-414x233.jpg" className="HighImpactCentered__SliderItemImage WhiteLabel" />
                                        </picture>
                                    </div>
                                    {/* OPTIONAL */}
                                    <div className="HighImpactCentered__SliderItemVideoContainer WhiteLabel">
                                        <div className="HighImpactCentered__SliderItemVideo WhiteLabel">
                                            AQUI VA UN VIDE0
                                        </div>
                                    </div>
                                    <div className="HighImpactCentered__SliderItemIconContainer WhiteLabel">
                                        <div className="HighImpactCentered__SliderItemIcon Icn_Video WhiteLabel">
                                            <span className="Display">
                                                Icono de Play
                                            </span>
                                        </div>
                                    </div>
                                    <div className="HighImpactCentered__SliderItemInfoContainer WhiteLabel">
                                        <div className="HighImpactCentered__SliderItemDuration WhiteLabel">
                                            <span>
                                                05:20
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <Link to="/" className="HighImpactCentered__SliderItemCaptionAnchor WhiteLabel">
                                    <div className="HighImpactCentered__SliderItemCaption WhiteLabel">
                                        <div className="HighImpactCentered__SliderItemTitleContainer WhiteLabel">
                                            <h3 className="HighImpactCentered__SliderItemTitle WhiteLabel">
                                                ALTO IMPACTO CON VIDEO TIME
                                            </h3>
                                        </div>
                                        <div className="HighImpactCentered__SliderItemDescriptionContainer WhiteLabel">
                                            <p className="HighImpactCentered__SliderItemDescription WhiteLabel">
                                                Ahoy interloper deadlights stern spike man-of-war
                                                snow hearties Chain Shot Davy Jones" Locker.
                                            </p>
                                        </div>
                                        <div className="HighImpactCentered__SliderItemSourceContainer WhiteLabel">
                                            <span className="HighImpactCentered__SliderItemSource WhiteLabel">
                                                Crédito: Autor
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="HighImpactCentered__SliderThumbContainer WhiteLabel" id="swipe">
                            <div to="/" className="HighImpactCentered__SliderItem WhiteLabel">
                                <div className="HighImpactCentered__SliderItemThumbnail WhiteLabel">
                                    <div className="HighImpactCentered__SliderItemImageContainer WhiteLabel">
                                        <picture>
                                            <source media="(min-width: 0px) and (max-width: 414px)" srcSet="./static/aspect-ratio-images/16x9-Graphic2-414x233.jpg" />
                                            <source media="(min-width: 415px) and (max-width: 768px)" srcSet="./static/aspect-ratio-images/16x9-Graphic2-716x403.jpg" />
                                            <source media="(min-width: 769px) and (max-width: 1024px)" srcSet="./static/aspect-ratio-images/16x9-Graphic2-820x461.jpg" />
                                            <source media="(min-width: 1024px)" srcSet="./static/aspect-ratio-images/16x9-Graphic2-716x403.jpg" />
                                            <img alt="test" src="./static/aspect-ratio-images/16x9-Graphic2-414x233.jpg" className="HighImpactCentered__SliderItemImage WhiteLabel" />
                                        </picture>
                                    </div>
                                    {/* OPTIONAL */}
                                    <div className="HighImpactCentered__SliderItemVideoContainer WhiteLabel">
                                        <div className="HighImpactCentered__SliderItemVideo WhiteLabel">
                                            AQUI VA UN VIDE0
                                        </div>
                                    </div>
                                    <div className="HighImpactCentered__SliderItemIconContainer WhiteLabel">
                                        <div className="HighImpactCentered__SliderItemIcon Icn_Video WhiteLabel">
                                            <span className="Display">
                                                Icono de Play
                                            </span>
                                        </div>
                                    </div>
                                    <div className="HighImpactCentered__SliderItemInfoContainer WhiteLabel">
                                        <div className="HighImpactCentered__SliderItemInfo WhiteLabel">
                                            <span>
                                                Video
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <Link to="/" className="HighImpactCentered__SliderItemCaptionAnchor WhiteLabel">
                                    <div className="HighImpactCentered__SliderItemCaption WhiteLabel">
                                        <div className="HighImpactCentered__SliderItemTitleContainer WhiteLabel">
                                            <h3 className="HighImpactCentered__SliderItemTitle WhiteLabel">
                                                ALTO IMPACTO CON VIDEO TIME
                                            </h3>
                                        </div>
                                        <div className="HighImpactCentered__SliderItemDescriptionContainer WhiteLabel">
                                            <p className="HighImpactCentered__SliderItemDescription WhiteLabel">
                                                Ahoy interloper deadlights stern spike man-of-war
                                                snow hearties Chain Shot Davy Jones Locker.
                                            </p>
                                        </div>
                                        <div className="HighImpactCentered__SliderItemSourceContainer WhiteLabel">
                                            <span className="HighImpactCentered__SliderItemSource WhiteLabel">
                                                Crédito: Autor
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="HighImpactCentered__SliderArrow-Next WhiteLabel">
                    <button className="HighImpactCentered__SliderButton Icn_ArrowRight WhiteLabel" id="arrow_next1" type="button">
                        <span className="Display">
                            Next Arrow
                        </span>
                    </button>
                </div>
            </section>
        );
    }
}

export default HighImpactCentered_Slider;
