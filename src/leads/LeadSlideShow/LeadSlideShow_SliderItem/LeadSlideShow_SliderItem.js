import React, { Component } from "react";
import Orca from "orcaslide";
import { withPrefix } from "gatsby";

class LeadSlideShow_SliderItem extends Component {
    componentDidMount() {
        Orca.config = {
            arrowPrevious: "#arrow_previous7",
            arrowNext: "#arrow_next7",
            contentItem: "#swipe7",
            time: 1,
            jump: 16,
        };
    }

    render() {
        return (
            <div className="LeadSlideShow__Slider WhiteLabel">
                <div className="LeadSlideShow__SliderArrow-Previous WhiteLabel">
                    <button className="LeadSlideShow__SliderButton Icn_ArrowLeft WhiteLabel" id="arrow_previous7" type="button">
                        <span className="Display">
                            Previous Arrow
                        </span>
                    </button>
                </div>
                <div className="LeadSlideShow__SliderTrack WhiteLabel">
                    <div className="LeadSlideShow__SliderThumbnails WhiteLabel" id="swipe7">
                        <div className="LeadSlideShow__SliderThumbContainer WhiteLabel" >
                            <div className="LeadSlideShow__SliderItem WhiteLabel">
                                <div className="LeadSlideShow__SliderItemThumbnail WhiteLabel">
                                    <div className="LeadSlideShow__SliderItemImageContainer WhiteLabel">
                                        <picture>
                                            <source media="(min-width: 0px) and (max-width: 414px)" srcSet={withPrefix("/static/aspect-ratio-images/9x16-389x692.jpg")} />
                                            <source media="(min-width: 415px) and (max-width: 768px)" srcSet={withPrefix("/static/aspect-ratio-images/4x3-818x614.jpg")} />
                                            <source media="(min-width: 769px)" srcSet={withPrefix("/static/aspect-ratio-images/40x17-1440x612.jpg")} />
                                            <img className="LeadImage__Picture WhiteLabel" src={withPrefix("/static/aspect-ratio-images/9x16-389x692.jpg")} alt="Test" />
                                        </picture>
                                    </div>
                                    <div className="LeadSlideShow__SliderItemLabelContainer WhiteLabel">
                                        <div className="LeadSlideShow__SliderItemInfoContainer WhiteLabel">
                                            <span className="LeadSlideShow__SliderItemInfo WhiteLabel">
                                                ASÍ FUE LA ALFOMBRA ROJA DE LOS PREMIOS OSCAR 2018, EN LOS QUE SE VIO A SHAKIRA
                                            </span>
                                        </div>
										<div className="LeadSlideShow__SliderItemCreditContainer WhiteLabel">
                                            <small className="LeadSlideShow__SliderItemCredit WhiteLabel">
                                                Credito: Rafi
                                            </small>
                                        </div>
                                        <div className="LeadSlideShow__SliderItemCounter WhiteLabel">
                                            <span className="LeadSlideShow__SliderItemCounterNumber WhiteLabel">
                                                3/8
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="LeadSlideShow__SliderThumbContainer WhiteLabel" >
                            <div className="LeadSlideShow__SliderItem WhiteLabel">
                                <div className="LeadSlideShow__SliderItemThumbnail WhiteLabel">
                                    <div className="LeadSlideShow__SliderItemImageContainer WhiteLabel">
                                        <picture>
                                            <source media="(min-width: 0px) and (max-width: 414px)" srcSet={withPrefix("/static/aspect-ratio-images/9x16-389x692.jpg")} />
                                            <source media="(min-width: 415px) and (max-width: 768px)" srcSet={withPrefix("/static/aspect-ratio-images/4x3-818x614.jpg")} />
                                            <source media="(min-width: 769px)" srcSet={withPrefix("/static/aspect-ratio-images/40x17-1440x612.jpg")} />
                                            <img className="LeadImage__Picture WhiteLabel" src={withPrefix("/static/aspect-ratio-images/9x16-389x692.jpg")} alt="Test" />
                                        </picture>
                                    </div>
                                    <div className="LeadSlideShow__SliderItemLabelContainer WhiteLabel">
                                        <div className="LeadSlideShow__SliderItemInfoContainer WhiteLabel">
                                            <span className="LeadSlideShow__SliderItemInfo WhiteLabel">
                                                ASÍ FUE LA ALFOMBRA VERDE DE LOS PREMIOS OSCAR 2018, EN LOS QUE SE VIO A SHAKIRA
                                            </span>
                                        </div>
										<div className="LeadSlideShow__SliderItemCreditContainer WhiteLabel">
                                            <small className="LeadSlideShow__SliderItemCredit WhiteLabel">
                                                Credito: Rafi
                                            </small>
                                        </div>
                                        <div className="LeadSlideShow__SliderItemCounter WhiteLabel">
                                            <span className="LeadSlideShow__SliderItemCounterNumber WhiteLabel">
                                                4/8
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                <div className="LeadSlideShow__SliderArrow-Next WhiteLabel">
                    <button className="LeadSlideShow__SliderButton Icn_ArrowRight WhiteLabel" id="arrow_next7" type="button">
                        <span className="Display">
                                Next Arrow
                            </span>
                    </button>
                </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LeadSlideShow_SliderItem;
