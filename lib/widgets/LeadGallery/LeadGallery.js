import React from "react";
import PropTypes from "prop-types";
import LeadGalleryStyles from "./styles";
import Carousel from "../../accessories/Carousel";
import LeadGalleryItem from "../../items/LeadGalleryItem";

const LeadGallery = props => {
    const { items, isAMP, src, ratio } = props;
    return (
        <Carousel aria-label="LeadGallery">
            {items.map((item, index) => {
                const KEY = `${items.title}-${index}`;
                return (
                    <LeadGalleryStyles variant="Transparent" key={KEY}>
                        <LeadGalleryItem {...item} src={src} ratio={ratio} />
                    </LeadGalleryStyles>
                );
            })}
        </Carousel>
    );
};

LeadGallery.propTypes = {
    src: PropTypes.shape({}),
    ratio: PropTypes.string,
    isAmp: PropTypes.bool,
    items: PropTypes.arrayOf(PropTypes.shape({})),
};

LeadGallery.defaultProps = {
    src: {},
    ratio: "aspect16x9",
    isAmp: false,
    items: [],
};

export default LeadGallery;
