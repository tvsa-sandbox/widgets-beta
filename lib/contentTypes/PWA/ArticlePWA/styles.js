import styled, { css } from "styled-components";

import Icons from "../../../accessories/Icons";
import Box from "../../../accessories/Box";
import Text from "../../../accessories/Text";
import Title from "../../../accessories/Title";
import Time from "../../../accessories/Time";
import Info from "../../../accessories/Info";
import Anchor from "../../../accessories/Anchor";
import Image from "../../../accessories/Image";

const PageStyles = styled.section(
    ({ theme }) => css`
        min-height: 185px;
        display: grid;
        grid-area: main;
        grid-template-areas:
            "Lead Aside"
            "Body Aside"
            "BodyFull BodyFull";
        grid-template-columns: 70% 30%;
        position: relative;
        max-width: 1081px;
        margin: ${theme.space.auto};
    `,
);

const BoxBodyFull = styled.section`
    grid-area: BodyFull;
`;

const BoxData = styled(Box)(
    ({ theme }) => css`
        display: flex;
        padding: ${theme.space.base} ${theme.space.xl2};
        margin-bottom: ${theme.space.zero};
        flex-direction: column;
        height: auto;

        @media (min-width: ${theme.breakpoints.xl}) {
            flex-direction: row;
            padding: ${theme.space.zero};
            margin-bottom: ${theme.space.zero};
            min-height: 50px;
        }
    `,
);

const BoxContainer = styled(Box)(
    ({ theme }) => css`
        max-width: 1024px;
        margin: 0 ${theme.space.auto};
        @media (min-width: ${theme.breakpoints.xl}) {
            margin-bottom: ${theme.space.xl};
        }
    `,
);

const BoxTitle = styled(Box)(
    ({ theme }) => css`
        display: flex;
        padding-left: ${theme.space.xl2};
        padding-right: ${theme.space.xl2};
        @media (min-width: ${theme.breakpoints.xl}) {
            padding-right: ${theme.space.zero};
            padding-left: ${theme.space.zero};
            padding-top: ${theme.space.xxl};
        }
    `,
);

const BoxAuthor = styled(Box)(
    ({ theme }) => css`
        min-width: 200px;
        width: 100%;
        display: block;
        flex-direction: column;
        position: relative;
        padding-left: ${theme.space.xl2};
        margin-bottom: ${theme.space.xl};
        @media (min-width: ${theme.breakpoints.xl}) {
            width: 50%;
            max-width: 414px;
            display: flex;
            left: 15%;
            padding-left: ${theme.space.zero};
        }
    `,
);

const BoxIcons = styled(Box)(
    ({ theme }) => css`
        display: flex;
        height: 48px;
        margin-right: ${theme.space.lg};
        width: 100%;
        align-items: flex-start;
        position: fixed;
        justify-content: center;
        background: ${theme.colors.Secondary};
        align-items: center;
        z-index: 3;
        bottom: 0;
        @media (min-width: ${theme.breakpoints.xl}) {
            position: relative;
            background: none;
            justify-content: flex-start;
            box-shadow: none;
            height: 48px;
            width: auto;
            position: absolute;
        }
    `,
);

const BoxIconWhats = styled(Box)(
    ({ theme }) => css`
        display: flex;
        width: auto;
        @media (min-width: ${theme.breakpoints.xl}) {
            display: none;
        }
    `,
);

const TitleStyles = styled(Title)(
    ({ theme }) => css`
        font-family: ${theme.fonts[1]};
        font-size: ${theme.fontSizes.fxxl};
        line-height: ${theme.fontSizes.lxxl};
        font-weight: ${theme.fontWeights.bold};
        @media (min-width: ${theme.breakpoints.xl}) {
            min-height: 0px;
            font-size: ${theme.fontSizes.fxl3};
            line-height: 48px;
        }
    `,
);

const AuthorStyles = styled(Info)(
    ({ theme }) => css`
        width: 100%;
        margin: ${theme.space.base};
        margin-top: ${theme.space.zero};
        margin-left: ${theme.space.zero};
        color: ${props => (props.color ? theme.colors[props.color] : theme.colors.Dark)};
        font-family: ${theme.fonts[1]};
        font-size: ${theme.fontSizes.fxs};
        @media (min-width: ${theme.breakpoints.xl}) {
            margin: ${theme.space.auto};
            margin-bottom: ${theme.space.xs};
            margin-top: ${theme.space.zero};
        }
    `,
);

