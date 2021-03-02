import styled, { css } from "styled-components";
import { Box, Button } from "../../accessories";

const VersusStyles = styled.section(
    ({ theme }) => css`
        max-width: 500px;
        margin: ${theme.space.zero} ${theme.space.auto};
    `,
);

const VersusBoxButtons = styled(Box)(
    ({ theme }) => css`
        display: grid;
        grid-template-columns: 50% 50%;

        @media (min-width: ${theme.breakpoints.xl}) {
            grid-template-columns: 25% 25% 25% 25%;
        }
    `,
);

const VersusBoxButtonInactive = styled(Box)(
    ({ theme }) => css`
        padding: ${theme.space.sm};
    `,
);

const ButtonInactive = styled(Button)(
    ({ theme }) => css`
        font-weight: bold;
        border-radius: 10px;
        background: ${theme.colors.gray4};
        width: 100%;
        justify-content: center;
        font-size: ${theme.fontSizes.fsm};
        color: ${theme.colors.Light};
    `,
);

const VersusBoxButtonActive = styled(Box)(
    ({ theme }) => css`
        padding: ${theme.space.sm};
    `,
);

const ButtonActive = styled(Button)(
    ({ theme }) => css`
        font-weight: bold;
        border-radius: 10px;
        background: ${theme.colors.Interaction};
        width: 100%;
        justify-content: center;
        font-size: ${theme.fontSizes.fsm};
    `,
);

const VersusBoxSection = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        display: flex;
        padding: ${theme.space.sm};
        align-items: flex-start;
    `,
);

const VersusBoxFactColumn = styled(Box)(
    ({ theme }) => css`
        width: 40%;
        padding: ${theme.space.sm};
    `,
);

const VersusFactButton = styled(Box)(
    () => css`
        height: 60px;
    `,
);

const VersusFact = styled(Box)(
    ({ theme }) => css`
        display: flex;
        height: 30px;
        font-size: ${theme.fontSizes.fxs};
        font-weight: bold;

        @media (min-width: ${theme.breakpoints.xl}) {
            font-size: ${theme.fontSizes.fsm};
        }
    `,
);

const VersusBoxEstadisticColumn = styled(Box)(
    ({ theme }) => css`
        width: 21%;
        padding: ${theme.space.sm};

        @media (min-width: ${theme.breakpoints.xl}) {
            width: 25%;
        }
    `,
);

const VersusBoxImage = styled(Box)(
    ({ theme }) => css`
        display: flex;
        height: 40px;
        max-width: 40px;
        margin: 10px ${theme.space.auto};
        border-radius: 20px;
        overflow: hidden;
    `,
);

const VersusNumbers = styled(Box)(
    ({ theme }) => css`
        display: flex;
        height: 30px;
        font-size: ${theme.fontSizes.fxs};
        justify-content: center;

        @media (min-width: ${theme.breakpoints.xl}) {
            font-size: ${theme.fontSizes.fsm};
        }
    `,
);

const VersusAddColumn = styled(Box)(
    ({ theme }) => css`
        width: 18%;
        padding: ${theme.space.sm};

        @media (min-width: ${theme.breakpoints.xl}) {
            width: 18%;
        }
    `,
);

const VersusAddButton = styled(Box)(
    ({ theme }) => css`
        display: flex;
        height: 40px;
        width: 40px;
        margin: 10px ${theme.space.auto};
        border-radius: 20px;
        overflow: hidden;
    `,
);

export {
    VersusStyles,
    VersusBoxButtonInactive,
    VersusBoxButtonActive,
    VersusBoxButtons,
    ButtonInactive,
    ButtonActive,
    VersusBoxSection,
    VersusBoxFactColumn,
    VersusFactButton,
    VersusFact,
    VersusBoxEstadisticColumn,
    VersusBoxImage,
    VersusNumbers,
    VersusAddColumn,
    VersusAddButton,
};
