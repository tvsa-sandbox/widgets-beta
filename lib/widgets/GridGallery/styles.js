import styled, { css } from "styled-components";
import { Title, Info, Anchor, Box } from "../../accessories";
import { BoxData } from "../../contentTypes/PWA/ArticlePWA/styles";

const GridGalleryBoxStyles = styled(Box)(
    ({ theme }) => css`
        margin: ${theme.space.lg} ${theme.space.zero};
    `,
);

const GridGalleryStyles = styled("grid")`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-areas: "large large large large2 large2 large2";
    grid-template-rows: auto auto;
    grid-gap: 2px;
`;

const GridGalleryAnchorStyles = styled(Anchor)`
    &:hover {
        opacity: 0.5;
    }
    &:first-of-type {
        grid-area: large;
    }
    &:nth-of-type(2) {
        grid-area: large2;
    }
    &:nth-of-type(3) {
        grid-column-start: 1;
        grid-column-end: 3;
    }
    &:nth-of-type(4) {
        grid-column-start: 3;
        grid-column-end: 5;
    }

    &:nth-of-type(5) {
        grid-column-start: 5;
        grid-column-end: 7;
        position: relative;
    }

    &:nth-of-type(5) figcaption {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        position: absolute;
        font-size: 25px;
        width: 100%;
        height: 100%;
        top: 0%;
        background: rgba(0, 0, 0, 0.5);
    }
`;

const GridGalleryInfoStyles = styled(Info)(
    ({ theme }) => css`
        align-self: flex-start;
        color: ${props => (props.color ? theme.colors[props.color] : theme.colors.Dark)};
    `,
);

const GridGalleryCaptionStyles = styled("figcaption")`
    display: none;
`;

const GridGalleryTitleStyles = styled(Title)(
    ({ theme }) => css`
        margin: ${theme.space.lg} ${theme.space.zero};

        &::after {
            content: "";
            height: 1px;
            width: 60px;
            background: ${theme.colors.Dark};
            display: block;
            margin: ${theme.space.xl2} ${theme.space.auto} ${theme.space.zero};
        }
    `,
);

export {
    GridGalleryStyles,
    GridGalleryTitleStyles,
    BoxData,
    GridGalleryInfoStyles,
    GridGalleryAnchorStyles,
    GridGalleryCaptionStyles,
    GridGalleryBoxStyles,
};