const TimeStyles = styled(Time)(
    ({ theme }) => css`
        width: 100%;
        color: ${props => (props.color ? theme.colors[props.color] : theme.colors.Dark)};
        font-family: ${theme.fonts[1]};
        font-size: ${theme.fontSizes.fxs};
    `,
);

const TextDescription = styled(Text)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fbase};
        line-height: ${theme.lineHeights.lxl};
        font-family: ${theme.fonts[1]};
        width: 100%;

        @media (min-width: ${theme.breakpoints.xl}) {
            min-height: 0px;
            font-size: ${theme.lineHeights.llg};
            line-height: ${theme.lineHeights.lxxl};
            margin-bottom: ${theme.space.xl};
        }
    `,
);

const IconFacebook = styled(Icons)(
    ({ theme }) => css`
        margin-right: ${theme.space.md};
        margin-left: ${theme.space.md};
        width: 60px;
        height: 40px;
        fill: #9f9f9f;
        &:hover {
            fill: #1877f2;
        }
        @media (min-width: ${theme.breakpoints.xl}) {
            margin: ${theme.space.zero};
            fill: #1877f2;
            width: 40px;
        }
    `,
);

const IconTwitter = styled(Icons)(
    ({ theme }) => css`
        margin-right: ${theme.space.md};
        margin-left: ${theme.space.md};
        width: 60px;
        height: 40px;
        fill: #9f9f9f;
        &:hover {
            fill: #1da1f2;
        }
        @media (min-width: ${theme.breakpoints.xl}) {
            margin: ${theme.space.zero};
            fill: #1da1f2;
            width: 40px;
        }
    `,
);
const IconWhatsApp = styled(Icons)(
    ({ theme }) => css`
        margin-right: ${theme.space.md};
        margin-left: ${theme.space.md};
        width: 60px;
        height: 40px;
        fill: #9f9f9f;
        &:hover {
            fill: #25d366;
        }
        @media (min-width: ${theme.breakpoints.xl}) {
            margin: ${theme.space.zero};
            fill: #25d366;
            width: 40px;
        }
    `,
);
const IconEmail = styled(Icons)(
    ({ theme }) => css`
        margin-right: ${theme.space.md};
        margin-left: ${theme.space.md};
        width: 60px;
        height: 40px;
        fill: #9f9f9f;
        &:hover {
            fill: #c2c2c2;
        }
        @media (min-width: ${theme.breakpoints.xl}) {
            margin: ${theme.space.zero};
            fill: #c2c2c2;
            width: 40px;
        }
    `,
);

const LabelStyles = styled(Anchor)(
    ({ theme }) => css`
        font-family: ${theme.fonts[1]};
        font-size: ${theme.fontSizes.fsm};
        color: ${theme.colors.Interaction};
        padding-bottom: ${theme.space.xl};
        padding-top: ${theme.space.xl2};
        padding-left: ${theme.space.xl2};
        padding-right: ${theme.space.xl2};
        display: flex;
        @media (min-width: ${theme.breakpoints.xl}) {
            display: none;
        }
    `,
);

const AnchorIcon = styled(Anchor)`
    height: 48px;
    align-items: center;
    display: flex;
`;

const ArticleText = styled(Text)(
    ({ theme }) => css`
        color: ${theme.colors.Dark};
        padding-left: ${theme.space.xl2};
        padding-right: ${theme.space.xl2};
        margin-bottom: ${theme.space.xxl};
        margin-top: ${theme.space.xxl};
        font-size: ${theme.fontSizes.fmd};
        line-height: ${theme.lineHeights.llg};
        a {
            color: ${theme.colors.Interaction};
        }
        b {
            font-weight: 700;
        }
    `,
);

const ArticleImage = styled(Image)(
    ({ theme }) => css`
        div {
            margin-bottom: ${theme.space.xl2};
            margin-top: ${theme.space.xl2};
        }
    `,
);

const AdsImageStyles = styled.img(
    ({ theme }) => css`
        display: flex;
        width: 80%;
        margin: ${theme.space.xl} auto;
        @media (min-width: ${theme.breakpoints.xl}) {
            width: 50%;
            height: 50px;
        }
    `,
);

export {
    PageStyles,
    BoxBodyFull,
    BoxData,
    BoxTitle,
    TitleStyles,
    TimeStyles,
    BoxAuthor,
    AuthorStyles,
    AnchorIcon,
    TextDescription,
    BoxIcons,
    BoxContainer,
    IconFacebook,
    BoxIconWhats,
    IconWhatsApp,
    IconTwitter,
    IconEmail,
    LabelStyles,
    ArticleText,
    ArticleImage,
    AdsImageStyles,
};