import React from "react";

// Components
import Menu from "../components/Menu";
import MostViewed from "../components/MostViewed";
import Navegation from "../components/Navegation";
import SocialFollow from "../components/SocialFollow";

const IndexPage = () => (
    <div>
        <Menu />
        <Navegation />
        <h2>
            <div style={{color: "grey", textAlign:"center", margin:"20px", fontSize:"50px"}}> Widgets </div>
        </h2>
        <h3>
            <div style={{color: "grey", textAlign:"center", margin:"15px", fontSize:"35px", background: "rgba(33,34,38,.8)", height: "90px", padding:"30px"}}> Asides: </div>
        </h3>
        <MostViewed />
        <SocialFollow />
    </div>
);

export default IndexPage;
