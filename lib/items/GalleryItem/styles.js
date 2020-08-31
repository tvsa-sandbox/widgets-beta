import styled, { css } from "styled-components";
import { Box, Image, Info, Text, Counter, Button, Icons } from "../../accessories";

const GalleryItemStyles = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        display: block;
        position: relative;
        margin: ${theme.space.md} auto;
        min-height: 185px;
        @media (min-width: ${theme.breakpoints.xl}) {
            max-width: 1024px;
            display: grid;
            grid-template-areas: "Body Aside";
            grid-template-columns: minmax(70%, 716px) minmax(30%, 303px);
            gap: 10px 10px;
        }
    `,
);

const GalleryItemImageContainer = styled(Box)(
    ({ theme }) => css`
        display: flex;
        position: relative;
        height: 100%;
        @media (min-width: ${theme.breakpoints.xxl}) {
            grid-area: Body;
            max-width: 716px;
        }
        #pinterest {
            display: none;
        }
        &:hover #pinterest {
            display: flex;
        }
    `,
);

const GalleryItemButton = styled(Button)(
    ({ theme }) => css`
        display: none;
        position: absolute;
        z-index: 5;
        background-color: #e60023;
        color: ${theme.colors.gray};
        align-items: center;
        height: 20px;
        font-size: ${theme.fontSizes.fxs};
        margin: ${theme.space.xs};
        padding-left: ${theme.space.xs};
        padding-right: ${theme.space.sm};
        border-radius: 3px;
        font-family: ${theme.fonts[2]};
        @media (min-width: ${theme.breakpoints.lg}) {
            border-radius: 9px;
            height: 30px;
            padding-left: ${theme.space.sm};
            padding-right: ${theme.space.sm};
            cursor: pointer;
            margin: ${theme.space.md};
            font-size: ${theme.fontSizes.fsm};
        }
    `,
);

const GalleryItemPinterest = styled(Icons)(
    ({ theme }) => css`
        display: none;
        height: 20px;
        width: 20px;
        @media (min-width: ${theme.breakpoints.xl}) {
            height: 25px;
            width: 25px;
        }
    `,
);

const GalleryItemImage = styled(Image)`
    height: 100%;
`;

const GalleryItemCaption = styled(Box)(
    ({ theme }) => css`
        display: block;
        width: 100%;
        margin: ${theme.space.zero};
        background: ${theme.colors.Light};
        box-shadow: #d6d6d6 2px 2px 6px;
        height: auto;
        padding: ${theme.space.xxl} ${theme.space.xl} ${theme.space.xl2};
        color: ${theme.colors.gray2};
        font-family: ${theme.fonts[2]};
        @media (min-width: ${theme.breakpoints.xl}) {
            grid-area: Aside;
            margin: ${theme.space.zero};
            justify-self: center;
            padding: ${theme.space.xl};
            height: 100%;
        }
    `,
);

const GalleryItemCounter = styled(Counter)(
    ({ theme }) =>
        css`
            padding-right: ${theme.space.sm};
            letter-spacing: 2px;
            font-weight: ${theme.fontWeights.bold};
            color: ${theme.colors.gray3};
            opacity: 0.9;
            font-family: ${theme.fonts[2]};
        `,
);

const GalleryItemInfo = styled(Info)(
    ({ theme }) => css`
        letter-spacing: 1px;
        line-height: ${theme.lineHeights.lxs};
        font-size: ${theme.fontSizes.fxs};
        width: 100%;
        color: ${theme.colors.gray3};
        opacity: 0.9;
        font-family: ${theme.fonts[2]};
    `,
);

const GalleryItemData = styled(Box)(
    ({ theme }) => css`
        display: contents;
        position: relative;
        @media (min-width: ${theme.breakpoints.xl}) {
            display: inline-block;
        }
    `,
);

const GalleryItemDescription = styled(Text)(
    ({ theme }) => css`
        letter-spacing: 1px;
        line-height: 22px;
        font-size: ${theme.fontSizes.fmd};
        font-weight: ${theme.fontWeights.normal};
        width: 100%;
        margin-top: ${theme.space.xl};
        max-height: 200px;
        overflow: hidden;
        color: ${theme.colors.Dark};
        @media (min-width: ${theme.breakpoints.xl}) {
            max-height: 330px;
        }
    `,
);

const SkeletonStyleImage = styled.div(
    ({ theme }) => css`
        width: 100%;
        @media (min-width: ${theme.breakpoints.xl}) {
            grid-area: Body;
            max-width: 716px;
        }
    `,
);

const SkeletonStyleAside = styled.div(
    ({ theme }) => css`
        background: ${theme.colors.Secondary};
        height: 200px;
        @media (min-width: ${theme.breakpoints.xl}) {
            grid-area: Aside;
            height: 100%;
        }
    `,
);

export {
    GalleryItemStyles,
    GalleryItemImageContainer,
    GalleryItemImage,
    GalleryItemCaption,
    GalleryItemCounter,
    GalleryItemInfo,
    GalleryItemDescription,
    GalleryItemButton,
    GalleryItemPinterest,
    SkeletonStyleImage,
    SkeletonStyleAside,
    GalleryItemData,
};
