import React from "react";

// Components
import Footer from "../components/Footer";
import LiveStreaming from "../components/LiveStreaming";
import LiveToolBar from "../components/LiveToolBar";
import Menu from "../components/Menu";
import Navegation from "../components/Navegation";
import Ticker from "../components/Ticker";
import TvGuide from "../components/TvGuide";
import TvGuideFull from "../components/TvGuideFull";
import TvGuideBold from "../components/TvGuideBold";

const IndexPage = () => (
    <div>
        {/* Tags  */}
        <Menu />
        <Navegation />
        <h2>
            <div style={{color: "grey", textAlign:"center", margin:"20px", fontSize:"50px"}}> Widgets </div>
        </h2>
        <h3>
            <div style={{color: "grey", textAlign:"center", margin:"15px", fontSize:"35px", background: "rgba(33,34,38,.8)", height: "90px", padding:"30px"}}> Navigations: </div>
        </h3>
        <LiveToolBar />
        <TvGuide />
        <TvGuideFull />
        <TvGuideBold />
        <Ticker />
        <LiveStreaming />
        <Footer />
    </div>
);

export default IndexPage;
