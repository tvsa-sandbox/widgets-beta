import styled from "styled-components";

const GridLayout = styled.div`
    height: 100vh;
    display: grid;
    grid-template-areas:
        "nav nav nav"
        "main main main"
        "footer footer footer";
    grid-template-rows: auto 1fr auto;
    grid-template-columns: auto 1fr auto;
`;

const Nav = styled.nav`
    grid-area: nav;
`;
const AsideLeft = styled.aside`
    grid-area: asideLeft;
`;
const AsideRight = styled.aside`
    grid-area: asideRight;
`;
const Main = styled.main`
    grid-area: main;
`;
const FooterGrid = styled.footer`
    grid-area: footer;
`;

export { GridLayout, FooterGrid, Nav, AsideLeft, AsideRight, Main };
