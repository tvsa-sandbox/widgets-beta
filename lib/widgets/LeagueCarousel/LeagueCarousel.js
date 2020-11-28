import React from "react";
import PropTypes from "prop-types";
import { LeagueCarouselStyles, LeagueCarouselThumb } from "./styles";
import { ItemLeague } from "../../items";
import { Carousel } from "../../accessories";
const LeagueCarousel = props => {
    const { src, ratio } = props;
    return (
        <LeagueCarouselStyles {...props}>
            <Carousel arrow="Back" arrowcolor="black" arrowsize="40">
                <LeagueCarouselThumb variant="Transparent">
                    <ItemLeague ratio={ratio} src={src} />
                </LeagueCarouselThumb>
                <LeagueCarouselThumb variant="Transparent">
                    <ItemLeague ratio={ratio} src={src} />
                </LeagueCarouselThumb>
                <LeagueCarouselThumb variant="Transparent">
                    <ItemLeague ratio={ratio} src={src} />
                </LeagueCarouselThumb>
                <LeagueCarouselThumb variant="Transparent">
                    <ItemLeague ratio={ratio} src={src} />
                </LeagueCarouselThumb>
                <LeagueCarouselThumb variant="Transparent">
                    <ItemLeague ratio={ratio} src={src} />
                </LeagueCarouselThumb>
                <LeagueCarouselThumb variant="Transparent">
                    <ItemLeague ratio={ratio} src={src} />
                </LeagueCarouselThumb>
                <LeagueCarouselThumb variant="Transparent">
                    <ItemLeague ratio={ratio} src={src} />
                </LeagueCarouselThumb>
                <LeagueCarouselThumb variant="Transparent">
                    <ItemLeague ratio={ratio} src={src} />
                </LeagueCarouselThumb>
                <LeagueCarouselThumb variant="Transparent">
                    <ItemLeague ratio={ratio} src={src} />
                </LeagueCarouselThumb>
                <LeagueCarouselThumb variant="Transparent">
                    <ItemLeague ratio={ratio} src={src} />
                </LeagueCarouselThumb>
            </Carousel>
        </LeagueCarouselStyles>
    );
};

LeagueCarousel.propTypes = {
    isAmp: PropTypes.bool,
    src: PropTypes.shape({}),
    ratio: PropTypes.string,
};

LeagueCarousel.defaultProps = {
    isAmp: false,
    src: {},
    ratio: "aspect1x1",
};

export default LeagueCarousel;
