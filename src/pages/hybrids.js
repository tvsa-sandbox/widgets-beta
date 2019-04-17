import React from "react";

// Components
import InlineGallery from "../components/InlineGallery";
import InlineVideo from "../components/InlineVideo";
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
            <div style={{color: "grey", textAlign:"center", margin:"15px", fontSize:"35px", background: "rgba(33,34,38,.8)", height: "90px", padding:"30px"}}> Hybrids: </div>
        </h3>
        <InlineVideo />
        <InlineGallery />
    </div>
);

export default IndexPage;
