import styled, { css } from "styled-components";
import Box from "../../accessories/Box";
import Text from "../../accessories/Text";
const ItemVideoStyles = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        margin: ${theme.space.auto};
        max-width: 820px;
    `,
);

const CaptionBoxStyles = styled(Box)(
    ({ theme }) => css`
        background: ${theme.colors.gray4};
        color: ${theme.colors.gray};
        padding: ${theme.space.lg};
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
const ItemVideoBoxVideoPlayer = styled(Box)`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    display: none; /*quitar al montar en ui*/
`;

const BoxIconsStyles = styled(Box)(
    () => css`
        display: flex;
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
    CaptionBoxStyles,
    ItemVideoText,
    BoxIconsStyles,
    BoxTimeStyles,
    ItemVideoBoxVideoPlayer,
    BoxSocial,
};
