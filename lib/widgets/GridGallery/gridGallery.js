import React from "react";
import PropTypes from "prop-types";
import { Image } from "../../accessories";

import {
    GridGalleryStyles,
    GridGalleryTitleStyles,
    GridGalleryBoxData,
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
                <GridGalleryAnchorStyles href="./" aria-label="gallery">
                    <Image ratio="aspect1x1" />
                    <GridGalleryCaptionStyles>Image Headline</GridGalleryCaptionStyles>
                </GridGalleryAnchorStyles>
                <GridGalleryAnchorStyles href="./" aria-label="gallery">
                    <Image ratio="aspect1x1" />
                    <GridGalleryCaptionStyles>Image Headline</GridGalleryCaptionStyles>
                </GridGalleryAnchorStyles>
                <GridGalleryAnchorStyles href="./" aria-label="gallery">
                    <Image ratio="aspect1x1" />
                    <GridGalleryCaptionStyles>Image Headline</GridGalleryCaptionStyles>
                </GridGalleryAnchorStyles>
                <GridGalleryAnchorStyles href="./" aria-label="gallery">
                    <Image ratio="aspect1x1" />
                    <GridGalleryCaptionStyles>Image Headline</GridGalleryCaptionStyles>
                </GridGalleryAnchorStyles>
                <GridGalleryAnchorStyles href="./" aria-label="gallery">
                    <Image ratio="aspect1x1" />
                    <GridGalleryCaptionStyles>+10</GridGalleryCaptionStyles>
                </GridGalleryAnchorStyles>
            </GridGalleryStyles>
            <GridGalleryBoxData variant="Transparent">
                <GridGalleryInfoStyles color="gray3">
                    Por: Instagram de Televisa
                </GridGalleryInfoStyles>
                <GridGalleryTitleStyles variant="h3">{title}</GridGalleryTitleStyles>
            </GridGalleryBoxData>
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
