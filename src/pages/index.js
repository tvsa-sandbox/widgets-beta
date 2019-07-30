import React from "react";
import Layout from "../layouts";
//import { withPrefix } from "gatsby";

// Components

import Mosaic from "../components/Mosaic";
import MenuHamburger from "../components/MenuHamburger/MenuHamburger";
import SocialNetworks from "../components/SocialNetworks/SocialNetworks";
import TestMenu from "../components/TestMenu/TestMenu";
import SuperCard from "../components/SuperCard/SuperCard";
import Related1 from "../components/Related1/";
import Related2 from "../components/Related2/";
import Related3 from "../components/Related3/";
import Related4 from "../components/Related4/";
import Calendar from "../components/Calendar/";
import NotesCarousel from "../components/NotesCarousel/";


const IndexPage = () => (
    <Layout>

		<Calendar />
		<NotesCarousel />
		<Mosaic />
		<SocialNetworks />
		<MenuHamburger />
		<TestMenu />
		<SuperCard />
        <Related1 />
        <Related2 />
        <Related3 />
        <Related4 />
        <Calendar />
        <NotesCarousel />

    </Layout>
);

export default IndexPage;
