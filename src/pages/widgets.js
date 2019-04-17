import React from "react";

// Components
import CardPerson from "../components/CardPerson";
import ContentCarousel from "../components/ContentCarousel";
import FiveItems from "../components/FiveItems";
import Footer from "../components/Footer";
import FourItems from "../components/FourItems";
import HighImpact from "../components/HighImpact";
import InlineGallery from "../components/InlineGallery";
import InlineVideo from "../components/InlineVideo";
import LiveStreaming from "../components/LiveStreaming";
import LiveToolBar from "../components/LiveToolBar";
import Mosaic from "../components/Mosaic";
import MostViewed from "../components/MostViewed";
import Menu from "../components/Menu";
import Navegation from "../components/Navegation";
// import Privacy from "../components/Privacy/Privacy";
import ProfileFollow from "../components/ProfileFollow";
import PromoCards from "../components/PromoCards";
// import Share from "../components/Share";
// import Newsletter from "../components/Newsletter";
import SixItems from "../components/SixItems";
import SocialFollow from "../components/SocialFollow";
import Stack from "../components/Stack";
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
            <div style={{color: "grey", textAlign:"center", margin:"15px", fontSize:"35px", background: "rgba(33,34,38,.8)", height: "90px", padding:"30px"}}> Card Groups: </div>
        </h3>
        <Stack />
        <Mosaic />
        <FourItems />
        <FiveItems />
        <SixItems />
        <h3>
            <div style={{ color: "grey", textAlign:"center", margin:"15px", fontSize:"35px", background: "rgba(33,34,38,.8)", height: "90px", padding:"30px"}}> Carousels: </div>
        </h3>
        <CardPerson />
        <ContentCarousel />
        <ProfileFollow />
        <PromoCards />
        <h3>
            <div style={{color: "grey", textAlign:"center", margin:"15px", fontSize:"35px", background: "rgba(33,34,38,.8)", height: "90px", padding:"30px"}}> Sliders: </div>
        </h3>
        <HighImpact />
        <h3>
            <div style={{color: "grey", textAlign:"center", margin:"15px", fontSize:"35px", background: "rgba(33,34,38,.8)", height: "90px", padding:"30px"}}> Hybrids: </div>
        </h3>
        <InlineVideo />
        <InlineGallery />
        <h3>
            <div style={{color: "grey", textAlign:"center", margin:"15px", fontSize:"35px", background: "rgba(33,34,38,.8)", height: "90px", padding:"30px"}}> Asides: </div>
        </h3>
        <MostViewed />
        <SocialFollow />
        <h3>
            <div style={{color: "grey", textAlign:"center", margin:"15px", fontSize:"35px", background: "rgba(33,34,38,.8)", height: "90px", padding:"30px"}}> Navigations: </div>
        </h3>
        <LiveToolBar />
        <TvGuide />
        <TvGuideFull />
        <TvGuideBold />
        <Footer />
        <Ticker />
        <LiveStreaming />
    </div>
);

export default IndexPage;
