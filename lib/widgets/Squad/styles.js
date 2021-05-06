import styled, { css } from "styled-components";
import { Title, Box, Button } from "../../accessories";

const SquadStyles = styled.section(
    ({ theme }) => css`
        max-width: 418px;
        box-shadow: #d6d6d6 2px 2px 6px;
        height: auto;
        min-height: 500px;
        background: ${theme.colors.Light};
    `,
);

const SquadBoxButtons = styled(Box)(
    () => css`
        background: none;
        cursor: pointer;
        height: 50px;
    `,
);

const SquadBoxButtonActive = styled(Box)(
    ({ theme }) => css`
        border-bottom: 2px solid ${theme.colors.Interaction};
    `,
);

const SquadBoxSection = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        display: flex;
        padding: ${theme.space.sm} ${theme.space.xl};
        border-bottom: 2px solid ${theme.colors.Interaction};
    `,
);

const SquadTitle = styled(Title)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fmd};
        width: 73%;
        text-transform: uppercase;
        color: ${theme.colors.gray3};
    `,
);

const ButtonActive = styled(Button)(
    ({ theme }) => css`
        font-weight: bold;
        color: ${theme.colors.Interaction};
        background: none;
        text-transform: uppercase;
    `,
);

const ButtonInactive = styled(Button)(
    ({ theme }) => css`
        font-weight: bold;
        color: ${theme.colors.gray3};
        background: none;
        text-transform: uppercase;
    `,
);

export {
    SquadStyles,
    SquadBoxSection,
    SquadTitle,
    SquadBoxButtonActive,
    SquadBoxButtons,
    ButtonActive,
    ButtonInactive,
};
