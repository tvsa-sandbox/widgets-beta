import React from "react";
import PropTypes from "prop-types";
import { Header, HeaderTUDN, Footer } from "../widgets";
import { Nav, AsideLeft, AsideRight, Main, FooterGrid, GridLayout } from "./styles";

const Layout = props => {
    const { breadcrumbs, filter, children, nav, foot, social, uri, ui } = props;
    return (
        <GridLayout {...props}>
            {nav ? (
                <Nav>
                    {ui === "tudn" ? (
                        <HeaderTUDN
                            breadcrumbs={breadcrumbs}
                            uri={uri}
                            social={social}
                            filter={filter}
                        />
                    ) : (
                        <Header
                            breadcrumbs={breadcrumbs}
                            uri={uri}
                            social={social}
                            filter={filter}
                        />
                    )}
                    {/* <Header breadcrumbs={breadcrumbs} social={social} filter={filter} /> */}
                </Nav>
            ) : null}
            <Main>{children}</Main>
            {foot ? (
                <FooterGrid>
                    <Footer />
                </FooterGrid>
            ) : null}
        </GridLayout>
    );
};

Layout.propTypes = {
    breadcrumbs: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    nav: PropTypes.bool,
    foot: PropTypes.bool,
    filter: PropTypes.string,
    children: PropTypes.node,
    social: PropTypes.arrayOf(PropTypes.shape({})),
};

Layout.defaultProps = {
    filter: "",
    nav: true,
    foot: true,
    children: null,
    social: [],
};

export default Layout;
