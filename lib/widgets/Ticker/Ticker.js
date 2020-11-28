import React, { useContext } from "react";
import PropTypes from "prop-types";
import { TickerStyles, TickerThumb } from "./styles";
import { Box, Carousel } from "../../accessories";
import { TickerItem } from "../../items";
import { LeagueCarousel } from "../../widgets";
const Ticker = props => {
    const { src, ratio } = props;
    return (
        <TickerStyles {...props}>
            <Box variant="Transparent">
                <LeagueCarousel />
            </Box>
            <Box variant="Transparent">
                <Carousel arrow="Back" arrowcolor="black" arrowsize="40">
                    <TickerThumb variant="Transparent">
                        <TickerItem ratio={ratio} src={src} />
                    </TickerThumb>
                    <TickerThumb variant="Transparent">
                        <TickerItem ratio={ratio} src={src} />
                    </TickerThumb>
                    <TickerThumb variant="Transparent">
                        <TickerItem ratio={ratio} src={src} />
                    </TickerThumb>
                    <TickerThumb variant="Transparent">
                        <TickerItem ratio={ratio} src={src} />
                    </TickerThumb>
                    <TickerThumb variant="Transparent">
                        <TickerItem ratio={ratio} src={src} />
                    </TickerThumb>
                    <TickerThumb variant="Transparent">
                        <TickerItem ratio={ratio} src={src} />
                    </TickerThumb>
                    <TickerThumb variant="Transparent">
                        <TickerItem ratio={ratio} src={src} />
                    </TickerThumb>
                    <TickerThumb variant="Transparent">
                        <TickerItem ratio={ratio} src={src} />
                    </TickerThumb>
                    <TickerThumb variant="Transparent">
                        <TickerItem ratio={ratio} src={src} />
                    </TickerThumb>
                    <TickerThumb variant="Transparent">
                        <TickerItem ratio={ratio} src={src} />
                    </TickerThumb>
                </Carousel>
            </Box>
        </TickerStyles>
    );
};

Ticker.propTypes = {
    src: PropTypes.shape({}),
    ratio: PropTypes.string,
};

Ticker.defaultProps = {
    src: {},
    ratio: "aspect1x1",
};

export default Ticker;
