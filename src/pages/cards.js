import React from "react";

// Components
import Stack from "../components/Stack";
import Mosaic from "../components/Mosaic";
import Menu from "../components/Menu";
import Navegation from "../components/Navegation";
import FourItems from "../components/FourItems";
import FourItemsV from "../components/FourItemsV";
import FiveItems from "../components/FiveItems";
import SixItems from "../components/SixItems";

const IndexPage = () => (
    <div>
        {/* Tags  */}
        <Menu />
        <Navegation />
        <h2>
            <div style={{color: "grey", textAlign:"center", margin:"20px", fontSize:"50px"}}> Widgets </div>
        </h2>
        <h3>
            <div style={{color: "grey", textAlign:"center", margin:"15px", fontSize:"35px", background: "rgba(33,34,38,.8)", height: "90px", padding:"30px"}}> Card Groups: </div>
        </h3>
        <Stack />
        <Mosaic />
        <FourItems />
        <FourItemsV />
        <FiveItems />
        <SixItems />
    </div>
);

export default IndexPage;
