import React from "react";
import PropTypes from "prop-types";
import { Box, Multicontent } from "../../accessories";
import { ItemCarousel } from "../../items";
import {
    ContentCarouselStyles,
    ContentCarouselTitleStyles,
    ContentCarouselThumbStyles,
} from "./styles";

const ContentCarousel = ({ children, isAmp }) => {
    return (
        <ContentCarouselStyles>
            <ContentCarouselTitleStyles>Para Ti </ContentCarouselTitleStyles>
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
        </ContentCarouselStyles>
    );
};

ContentCarousel.propTypes = {
    isAmp: PropTypes.bool,
    // items: PropTypes.arrayOf(PropTypes.shape({})),
};

ContentCarousel.defaultProps = {
    isAmp: false,
    // items: [],
};

export default ContentCarousel;
