import React from "react";
import EndCardElementsRelated from "./EndCard_ElementsRelated/EndCard_ElementsRelated";
import { withPrefix } from "gatsby";

const EndCard = () => (
    <div className="EndCard WhiteLabel">
        <div className="EndCard__ImageContainer WhiteLabel">
            <picture>
                <source media="(min-width: 0px) and (max-width: 414px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-414x233.jpg")} />
                <source media="(min-width: 415px) and (max-width: 768px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-414x233.jpg")} />
                <source media="(min-width: 769px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-820x461.jpg")} />
                <img className="EndCard__Image WhiteLabel" src={withPrefix("/static/aspect-ratio-images/16x9-820x461.jpg")} alt="" />
            </picture>
        </div>
        <div className="EndCard__Elements WhiteLabel">
            <div className="EndCard__ElementsThumbContainer WhiteLabel">
                <div className="EndCard__ElementsThumbOverlayContainer WhiteLabel">
                    <div className="EndCard__ElementsThumbOverlay WhiteLabel">
                        <button className="EndCard__ElementsThumbOverlayButton Icn_Video WhiteLabel">
                            <span className="Display">
                                Play Icon
                            </span>
                        </button>
                        <svg className="EndCard__ElementsThumbOverlaySpinner"></svg>
                    </div>
                    <div className="EndCard__ElementsThumbOverlayImageContainer WhiteLabel">
                        <picture>
                            <source media="(min-width: 0px) and (max-width: 414px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-258x145.jpg")} />
                            <source media="(min-width: 415px) and (max-width: 768px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-258x145.jpg")} />
                            <source media="(min-width: 769px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-414x233.jpg")} />
                            <img className="EndCard__ElementsThumbOveralyImage WhiteLabel" src={withPrefix("/static/aspect-ratio-images/16x9-414x233.jpg")} alt="" />
                        </picture>
                    </div>
                </div>
                <div className="EndCard__ElementsThumbTextContainer WhiteLabel">
                    <div className="EndCard__ElementsThumbTextNextContainer WhiteLabel">
                        <p className="EndCard__ElementsThumbTextNext WhiteLabel">
                            A Continuación
                        </p>
                    </div>
                    <div className="EndCard__ElementsThumbTextTitleContainer WhiteLabel">
                        <h3 className="EndCard__ElementsThumbTextTitle WhiteLabel">
                            C25: 'Jacobo' deja a un lado su venganza para proteger a lucía
                        </h3>
                    </div>
                    <div className="EndCard__ElementsThumbTextButtonContainer WhiteLabel">
                        <button className="EndCard__ElementsThumbTextButton WhiteLabel">
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
            <div className="EndCard__ElementsRelatedContainer WhiteLabel">
                <div className="EndCard__ElementsRelatedButtonContainer WhiteLabel">
                    <button className="EndCard__ElementsRelatedButton Icn_Close WhiteLabel">
                        <span className="Display">
                            Close Icon
                        </span>
                    </button>
                </div>
                <EndCardElementsRelated />
                <EndCardElementsRelated />
                <EndCardElementsRelated />
            </div>
        </div>
    </div>
);

export default EndCard;
