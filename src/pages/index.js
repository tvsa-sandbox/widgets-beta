import React from "react";
import Layout from "../layouts";
//import { withPrefix } from "gatsby";

// Components

import Calendar from "../components/Calendar/Calendar";
import NotesCarousel from "../components/NotesCarousel/NotesCarousel";
import Mosaic from "../components/Mosaic";
import MenuHamburger from "../components/MenuHamburger/MenuHamburger";
import SocialNetworks from "../components/SocialNetworks/SocialNetworks";
import TestMenu from "../components/TestMenu/TestMenu";

const IndexPage = () => (
    <Layout>

		<Calendar />
		<NotesCarousel />
		<Mosaic />
		<SocialNetworks />
		<MenuHamburger />
		<TestMenu />

    </Layout>
);

export default IndexPage;
