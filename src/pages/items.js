import React from "react";

// Components
import Items from "../components/Items";
import Menu from "../components/Menu";
import Navegation from "../components/Navegation";

const IndexPage = () => (
    <div>
        {/* Tags  */}
        <Menu />
        <Navegation />
        <h3>
            <div style={{color: "grey", textAlign:"center", margin:"15px", fontSize:"35px", background: "rgba(33,34,38,.8)", height: "90px", padding:"30px"}}> Card Groups: </div>
        </h3>
        <Items />
    </div>
);

export default IndexPage;
