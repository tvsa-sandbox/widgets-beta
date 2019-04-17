import React from "react";

// Components
import Menu from "../components/Menu";
import Navegation from "../components/Navegation";
import UniversalRichText from "../enhancements/UniversalRichText/UniversalRichText";

const IndexPage = () => (
    <div>
        {/* Tags  */}
        <Menu />
        <Navegation />
        <h2>
            <div style={{color: "grey", textAlign:"center", margin:"20px", fontSize:"30px"}}> Enhancements </div>
        </h2>
        <UniversalRichText />
    </div>
);

export default IndexPage;
