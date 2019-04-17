import React from "react";
import { withPrefix } from "gatsby-link";

const SlideshowContainerItem = () => (
    <div className="SlideshowContainer__SliderThumbContainer WhiteLabel">
        <div className="SlideshowContainer__SliderItem WhiteLabel">
            <div className="SlideshowContainer__SliderItemThumbnail WhiteLabel">
                <div className="SlideshowContainer__SliderItemImageContainer WhiteLabel">
                    <picture>
                        <source media="(min-width: 0px) and (max-width: 414px)" srcSet={withPrefix("/static/aspect-ratio-images/4x3-414x311.jpg")} />
                        <source media="(min-width: 415px) and (max-width: 768px)" srcSet={withPrefix("/static/aspect-ratio-images/4x3-818x614.jpg")} />
                        <source media="(min-width: 769px)" srcSet={withPrefix("/static/aspect-ratio-images/4x3-818x614.jpg")} />
                        <img className="SlideshowContainer__SliderItemImage WhiteLabel" src={withPrefix("/static/aspect-ratio-images/4x3-818x614.jpg")} alt="" />
                    </picture>
                </div>
                <div className="SlideshowContainer__SliderCounterContainer WhiteLabel">
                    <div className="SlideshowContainer__SliderCounter WhiteLabel">
                        <span className="SlideshowContainer__SliderCounterNumber WhiteLabel">
                            1 / 4
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default SlideshowContainerItem;
