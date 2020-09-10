import React from "react";
import {
    RelatedContentStyles,
    RelatedContentTextStyles,
    RelatedContentTitleBox,
    RelatedContentTitleStyles,
    RelatedContentImageContainer,
    RelatedContentBoxButtonStyles,
    RelatedContentButtonStyles,
} from "./styles";
import { Image } from "../../accessories";

const RelatedContent = props => {
    return (
        <RelatedContentStyles variant="transparent">
            <RelatedContentTextStyles>Relacionado</RelatedContentTextStyles>
            <RelatedContentTitleBox variant="Transparent">
                <RelatedContentTitleStyles variant="h2">
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

export default RelatedContent;
