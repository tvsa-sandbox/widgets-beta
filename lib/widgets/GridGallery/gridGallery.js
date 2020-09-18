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
    const { title, src, ratio } = props;
    return (
        <GridGalleryBoxStyles variant="Transparent">
            <GridGalleryStyles {...props}>
                <GridGalleryAnchorStyles
                    href="./?path=/story/desing-system-enhancement-gridgalleryopen--gridgalleryopen"
                    aria-label="gallery"
                >
                    <Image ratio={ratio} src={src} />
                    <GridGalleryCaptionStyles>Image Headline</GridGalleryCaptionStyles>
                </GridGalleryAnchorStyles>
                <GridGalleryAnchorStyles
                    href="./?path=/story/desing-system-enhancement-gridgalleryopen--gridgalleryopen"
                    aria-label="gallery"
                >
                    <Image ratio={ratio} src={src} />
                    <GridGalleryCaptionStyles>Image Headline</GridGalleryCaptionStyles>
                </GridGalleryAnchorStyles>
                <GridGalleryAnchorStyles
                    href="./?path=/story/desing-system-enhancement-gridgalleryopen--gridgalleryopen"
                    aria-label="gallery"
                >
                    <Image ratio={ratio} src={src} />
                    <GridGalleryCaptionStyles>Image Headline</GridGalleryCaptionStyles>
                </GridGalleryAnchorStyles>
                <GridGalleryAnchorStyles
                    href="./?path=/story/desing-system-enhancement-gridgalleryopen--gridgalleryopen"
                    aria-label="gallery"
                >
                    <Image ratio={ratio} src={src} />
                    <GridGalleryCaptionStyles>Image Headline</GridGalleryCaptionStyles>
                </GridGalleryAnchorStyles>
                <GridGalleryAnchorStyles
                    href="https://tvsa-sandbox.github.io/widgets-beta/?path=/story/desing-system-enhancement-gridgalleryopen--gridgalleryopen"
                    aria-label="gallery"
                >
                    <Image ratio={ratio} src={src} />
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
    ratio: PropTypes.string,
    src: PropTypes.shape({
        desktop: PropTypes.shape({
            srcSet: PropTypes.string,
        }),
        mobile: PropTypes.shape({
            srcSet: PropTypes.string,
        }),
    }),
};

GridGallery.defaultProps = {
    title: "Angelique Boyer presume músculos de impacto y revela secreto para mantenerse en forma",
    ratio: "aspect1x1",
    src: {
        desktop: {
            srcSet: "",
        },
        mobie: {
            srcSet: "",
        },
    },
};

export default GridGallery;
