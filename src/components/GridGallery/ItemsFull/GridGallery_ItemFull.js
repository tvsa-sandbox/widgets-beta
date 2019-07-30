import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import { withPrefix } from "gatsby-link";

const GridGalleryItemFull = (props) => { 
    const {
        toggleModal,
    } = props;
    return (
    <Link className="GridGallery__ItemFull WhiteLabel Modal" id="Modal">
        <div className="GridGallery__ItemFullThumbnail WhiteLabel">
            <div className="GridGallery__ItemCloseContainer WhiteLabel">
                <button className="GridGallery__ItemClose WhiteLabel" onClick={() => toggleModal()}>
                    X
                </button>
            </div>
            <div className="GridGallery__ItemFullImageContainer WhiteLabel">
                <picture>
                    <source media="(min-width: 0px) and (max-width: 414px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-Graphic1-414x233.jpg")} />
                    <source media="(min-width: 415px) and (max-width: 768px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-Graphic1-414x233.jpg")} />
                    <source media="(min-width: 769px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-Graphic1-820x461.jpg")} />
                    <img className="GridGallery__ItemFullImage WhiteLabel" src={withPrefix("/static/aspect-ratio-images/16x9-Graphic1-820x461.jpg")} alt="Test" />
                </picture>
            </div>
            <div className="GridGallery__ItemFullImageContainer WhiteLabel">
                <picture>
                    <source media="(min-width: 0px) and (max-width: 414px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-Graphic1-414x233.jpg")} />
                    <source media="(min-width: 415px) and (max-width: 768px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-Graphic1-414x233.jpg")} />
                    <source media="(min-width: 769px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-Graphic1-820x461.jpg")} />
                    <img className="GridGallery__ItemFullImage WhiteLabel" src={withPrefix("/static/aspect-ratio-images/16x9-Graphic1-820x461.jpg")} alt="Test" />
                </picture>
            </div>
            <div className="GridGallery__ItemFullImageContainer WhiteLabel">
                <picture>
                    <source media="(min-width: 0px) and (max-width: 414px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-Graphic1-414x233.jpg")} />
                    <source media="(min-width: 415px) and (max-width: 768px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-Graphic1-414x233.jpg")} />
                    <source media="(min-width: 769px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-Graphic1-820x461.jpg")} />
                    <img className="GridGallery__ItemFullImage WhiteLabel" src={withPrefix("/static/aspect-ratio-images/16x9-Graphic1-820x461.jpg")} alt="Test" />
                </picture>
            </div>
            <div className="GridGallery__ItemFullImageContainer WhiteLabel">
                <picture>
                    <source media="(min-width: 0px) and (max-width: 414px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-Graphic1-414x233.jpg")} />
                    <source media="(min-width: 415px) and (max-width: 768px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-Graphic1-414x233.jpg")} />
                    <source media="(min-width: 769px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-Graphic1-820x461.jpg")} />
                    <img className="GridGallery__ItemFullImage WhiteLabel" src={withPrefix("/static/aspect-ratio-images/16x9-Graphic1-820x461.jpg")} alt="Test" />
                </picture>
            </div>
            <div className="GridGallery__ItemFullImageContainer WhiteLabel">
                <picture>
                    <source media="(min-width: 0px) and (max-width: 414px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-Graphic1-414x233.jpg")} />
                    <source media="(min-width: 415px) and (max-width: 768px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-Graphic1-414x233.jpg")} />
                    <source media="(min-width: 769px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-Graphic1-820x461.jpg")} />
                    <img className="GridGallery__ItemFullImage WhiteLabel" src={withPrefix("/static/aspect-ratio-images/16x9-Graphic1-820x461.jpg")} alt="Test" />
                </picture>
            </div>
            <div className="GridGallery__ItemFullImageContainer WhiteLabel">
                <picture>
                    <source media="(min-width: 0px) and (max-width: 414px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-Graphic1-414x233.jpg")} />
                    <source media="(min-width: 415px) and (max-width: 768px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-Graphic1-414x233.jpg")} />
                    <source media="(min-width: 769px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-Graphic1-820x461.jpg")} />
                    <img className="GridGallery__ItemFullImage WhiteLabel" src={withPrefix("/static/aspect-ratio-images/16x9-Graphic1-820x461.jpg")} alt="Test" />
                </picture>
            </div>
            <div className="GridGallery__ItemFullImageContainer WhiteLabel">
                <picture>
                    <source media="(min-width: 0px) and (max-width: 414px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-Graphic1-414x233.jpg")} />
                    <source media="(min-width: 415px) and (max-width: 768px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-Graphic1-414x233.jpg")} />
                    <source media="(min-width: 769px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-Graphic1-820x461.jpg")} />
                    <img className="GridGallery__ItemFullImage WhiteLabel" src={withPrefix("/static/aspect-ratio-images/16x9-Graphic1-820x461.jpg")} alt="Test" />
                </picture>
            </div>
        </div>
    </Link>
);
};

GridGalleryItemFull.propTypes = {
    toggleModal: PropTypes.func.isRequired,
};

export default GridGalleryItemFull;
