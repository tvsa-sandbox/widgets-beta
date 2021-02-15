import styled, { css } from "styled-components";
import { Box, Title, Text, Button } from "../../accessories";

const SubsWrapStyles = styled.section(
    ({ theme }) => css`
        width: 100%;
        max-width:1280px;
        background:${theme.colors.Light};
        box-shadow: 0px 6px 10px #d6d6d6;
        margin: ${theme.space.zero} ${theme.space.auto};
    `,
);

const SubsWrapTitle = styled(Title)(
    ({ theme }) => css`
       justify-content: center;
    width: 100%;
    display: flex;
    padding: ${theme.space.lg};
    margin-bottom: ${theme.space.lg};
    `,
);

const SubsWrapBox = styled(Box)(
    ({ theme }) => css`
        min-height: 414px;
        margin: ${theme.space.md} ${theme.space.xlg};
        display: grid;
        grid-template-columns: repeat(2, 0.3fr);
        grid-template-rows: repeat(4, 1fr);
        grid-column-gap: 10px;
        grid-row-gap: 40px;
        justify-content: center;

        @media (min-width: ${theme.breakpoints.lg}) {
            margin: ${theme.space.md} ${theme.space.xl2};
            grid-template-columns: repeat(3, 0.3fr);
            grid-column-gap: 20px;
        }
    `,
);

const SubsWrapBoxPlayer = styled(Box)(
    ({ theme }) => css`
        margin: ${theme.space.zero} ${theme.space.auto};
        text-align: center; 

`,
);

const SubsWrapNumberHome = styled(Button)(
    ({ theme }) => css`
         display: flex;
        align-items: center;
        justify-content: center;
        color: ${theme.colors.Light};
        font-size: ${theme.fontSizes.flg};
        margin: ${theme.space.zero} ${theme.space.auto};
        font-weight: bold;
        background: ${theme.colors.Interaction};
        width: 45px;
        height: 45px;
        border-radius: 50%;

`,
);

const SubsWrapNumberAway = styled(SubsWrapNumberHome)(
    ({ theme }) => css`
        background: ${theme.colors.green};
`,
);

const SubsWrapName = styled(Text)(
    ({ theme }) => css`
        font-weight: bold;
        margin: ${theme.space.base};
        font-size: ${theme.fontSizes.fsm};

`,
);

export { SubsWrapStyles, SubsWrapTitle, SubsWrapBox, SubsWrapBoxPlayer, SubsWrapNumberHome, SubsWrapNumberAway, SubsWrapName };
