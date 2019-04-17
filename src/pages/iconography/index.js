import React from "react";

// Components
import Menu from "../../components/Menu";
import Navegation from "../../components/Navegation";

const IndexPage = () => (
    <div>
        {/* Tags  */}
        <Menu />
        <Navegation />
        <h2>
            <div style={{color: "grey", textAlign:"center", margin:"20px", fontSize:"30px"}}> Iconography </div>
        </h2>
    </div>
);

export default IndexPage;
