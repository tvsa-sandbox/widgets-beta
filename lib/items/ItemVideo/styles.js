import styled, { css } from "styled-components";
import Box from "../../accessories/Box";
import Title from "../../accessories/Title";
import Time from "../../accessories/Time";
import Text from "../../accessories/Text";
import Icons from "../../accessories/Icons";
import Button from "../../accessories/Button";
import Anchor from "../../accessories/Anchor";

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
        padding: ${theme.space.xl};
    `,
);
const BoxTimeStyles = styled(Box)(
    ({ theme }) => css`
        display: flex;
        color: ${theme.colors.gray3};
    `,
);

const ItemVideoText = styled(Text)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fsm};
        margin-right: ${theme.space.lg};
    `,
);

const ItemVideoTitleStyles = styled(Title)(
    ({ theme }) => css`
        margin-top: ${theme.space.xl};
        font-size: ${theme.fontSizes.flg};
        line-height: ${theme.lineHeights.lxl};
        font-weight: bold;
    `,
);

const DescriptionTextStyles = styled(Text)(
    ({ theme }) => css`
        color: ${theme.colors.gray3};
        font-size: ${theme.fontSizes.fbase};
        line-height: ${theme.lineHeights.llg};
        margin: ${theme.space.md} ${theme.space.zero};
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

        @media (min-width: ${theme.breakpoints.lg}) {
            margin-top: ${theme.space.xxl};
        }
    `,
);

const ItemIconAnchor = styled(Anchor)(
    ({ theme }) => css`
        border-radius: 100%;
        border: 1px solid ${theme.colors.gray};
        width: 48px;
        height: 48px;
        fill: ${theme.colors.gray};
    `,
);

const ItemIconStyles = styled(Icons)(
    ({ theme }) => css`
        border-radius: 100%;
        width: 48px;
        height: 48px;
        fill: ${theme.colors.gray};
    `,
);

const IconTextStyles = styled(Button)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fmd};
        color: ${theme.colors.Interaction};
        padding: ${theme.space.zero} ${theme.space.xl2};
    `,
);

const BoxSocial = styled(Box)(
    ({ theme }) => css`
        width: auto;
        display: ${props => (props.isMobile ? "inline-flex" : "none")};
        justify-content: flex-end;
        margin-left: auto;

        div {
            border-bottom: none;
        }

        @media (min-width: ${theme.breakpoints.lg}) {
            max-width: 300px;
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
    ItemIconAnchor,
    ItemIconStyles,
    BoxTimeStyles,
    IconTextStyles,
    ItemVideoBoxVideoPlayer,
    BoxSocial,
};
