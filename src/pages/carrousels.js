import React from "react";

// Components
import CardPerson from "../components/CardPerson";
import ContentCarousel from "../components/ContentCarousel";
import Menu from "../components/Menu";
import Navegation from "../components/Navegation";
import ProfileFollow from "../components/ProfileFollow";
import PromoCards from "../components/PromoCards";

const IndexPage = () => (
    <div>
        {/* Tags  */}
        <Menu />
        <Navegation />
        <h2>
            <div style={{color: "grey", textAlign:"center", margin:"20px", fontSize:"50px"}}> Widgets </div>
        </h2>
        <h3>
            <div style={{ color: "grey", textAlign:"center", margin:"15px", fontSize:"35px", background: "rgba(33,34,38,.8)", height: "90px", padding:"30px"}}> Carousels: </div>
        </h3>
        <CardPerson />
        <ContentCarousel />
        <ProfileFollow />
        <PromoCards />
    </div>
);

export default IndexPage;
