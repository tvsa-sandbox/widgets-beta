import React from "react";

// Components
import Quote from "../enhancements/Quote";
import Menu from "../components/Menu";
import Navegation from "../components/Navegation";

const IndexPage = () => (
    <div>
        {/* Tags  */}
        <Menu />
        <Navegation />
        <h2>
            <div style={{color: "grey", textAlign:"center", margin:"20px", fontSize:"30px"}}> Enhancements </div>
        </h2>
        <Quote />
    </div>
);

export default IndexPage;
