import React from "react";

// Components
import HighImpact from "../components/HighImpact";
import Menu from "../components/Menu";
import Navegation from "../components/Navegation";

const IndexPage = () => (
    <div>
        {/* Tags  */}
        <Menu />
        <Navegation />
        <h2>
            <div style={{color: "grey", textAlign:"center", margin:"20px", fontSize:"50px"}}> Widgets </div>
        </h2>
        <h3>
            <div style={{color: "grey", textAlign:"center", margin:"15px", fontSize:"35px", background: "rgba(33,34,38,.8)", height: "90px", padding:"30px"}}> Sliders: </div>
        </h3>
        <HighImpact />
    </div>
);

export default IndexPage;
