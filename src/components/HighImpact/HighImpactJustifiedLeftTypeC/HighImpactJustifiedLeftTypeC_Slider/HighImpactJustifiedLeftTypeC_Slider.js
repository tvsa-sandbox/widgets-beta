import React, { Component } from "react";
import { Link } from "gatsby";
import Orca from "orcaslide";

class HighImpactJustifiedLeftTypeC_Slider extends Component {
    componentDidMount() {
        Orca.config = {
            arrowPrevious: "#arrow_previous4",
            arrowNext: "#arrow_next4",
            contentItem: "#swipe4",
            time: 1,
            jump: 16,
        };
    }
    render() {
        return (
            <section className="HighImpactJustifiedLeftTypeC__Slider WhiteLabel">
                <div className="HighImpactJustifiedLeftTypeC__SliderArrow-Previous WhiteLabel">
                    <button className="HighImpactJustifiedLeftTypeC__SliderButton Icn_ArrowLeft WhiteLabel" id="arrow_previous4" type="button">
                        <span className="Display">
                            Previous Arrow
                        </span>
                    </button>
                </div>
                <div className="HighImpactJustifiedLeftTypeC__SliderTrack WhiteLabel">
                    <div className="HighImpactJustifiedLeftTypeC__SliderThumbnails WhiteLabel" id="swipe4">
                        <div className="HighImpactJustifiedLeftTypeC__SliderThumbContainer WhiteLabel" >
                            <div className="HighImpactJustifiedLeftTypeC__SliderItem WhiteLabel">
                                <Link to="/" className="HighImpactJustifiedLeftTypeC__SliderItemThumbnail WhiteLabel">
                                    <div className="HighImpactJustifiedLeftTypeC__SliderItemImageContainer WhiteLabel">
                                        <picture>
                                            <source media="(min-width: 0px) and (max-width: 414px)" srcSet="./static/aspect-ratio-images/16x9-Graphic1-414x233.jpg" />
                                            <source media="(min-width: 415px) and (max-width: 768px)" srcSet="./static/aspect-ratio-images/16x9-Graphic1-716x403.jpg" />
                                            <source media="(min-width: 769px)" srcSet="./static/aspect-ratio-images/16x9-Graphic1-820x461.jpg" />
                                            <img alt="test" src="./static/aspect-ratio-images/16x9-Graphic1-414x233.jpg" className="HighImpactJustifiedLeftTypeC__SliderItemImage WhiteLabel" />
                                        </picture>
                                    </div>
                                    {/* OPTIONAL */}
                                    <div className="HighImpactJustifiedLeftTypeC__SliderItemVideoContainer WhiteLabel">
                                        <div className="HighImpactJustifiedLeftTypeC__SliderItemVideo WhiteLabel">
                                            AQUI VA UN VIDE0
                                        </div>
                                    </div>
                                    <div className="HighImpactJustifiedLeftTypeC__SliderItemIconContainer WhiteLabel">
                                        <div className="HighImpactJustifiedLeftTypeC__SliderItemIcon Icn_Video WhiteLabel">
                                            <span className="Display">
                                                Icono de Play
                                            </span>
                                        </div>
                                    </div>
                                    <div className="HighImpactJustifiedLeftTypeC__SliderItemInfoContainer WhiteLabel">
                                        <div className="HighImpactJustifiedLeftTypeC__SliderItemDuration WhiteLabel">
                                            <span>
                                                04:15
                                            </span>
                                        </div>
                                    </div>
                                    <div className="HighImpactJustifiedLeftTypeC__SliderItemLabelContainer WhiteLabel">
                                        <div className="HighImpactJustifiedLeftTypeC__SliderItemLabel WhiteLabel">
                                            <span>
                                                Label
                                            </span>
                                        </div>
                                    </div>
                                    <Link to="/" className="HighImpactJustifiedLeftTypeC__SliderItemCaptionAnchor WhiteLabel">
                                        <div className="HighImpactJustifiedLeftTypeC__SliderItemTitleContainer WhiteLabel">
                                            <h3 className="HighImpactJustifiedLeftTypeC__SliderItemTitle WhiteLabel">
                                                HighImpactCentered Title
                                            </h3>
                                        </div>
                                        <div className="HighImpactJustifiedLeftTypeC__SliderItemDescriptionContainer WhiteLabel">
                                            <p className="HighImpactJustifiedLeftTypeC__SliderItemDescription WhiteLabel">
                                                Ahoy interloper deadlights stern spike man-of-war
                                                snow hearties Chain Shot Davy Jones" Locker.
                                            </p>
                                        </div>
                                        <div className="HighImpactJustifiedLeftTypeC__SliderItemSourceContainer WhiteLabel">
                                            <span className="HighImpactJustifiedLeftTypeC__SliderItemSource WhiteLabel">
                                                Crédito: Autor
                                            </span>
                                        </div>
                                    </Link>
                                </Link>
                            </div>
                        </div>
                        <div className="HighImpactJustifiedLeftTypeC__SliderThumbContainer WhiteLabel" id="swipe">
                            <div to="/" className="HighImpactJustifiedLeftTypeC__SliderItem WhiteLabel">
                                <Link to="/" className="HighImpactJustifiedLeftTypeC__SliderItemThumbnail WhiteLabel">
                                    <div className="HighImpactJustifiedLeftTypeC__SliderItemImageContainer WhiteLabel">
                                        <picture>
                                            <source media="(min-width: 0px) and (max-width: 414px)" srcSet="./static/aspect-ratio-images/16x9-Graphic1-414x233.jpg" />
                                            <source media="(min-width: 415px) and (max-width: 768px)" srcSet="./static/aspect-ratio-images/16x9-Graphic1-716x403.jpg" />
                                            <source media="(min-width: 769px)" srcSet="./static/aspect-ratio-images/16x9-Graphic1-820x461.jpg" />
                                            <img alt="test" src="./static/aspect-ratio-images/16x9-Graphic1-414x233.jpg" className="HighImpactJustifiedLeftTypeC__SliderItemImage WhiteLabel" />
                                        </picture>
                                    </div>
                                    {/* OPTIONAL */}
                                    <div className="HighImpactJustifiedLeftTypeC__SliderItemLabelContainer WhiteLabel">
                                        <div className="HighImpactJustifiedLeftTypeC__SliderItemLabel WhiteLabel">
                                            <span>
                                                Label
                                            </span>
                                        </div>
                                    </div>
                                    <div className="HighImpactJustifiedLeftTypeC__SliderItemTitleContainer WhiteLabel">
                                        <h3 className="HighImpactJustifiedLeftTypeC__SliderItemTitle WhiteLabel">
                                            HighImpactCentered Title
                                        </h3>
                                    </div>
                                    <div className="HighImpactJustifiedLeftTypeC__SliderItemDescriptionContainer WhiteLabel">
                                        <p className="HighImpactJustifiedLeftTypeC__SliderItemDescription WhiteLabel">
                                            Ahoy interloper deadlights stern spike man-of-war
                                            snow hearties Chain Shot Davy Jones" Locker.
                                        </p>
                                    </div>
                                    <div className="HighImpactJustifiedLeftTypeC__SliderItemSourceContainer WhiteLabel">
                                        <span className="HighImpactJustifiedLeftTypeC__SliderItemSource WhiteLabel">
                                            Crédito: Autor
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="HighImpactJustifiedLeftTypeC__SliderThumbContainer WhiteLabel" id="swipe">
                            <div to="/" className="HighImpactJustifiedLeftTypeC__SliderItem WhiteLabel">
                                <Link to="/" className="HighImpactJustifiedLeftTypeC__SliderItemThumbnail WhiteLabel">
                                    <div className="HighImpactJustifiedLeftTypeC__SliderItemImageContainer WhiteLabel">
                                        <picture>
                                            <source media="(min-width: 0px) and (max-width: 414px)" srcSet="./static/aspect-ratio-images/16x9-Graphic1-414x233.jpg" />
                                            <source media="(min-width: 415px) and (max-width: 768px)" srcSet="./static/aspect-ratio-images/16x9-Graphic1-716x403.jpg" />
                                            <source media="(min-width: 769px)" srcSet="./static/aspect-ratio-images/16x9-Graphic1-820x461.jpg" />
                                            <img alt="test" src="./static/aspect-ratio-images/16x9-Graphic1-414x233.jpg" className="HighImpactJustifiedLeftTypeC__SliderItemImage WhiteLabel" />
                                        </picture>
                                    </div>
                                    {/* OPTIONAL */}
                                    <div className="HighImpactJustifiedLeftTypeC__SliderItemVideoContainer WhiteLabel">
                                        <div className="HighImpactJustifiedLeftTypeC__SliderItemVideo WhiteLabel">
                                            AQUI VA UN VIDE0
                                        </div>
                                    </div>
                                    <div className="HighImpactJustifiedLeftTypeC__SliderItemIconContainer WhiteLabel">
                                        <div className="HighImpactJustifiedLeftTypeC__SliderItemIcon Icn_Video WhiteLabel">
                                            <span className="Display">
                                                Icono de Play
                                            </span>
                                        </div>
                                    </div>
                                    <div className="HighImpactJustifiedLeftTypeC__SliderItemInfoContainer WhiteLabel">
                                        <div className="HighImpactJustifiedLeftTypeC__SliderItemInfo WhiteLabel">
                                            <span>
                                                Video
                                            </span>
                                        </div>
                                    </div>
                                    <div className="HighImpactJustifiedLeftTypeC__SliderItemTitleContainer WhiteLabel">
                                        <h3 className="HighImpactJustifiedLeftTypeC__SliderItemTitle WhiteLabel">
                                            HighImpactCentered Title
                                        </h3>
                                    </div>
                                    <div className="HighImpactJustifiedLeftTypeC__SliderItemLabelContainer WhiteLabel">
                                        <div className="HighImpactJustifiedLeftTypeC__SliderItemLabel WhiteLabel">
                                            <span>
                                                Label
                                            </span>
                                        </div>
                                    </div>
                                    <div className="HighImpactJustifiedLeftTypeC__SliderItemDescriptionContainer WhiteLabel">
                                        <p className="HighImpactJustifiedLeftTypeC__SliderItemDescription WhiteLabel">
                                            Ahoy interloper deadlights stern spike man-of-war
                                            snow hearties Chain Shot Davy Jones" Locker.
                                        </p>
                                    </div>
                                    <div className="HighImpactJustifiedLeftTypeC__SliderItemSourceContainer WhiteLabel">
                                        <span className="HighImpactJustifiedLeftTypeC__SliderItemSource WhiteLabel">
                                            Crédito: Autor
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="HighImpactJustifiedLeftTypeC__SliderArrow-Next WhiteLabel">
                    <button className="HighImpactJustifiedLeftTypeC__SliderButton Icn_ArrowRight WhiteLabel" id="arrow_next4" type="button">
                        <span className="Display">
                                Next Arrow
                        </span>
                    </button>
                </div>
            </section>
        );
    }
}

export default HighImpactJustifiedLeftTypeC_Slider;
