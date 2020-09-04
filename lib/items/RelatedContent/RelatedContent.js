import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "styled-components";
import {
    RelatedContentStyles,
    RelatedContentTextStyles,
    RelatedContentTitleBox,
    RelatedContentTitleStyles,
    RelatedContentImageContainer,
    RelatedContentImage,
    RelatedContentBoxButtonStyles,
    RelatedContentButtonStyles,
} from "./styles";
import { Image } from "../../accessories";

const RelatedContent = props => {
    return (
        <RelatedContentStyles variant="transparent">
            <RelatedContentTextStyles>Relacionado</RelatedContentTextStyles>
            <RelatedContentTitleBox variant="Transparent">
                <RelatedContentTitleStyles variant="h6">
                    Andrea Legarreta revela qué síntomas de coronavirus padece y si su familia
                    también se contagió
                </RelatedContentTitleStyles>
            </RelatedContentTitleBox>
            <RelatedContentImageContainer variant="transparent">
                <Image ratio="aspect16x9" />
            </RelatedContentImageContainer>
            <RelatedContentBoxButtonStyles variant="Transparent">
                <RelatedContentButtonStyles variant="Solid">Leer más</RelatedContentButtonStyles>
            </RelatedContentBoxButtonStyles>
        </RelatedContentStyles>
    );
};

RelatedContent.propTypes = {
    attribution: PropTypes.string,
    domain: PropTypes.string.isRequired,
    image: PropTypes.shape({
        desktop: PropTypes.shape({
            srcSet: PropTypes.string,
        }),
        mobile: PropTypes.shape({
            srcSet: PropTypes.string,
        }),
    }),
    index: PropTypes.string.isRequired,
    isAmp: PropTypes.bool.isRequired,
    uri: PropTypes.string.isRequired,
};

RelatedContent.defaultProps = {
    attribution: "Maddie Meyer/Getty Images",
    image: {
        mobie: {
            srcSet: "",
        },
    },
};

export default RelatedContent;
