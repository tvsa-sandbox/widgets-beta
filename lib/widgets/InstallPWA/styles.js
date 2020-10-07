import styled, { css } from "styled-components";
import Icons from "../../accessories/Icons";
import Button from "../../accessories/Button";
import Box from "../../accessories/Box";
import Text from "../../accessories/Text";

const InstallPWAStyles = styled.section(
    ({ theme }) => css`
         margin: ${theme.space.base};
         justify-content: center;
    display: flex;
    `,
);

const InstallBoxStyles = styled(Box)(
    ({ theme }) => css`

        background: ${theme.colors.Secondary};
        display: grid;
        width: 100%;
        grid-template-rows: auto;
    grid-gap: 0px;
    grid-template-columns: 87px auto;
    max-width: 380px;
        margin: ${theme.space.zero}${theme.space.auto};
    `,
);

const InstallThumbStyles = styled(Box)(
    ({ theme }) => css`
        text-align: "center";
        padding: ${theme.space.lg} ${theme.space.base};
    `,
);

const InstallBoxCta = styled(Box)`
        display: flex;
        flex-direction: column;
        justify-content: center;
    `;

const InstallIconStyles = styled(Icons)(
    ({ theme }) => css`
display: block;
    height: 63px;
    margin-right: ${theme.space.zero};
    width: 63px;
    fill: #ffffff;
    background:#14141a;
    border-radius: 4px;
    `,
);

const InstallButtonStyles = styled(Button)(
    ({ theme }) => css`
        border-radius: 4px;
        cursor: pointer;
        font-size: ${theme.fontSizes.fxs};
        font-weight: bold;
        min-width: 80px;
        min-height: 30px;
        justify-content: center;
        border-radius: 5px;
        background-color: ${theme.colors.Interaction};
    `,
);

const InstallButtonTextStyles = styled(Button)(
    ({ theme }) => css`
    align-items: center;
    background: transparent;
    border: none;
        display: flex;
        margin-right: ${theme.space.base};
        width: auto;
        color: #fa4898;
        cursor: pointer;
        line-height: 15px;
        padding:${theme.space.zero};
        font-size: ${theme.fontSizes.fsm};
    `,
);

const InstallTextStyles = styled(Text)(
    ({ theme }) => css`
        padding-right: ${theme.space.lg};
        padding-bottom: ${theme.space.sm};
        width: auto;
        color: #9C9CAB;
        line-height: 17px;
        font-size: ${theme.fontSizes.fsm};
    `,
);

export {
    InstallPWAStyles,
    InstallButtonTextStyles,
    InstallButtonStyles,
    InstallTextStyles,
    InstallThumbStyles,
    InstallBoxStyles,
    InstallBoxCta,
    InstallIconStyles,
};
