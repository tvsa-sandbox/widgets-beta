import React, { Component } from "react";
import Orca from "orcaslide";
import HighImpactFullSlider from "./HighImpactFull_Slider/HighImpactFull_Slider";
import HighImpactFullSliderVideoDuration from "./HighImpactFull_Slider/HighImpactFull_SliderVideoDuration";
import HighImpactFullSliderVideoInfo from "./HighImpactFull_Slider/HighImpactFull_SliderVideoInfo";

class HighImpactFull extends Component {
    componentDidMount() {
        Orca.config = {
            arrowPrevious: "#arrow_previous5",
            arrowNext: "#arrow_next5",
            contentItem: "#swipe5",
            time: .5,
            jump: 12,
        };
    }

    render() {
        return (
            <section className="HighImpact WhiteLabel">
                <div className="HighImpact__Slider WhiteLabel">
                    <div className="HighImpact__SliderArrow-Previous WhiteLabel">
                        <button className="HighImpact__SliderButton Icn_ArrowLeft WhiteLabel" id="arrow_previous5" type="button">
                            <span className="Display">
                                Previous Arrow
                            </span>
                        </button>
                    </div>
                    <div className="HighImpact__SliderTrack WhiteLabel">
                        <div className="HighImpact__SliderThumbnails WhiteLabel" id="swipe5">
                            <HighImpactFullSliderVideoDuration />
                            <HighImpactFullSliderVideoInfo />
                            <HighImpactFullSlider />
                        </div>
                    </div>
                    <div className="HighImpact__SliderArrow-Next WhiteLabel">
                        <button className="HighImpact__SliderButton Icn_ArrowRight WhiteLabel" id="arrow_next5" type="button">
                            <span className="Display">
                             Next Arrow
                            </span>
                        </button>
                    </div>
                </div>
            </section>
        );
    }
}

export default HighImpactFull;
