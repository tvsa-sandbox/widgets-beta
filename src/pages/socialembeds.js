import React from "react";

// Components
import Menu from "../components/Menu";
import Navegation from "../components/Navegation";
import SocialEmbeds from "../enhancements/SocialEmbeds";

const IndexPage = () => (
    <div>
        {/* Tags  */}
        <Menu />
        <Navegation />
        <h2>
            <div style={{color: "grey", textAlign:"center", margin:"20px", fontSize:"30px"}}> Enhancements </div>
        </h2>
		<SocialEmbeds />
    </div>
);

export default IndexPage;
