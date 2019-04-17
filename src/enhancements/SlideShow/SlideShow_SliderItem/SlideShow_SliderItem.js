import React, { Component } from "react";
import { Link } from "gatsby";
import Orca from "orcaslide";
import { withPrefix } from "gatsby";

class SlideShow_SliderItem extends Component {
    componentDidMount() {
        Orca.config = {
            arrowPrevious: "#arrow_previous6",
            arrowNext: "#arrow_next6",
            contentItem: "#swipe6",
            time: 1,
            jump: 16,
        };
    }

    render() {
        return (
            <div className="SlideShow__Slider WhiteLabel">
                <div className="SlideShow__SliderArrow-Previous WhiteLabel">
                    <button className="SlideShow__SliderButton Icn_ArrowLeft WhiteLabel" id="arrow_previous6" type="button">
                        <span className="Display">
                            Previous Arrow
                        </span>
                    </button>
                </div>
                <div className="SlideShow__SliderTrack WhiteLabel">
                    <div className="SlideShow__SliderThumbnails WhiteLabel" id="swipe6">
                        <div className="SlideShow__SliderThumbContainer WhiteLabel" >
                            <Link to="/" className="SlideShow__SliderItem WhiteLabel">
                                <div className="SlideShow__SliderItemThumbnail WhiteLabel">
                                    <div className="SlideShow__SliderItemImageContainer WhiteLabel">
                                        <picture>
                                            <source media="(min-width: 0px) and (max-width: 414px)" srcSet={withPrefix("/static/aspect-ratio-images/4x3-268x202.jpg")} />
                                            <source media="(min-width: 415px) and (max-width: 768px)" srcSet={withPrefix("/static/aspect-ratio-images/4x3-414x311.jpg")} />
                                            <source media="(min-width: 769px) and (max-w dth: 1024px)" srcSet={withPrefix("/static/aspect-ratio-images/4x3-716x537.jpg")} />
                                            <img alt="Test" src={withPrefix("/static/aspect-ratio-images/4x3-818x614.jpg")} className="SlideShow__SliderItemImage WhiteLabel"/>
                                        </picture>
                                    </div>
                                    <div className="SlideShow__SliderItemLabelContainer WhiteLabel">
                                        <div className="SlideShow__SliderItemInfoContainer WhiteLabel">
                                            <span className="SlideShow__SliderItemInfo WhiteLabel">
                                                ASÍ FUE LA ALFOMBRA ROJA DE LOS PREMIOS OSCAR 2018, EN LOS QUE SE VIO A SHAKIRA
                                            </span>
                                        </div>
                                        <div className="SlideShow__SliderItemCounter WhiteLabel">
                                            <span className="SlideShow__SliderItemCounterNumber WhiteLabel">
                                                3/8
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="SlideShow__SliderThumbContainer WhiteLabel" >
                            <Link to="/" className="SlideShow__SliderItem WhiteLabel">
                                <div className="SlideShow__SliderItemThumbnail WhiteLabel">
                                    <div className="SlideShow__SliderItemImageContainer WhiteLabel">
                                        <picture>
                                            <source media="(min-width: 0px) and (max-width: 414px)" srcSet={withPrefix("/static/aspect-ratio-images/4x3-268x202.jpg")} />
                                            <source media="(min-width: 415px) and (max-width: 768px)" srcSet={withPrefix("/static/aspect-ratio-images/4x3-414x311.jpg")} />
                                            <source media="(min-width: 769px) and (max-width: 1024px)" srcSet={withPrefix("/static/aspect-ratio-images/4x3-716x537.jpg")} />
                                            <img alt="Test" src={withPrefix("/static/aspect-ratio-images/4x3-818x614.jpg")} className="SlideShow__SliderItemImage WhiteLabel"/>
                                        </picture>
                                    </div>
                                    <div className="SlideShow__SliderItemLabelContainer WhiteLabel">
                                        <div className="SlideShow__SliderItemInfoContainer WhiteLabel">
                                            <span className="SlideShow__SliderItemInfo WhiteLabel">
                                                ASÍ FUE LA ALFOMBRA ROJA DE LOS PREMIOS OSCAR 2018, EN LOS QUE SE VIO A SHAKIRA
                                            </span>
                                        </div>
                                        <div className="SlideShow__SliderItemCounter WhiteLabel">
                                            <span className="SlideShow__SliderItemCounterNumber WhiteLabel">
                                                4/8
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </Link>
                        </div>
                <div className="SlideShow__SliderArrow-Next WhiteLabel">
                    <button className="SlideShow__SliderButton Icn_ArrowRight WhiteLabel" id="arrow_next6" type="button">
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

export default SlideShow_SliderItem;
