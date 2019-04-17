import React from "react";
import { Link } from "gatsby";
import { withPrefix } from "gatsby";

const HighImpactFull_SliderItem = () => (
    <div className="HighImpact__SliderThumbContainer WhiteLabel" id="swipe">
        <Link to="/" className="HighImpact__SliderItem WhiteLabel">
            <div className="HighImpact__SliderItemThumbnail WhiteLabel">
                <div className="HighImpact__SliderItemImageContainer WhiteLabel">
                    <picture>
                        <source media="(min-width: 0px) and (max-width: 414px)" srcSet={withPrefix("/static/aspect-ratio-images/9x16-389x692.jpg")} />
                        <source media="(min-width: 415px) and (max-width: 768px)" srcSet={withPrefix("/static/aspect-ratio-images/4x3-818x614.jpg")} />
                        <source media="(min-width: 769px)" srcSet={withPrefix("/static/aspect-ratio-images/40x17-1440x612.jpg")} />
                        <img alt="test" src={withPrefix("/static/aspect-ratio-images/9x16-389x692.jpg")} className="HighImpact__SliderItemImage WhiteLabel" />
                    </picture>
                </div>
                <div className="HighImpact__SliderItemLogoContainer WhiteLabel">
                    <source media="(min-width: 0px) and (max-width: 414px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-Graphic3-209x114.png")} />
                    <source media="(min-width: 415px) and (max-width: 768px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-Graphic3-209x114.png")} />
                    <source media="(min-width: 769px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-Graphic3-209x114.png")} />
                    <img alt="test" src={withPrefix("/static/aspect-ratio-images/16x9-Graphic3-209x114.png")} className="HighImpact__SliderItemLogo WhiteLabel"/>
                </div>
                <div className="HighImpact__SliderItemAirTimeContainer WhiteLabel">
                    <time dateTime="25-06-2018" className="HighImpact__SliderItemAirTime WhiteLabel">
                        Lunes a Viernes, 20:30 PM
                    </time>
                </div>
                <div className="HighImpact__SliderItemTitleContainer WhiteLabel">
                    <h3 className="HighImpact__SliderItemTitle WhiteLabel">
                        Mandzukic marca el gol de la ventaja en tiempo extra,
                        Francia-Croacia Final Rusia
                    </h3>
                </div>
                <div className="HighImpact__SliderItemDescriptionContainer WhiteLabel">
                    <p className="HighImpact__SliderItemDescription WhiteLabel">
                        Grandes emociones se vivieron durante la segunda gala de MQB.
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
);

export default HighImpactFull_SliderItem;
