import React from "react";
import PropTypes from "prop-types";
import { Image } from "../../accessories";

import {
    GridGalleryStyles,
    GridGalleryTitleStyles,
    BoxData,
    GridGalleryInfoStyles,
    GridGalleryAnchorStyles,
    GridGalleryCaptionStyles,
    GridGalleryBoxStyles,
} from "./styles";

const GridGallery = props => {
    const { title } = props;
    return (
        <GridGalleryBoxStyles variant="Transparent">
            <GridGalleryStyles {...props}>
                <GridGalleryAnchorStyles href="./">
                    <Image ratio="aspect1x1" />
                    <GridGalleryCaptionStyles>Image Headline</GridGalleryCaptionStyles>
                </GridGalleryAnchorStyles>
                <GridGalleryAnchorStyles href="./">
                    <Image ratio="aspect1x1" />
                    <GridGalleryCaptionStyles>Image Headline</GridGalleryCaptionStyles>
                </GridGalleryAnchorStyles>
                <GridGalleryAnchorStyles href="./">
                    <Image ratio="aspect1x1" />
                    <GridGalleryCaptionStyles>Image Headline</GridGalleryCaptionStyles>
                </GridGalleryAnchorStyles>
                <GridGalleryAnchorStyles href="./">
                    <Image ratio="aspect1x1" />
                    <GridGalleryCaptionStyles>Image Headline</GridGalleryCaptionStyles>
                </GridGalleryAnchorStyles>
                <GridGalleryAnchorStyles href="./">
                    <Image ratio="aspect1x1" />
                    <GridGalleryCaptionStyles>+10</GridGalleryCaptionStyles>
                </GridGalleryAnchorStyles>
            </GridGalleryStyles>
            <BoxData variant="Transparent">
                <GridGalleryInfoStyles color="gray3">
                    Por: Instagram de Televisa
                </GridGalleryInfoStyles>
                <GridGalleryTitleStyles variant="h6">{title}</GridGalleryTitleStyles>
            </BoxData>
        </GridGalleryBoxStyles>
    );
};

GridGallery.propTypes = {
    title: PropTypes.string,
};

GridGallery.defaultProps = {
    title: "Angelique Boyer presume músculos de impacto y revela secreto para mantenerse en forma",
};

export default GridGallery;
