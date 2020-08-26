import React from "react";
import PropTypes from "prop-types";

import {
    CarouselStyles,
    Track,
    Thumbnails,
    IconStylesRight,
    IconStylesLeft,
    ButtonStylesRight,
    ButtonStylesLeft,
    CarouselImageStyles,
} from "./styles";

const Carousel = props => {
    const { children, arrow } = props;
    return (
        <CarouselStyles {...props}>
            <ButtonStylesLeft variant="Transparent">
                {arrow === "Transparent" ? (
                    <IconStylesLeft name="ArrowLeft" variant="Inactive" />
                ) : (
                    <IconStylesLeft name="ArrowLeft" variant="Solid" />
                )}
            </ButtonStylesLeft>
            <Track>
                <Thumbnails>{children}</Thumbnails>
            </Track>
            <ButtonStylesRight variant="Transparent">
                {arrow === "Transparent" ? (
                    <IconStylesRight name="ArrowRight" variant="Inactive" />
                ) : (
                    <IconStylesRight name="ArrowRight" variant="Solid" />
                )}
            </ButtonStylesRight>
        </CarouselStyles>
    );
};

Carousel.propTypes = {
    arrow: PropTypes.string,
};

Carousel.defaultProps = {
    arrow: "Transparent",
};

export default Carousel;
