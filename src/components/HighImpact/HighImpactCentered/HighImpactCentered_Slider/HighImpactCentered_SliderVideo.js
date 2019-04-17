import React from "react";
import { Link } from "gatsby";

const HighImpactCentered_Slider = () => (
    <section className="HighImpactCentered__Slider WhiteLabel">
        <div className="HighImpactCentered__SliderArrowPrevious WhiteLabel">
            <button className="Icn_Arrow_Left" id="arrow_previus WhiteLabel" type="button">
                <span className="Displays">
                    Previous Arrow
                </span>
            </button>
        </div>
        <div className="HighImpactCentered__SliderContent WhiteLabel">
            <div className="HighImpactCentered__SliderTrack WhiteLabel">
                <div to="/" className="HighImpactCentered__SliderItem WhiteLabel">
                    <div className="HighImpactCentered__SliderItemThumbnail WhiteLabel">
                        <div className="HighImpactCentered__SliderItemImageContainer WhiteLabel">
                            <picture>
                                <source media="(min-width: 0px) and (max-width: 414px)" srcSet="./static/aspect-ratio-images/16x9-Graphic2-414x233.jpg" />
                                <source media="(min-width: 415px) and (max-width: 768px)" srcSet="./static/aspect-ratio-images/16x9-Graphic2-716x403.jpg" />
                                <source media="(min-width: 769px) and (max-width: 1024px)" srcSet="./static/aspect-ratio-images/16x9-Graphic2-820x461.jpg" />
                                <source media="(min-width: 1024px)" srcSet="./static/aspect-ratio-images/16x9-Graphic2-716x403.jpg" />
                                <img src="./static/aspect-ratio-images/16x9-Graphic2-414x233.jpg" className="HighImpactCentered__SliderItemImage WhiteLabel" />
                            </picture>
                        </div>
                        {/* OPTIONAL */}
                        <div className="HighImpactCentered__SliderItemVideoContainer WhiteLabel">
                            <div className="HighImpactCentered__SliderItemVideo WhiteLabel">
                               AQUI VA UN VIDE0
                            </div>
                        </div>
                        <div className="HighImpactCentered__SliderItemIconContainer WhiteLabel">
                            <div className="HighImpactCentered__SliderItemIcon Icn_Play WhiteLabel">
                                <span className="Display">
                                    Icono de Play
                                </span>
                            </div>
                        </div>
                    </div>
                    <Link href="_#" className="HighImpactCentered__SliderItemCaptionAnchor WhiteLabel">
                        <div className="HighImpactCentered__SliderItemCaption WhiteLabel">
                            <div className="HighImpactCentered__SliderItemTitleContainer WhiteLabel">
                                <h3 className="HighImpactCentered__SliderItemTitle WhiteLabel">
                                    HighImpactCentered Title
                                </h3>
                            </div>
                            <div className="HighImpactCentered__SliderItemDescriptionContainer WhiteLabel">
                                <p className="HighImpactCentered__SliderItemDescription WhiteLabel">
                                        Ahoy interloper deadlights stern spike man-of-war
                                        snow hearties Chain Shot Davy Jones Locker.
                                </p>
                            </div>
                            <div className="HighImpact__SliderItemSourceContainer WhiteLabel">
                                <span className="HighImpact__SliderItemSource WhiteLabel">
                                     Crédito: Autor
                                </span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        <div className="HighImpactCentered__SliderArrowNext">
            <button className="Icn_Arrow_Right" id="arrow_next" type="button">
                <span className="Displays">Next Arrow</span>
            </button>
        </div>
    </section>
);

export default HighImpactCentered_Slider;
