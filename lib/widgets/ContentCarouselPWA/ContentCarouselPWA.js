import React from "react";
import PropTypes from "prop-types";
import { Box, Multicontent } from "../../accessories";
import { ItemCarouselPWA } from "../../items";
import {
    ContentCarouselPWAStyles,
    ContentCarouselTitleStyles,
    ContentCarouselThumbStyles,
} from "./styles";

const ContentCarouselPWA = ({ children, isAmp }) => {
    return (
        <ContentCarouselPWAStyles>
            <ContentCarouselTitleStyles variant="h2">
                Te podría interesar
            </ContentCarouselTitleStyles>
            <Box variant="Transparent">
                <Multicontent>
                    {children}
                    {/* {items.map((item, index) => {
                        const KEY = `${items.title}-${index}`;
                        return (
                            <ContentCarouselThumbStyles key={KEY}>
                                <ItemCarousel {...item} isAmp={isAmp} />
                            </ContentCarouselThumbStyles>
                        );
                    })} */}
                </Multicontent>
            </Box>
        </ContentCarouselPWAStyles>
    );
};

ContentCarouselPWA.propTypes = {
    isAmp: PropTypes.bool,
    // items: PropTypes.arrayOf(PropTypes.shape({})),
};

ContentCarouselPWA.defaultProps = {
    isAmp: false,
    // items: [],
};

export default ContentCarouselPWA;
