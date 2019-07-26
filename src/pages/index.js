import React from "react";
import Layout from "../layouts";
//import { withPrefix } from "gatsby";

// Components

// import Privacy from "../components/Privacy/Privacy";
import Share from "../components/Share/Share";
import Mosaic from "../components/Mosaic";
import Calendar from "../components/Calendar/Calendar";
import NotesCarousel from "../components/NotesCarousel/NotesCarousel";
import Positions from "../components/Positions/Positions";
import Versus from "../components/Versus/Versus";
import SocialNetworks from "../components/SocialNetworks/SocialNetworks";
import MenuHamburger from "../components/MenuHamburger/MenuHamburger";



const IndexPage = () => (
    <Layout>

        <Positions />
        <Versus />
        <Mosaic />
        <Share />
		<Calendar />
		<NotesCarousel />
		<SocialNetworks />
		<MenuHamburger />

    </Layout>
);

export default IndexPage;
