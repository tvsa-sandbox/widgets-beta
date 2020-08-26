import React from "react";
import PropTypes from "prop-types";
import {
    ItemCarouselStyles,
    ItemCarouselIconDurationStyles,
    ItemCarouselBoxStyles,
    ItemCarouselTextStyles,
    ItemCarouselTimeStyles,
    ItemCarouselSection,
} from "./styles";
import { Box, Image } from "../../accessories";

const ItemCarousel = ({ isAmp, video, image, publishDate, uri, title, gallery, section }) => {
    return (
        <ItemCarouselStyles href={uri}>
            <Box>
                <Image alt={title} ratio="aspect16x9" iconwidth="40" isAmp={isAmp} src={image} />
                {/* {video && (
                    <ItemCarouselIconDurationStyles name="Video">
                        {video}
                    </ItemCarouselIconDurationStyles>
                )} */}
                {gallery && (
                    <ItemCarouselIconDurationStyles name="Gallery">
                        {gallery}
                    </ItemCarouselIconDurationStyles>
                )}
            </Box>
            <ItemCarouselBoxStyles>
                {section && <ItemCarouselSection>{section}</ItemCarouselSection>}
                {title && <ItemCarouselTextStyles>{title}</ItemCarouselTextStyles>}
                {publishDate && (
                    <ItemCarouselTimeStyles variant="Airtime">{publishDate}</ItemCarouselTimeStyles>
                )}
            </ItemCarouselBoxStyles>
        </ItemCarouselStyles>
    );
};

ItemCarousel.propTypes = {
    gallery: PropTypes.string,
    image: PropTypes.shape({}),
    publishDate: PropTypes.string,
    uri: PropTypes.string,
    section: PropTypes.string,
    title: PropTypes.string,
    isAmp: PropTypes.bool,
    video: PropTypes.string,
};

ItemCarousel.defaultProps = {
    gallery: "11 fotos",
    image: {
        desktop: {
            srcSet: "",
        },
        mobile: {
            srcSet: "",
        },
    },
    publishDate: "11 feb ",
    uri: "./",
    section: "una familia de diez",
    title: "un titulo para las fotos",
    isAmp: false,
    video: "",
};

export default ItemCarousel;
