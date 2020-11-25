import styled, { css } from "styled-components";
import Box from "../../accessories/Box";
import Title from "../../accessories/Title";
import Time from "../../accessories/Time";
import Text from "../../accessories/Text";
import Icons from "../../accessories/Icons";
import Button from "../../accessories/Button";

const ItemVideoStyles = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        margin: ${theme.space.auto};
        max-width: 820px;
    `,
);

const CaptionBoxStyles = styled(Box)(
    ({ theme }) => css`
        color: ${theme.colors.gray};
        padding: ${theme.space.zero} ${theme.space.lg};

        @media (min-width: ${theme.breakpoints.lg}) {
            padding: ${theme.space.xl} ${theme.space.zero};
        }
    `,
);
const BoxTimeStyles = styled(Box)(
    ({ theme }) => css`
        display: flex;
        justify-content: space-between;
        color: ${theme.colors.gray3};
    `,
);

const ItemVideoText = styled(Text)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fsm};
    `,
);

const ItemVideoTitleStyles = styled(Title)(
    ({ theme }) => css`
        margin-top: ${theme.space.md};
        font-size: ${theme.fontSizes.fmd};
        line-height: ${theme.lineHeights.lbase};
        font-weight: normal;
    `,
);

const DescriptionTextStyles = styled(Text)(
    ({ theme }) => css`
        color: ${theme.colors.gray3};
        font-size: ${theme.fontSizes.fsm};
        margin-top: ${theme.space.md};
    `,
);

const ItemVideoTime = styled(Time)(
    ({ theme }) => css`
        margin-left: ${theme.space.xxl};
        color: ${theme.colors.gray3};
        font-size: ${theme.fontSizes.fsm};
    `,
);

const ItemVideoBoxVideoPlayer = styled(Box)`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    display: none; /*quitar al montar en ui*/
`;

const BoxIconsStyles = styled(Box)(
    ({ theme }) => css`
        display: flex;
        margin-top: ${theme.space.lg};

        &::after {
            content: "";
            display: flex;
            background: ${theme.colors.gray2};
            width: 100%;
            height: 1px;
            margin: ${theme.space.md} auto;
            top: 100%;
            position: absolute;
        }

        &::before {
            content: "";
            display: flex;
            background: ${theme.colors.gray2};
            width: 100%;
            height: 1px;
            margin: ${theme.space.md} auto;
            bottom: 100%;
            position: absolute;
        }

        @media (min-width: ${theme.breakpoints.lg}) {
            margin-top: ${theme.space.xxl};
        }
    `,
);

const ItemIconStyles = styled(Icons)(
    ({ theme }) => css`
        border-radius: 100%;
        border: 1px solid ${theme.colors.gray};
        width: 48px;
        height: 48px;
        fill: ${theme.colors.gray};
    `,
);

const IconTextStyles = styled(Button)(
    ({ theme }) => css`
        right: 0px;
        position: absolute;
        font-size: ${theme.fontSizes.fsm};
        color: ${theme.colors.gray3};
        border: 1px solid ${theme.colors.gray};
        padding: ${theme.space.zero} ${theme.space.xl2};
    `,
);

const BoxSocial = styled(Box)(
    ({ theme }) => css`
        width: auto;
        display: ${props => (props.isMobile ? "inline-flex" : "none")};
        justify-content: flex-end;
        div {
            border-bottom: none;
        }
        @media (min-width: ${theme.breakpoints.lg}) {
            max-width: 300px;
            margin-left: auto;
            display: ${props => (props.isMobile ? "none" : "inline-flex")};
        }
    `,
);

export {
    ItemVideoStyles,
    ItemVideoTitleStyles,
    DescriptionTextStyles,
    CaptionBoxStyles,
    ItemVideoText,
    ItemVideoTime,
    BoxIconsStyles,
    ItemIconStyles,
    BoxTimeStyles,
    IconTextStyles,
    ItemVideoBoxVideoPlayer,
    BoxSocial,
};
