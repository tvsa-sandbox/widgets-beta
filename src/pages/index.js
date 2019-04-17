import React from "react";
import Layout from "../layouts";
import { withPrefix } from "gatsby";

// Components
import CardPerson from "../components/CardPerson";
import ContentCarousel from "../components/ContentCarousel";
import ContentCarouselB from "../components/ContentCarouselB";
import FiveItems from "../components/FiveItems";
import Footer from "../components/Footer";
import FourItems from "../components/FourItems";
import FourItemsV from "../components/FourItemsV";
import HighImpact from "../components/HighImpact";
import Image from "../enhancements/Image";
import InlineGallery from "../components/InlineGallery";
import InlineVideo from "../components/InlineVideo";
// import Items from "../components/Items";
import LiveStreaming from "../components/LiveStreaming";
import LiveToolBar from "../components/LiveToolBar";
import Mosaic from "../components/Mosaic";
import MostViewed from "../components/MostViewed";
import Menu from "../components/Menu";
import Navegation from "../components/Navegation";
import Privacy from "../components/Privacy/Privacy";
import ProfileFollow from "../components/ProfileFollow";
import PromoCards from "../components/PromoCards";
import Quote from "../enhancements/Quote";
import RelatedContent from "../enhancements/RelatedContent";
// import Share from "../components/Share";
// import Newsletter from "../components/Newsletter";
import SixItems from "../components/SixItems";
import SixItemsV2 from "../components/SixItemsV2";
import SlideShow from "../enhancements/SlideShow";
import SocialEmbeds from "../enhancements/SocialEmbeds";
import SocialFollow from "../components/SocialFollow";
import Stack from "../components/Stack";
import Ticker from "../components/Ticker";
import TvGuide from "../components/TvGuide";
import TvGuideFull from "../components/TvGuideFull";
import TvGuideBold from "../components/TvGuideBold";
import UniversalRichText from "../enhancements/UniversalRichText/UniversalRichText";
import Video from "../enhancements/Video";

const IndexPage = () => (
    <Layout>
        {/* Tags  */}
        <Menu />
        <Navegation />
        <div style={{ margin:"1em auto",textAlign:"center" }}>
            <img src={withPrefix("/static/aspect-ratio-images/Whitelabel.png")} alt="logo" style={{ margin:"1em"}} />
        </div>
        <h3 style={{color: "white", textAlign:"center", fontSize:"30px", maxWidth:"900px", margin:"1em auto",padding:"0 10px"}}>
            "Catálogo de las maquetas WL del Área de Markup para los componentes WL del Área de Desarrollo."
        </h3>
        <div style={{display: "flex",  margin:"1em auto", maxWidth:"900px", justifyContent:"space-around", flexWrap:"wrap"}}>
            <img src={withPrefix("/static/aspect-ratio-images/markup.png")} alt=""/>
            <img src={withPrefix("/static/aspect-ratio-images/develop.png")} alt=""/>
        </div>
        <h2>
            <div style={{color: "grey", textAlign:"center", margin:"20px", fontSize:"50px"}}> Widgets </div>
        </h2>
        <div style={{background: "rgba(33,34,38,.8)", height: "100%", paddingBottom: "5px"}}>
            <h3>
                <div style={{color: "grey", textAlign:"center", margin:"15px", fontSize:"35px", height: "90px", padding:"30px"}}> Card Groups: </div>
            </h3>
            <Stack />
            <Mosaic />
            <FourItems />
            <FourItemsV />
            <FiveItems />
            <SixItems />
            <SixItemsV2 />
        </div>
        <h3>
            <div style={{ color: "grey", textAlign:"center", margin:"15px", fontSize:"35px", height: "90px", padding:"30px"}}> Carousels: </div>
        </h3>
            <CardPerson />
            <ContentCarousel />
            <ContentCarouselB />
            <ProfileFollow />
            <PromoCards />
        <div style={{background: "rgba(33,34,38,.8)", height: "100%", paddingBottom: "5px"}}>
            <h3>
                <div style={{color: "grey", textAlign:"center", margin:"15px", fontSize:"35px", height: "90px", padding:"30px"}}> Sliders: </div>
            </h3>
            <HighImpact />
        </div>
        <h3>
            <div style={{color: "grey", textAlign:"center", margin:"15px", fontSize:"35px", height: "90px", padding:"30px"}}> Hybrids: </div>
        </h3>
        <InlineVideo />
        <InlineGallery />
        <div style={{background: "rgba(33,34,38,.8)", height: "100%", paddingBottom: "5px"}}>
            <h3>
                <div style={{color: "grey", textAlign:"center", margin:"15px", fontSize:"35px", height: "90px", padding:"30px"}}> Asides: </div>
            </h3>
            <MostViewed />
            <SocialFollow />
        </div>
        <h3>
            <div style={{color: "grey", textAlign:"center", margin:"15px", fontSize:"35px", height: "90px", padding:"30px"}}> Navigations: </div>
        </h3>
        <LiveToolBar />
        <TvGuide />
        <TvGuideFull />
        <TvGuideBold />
        <Footer />
        <Ticker />
        <LiveStreaming />
        <h2>
            <div style={{color: "grey", textAlign:"center", margin:"20px", fontSize:"30px"}}> Enhancements </div>
        </h2>
        <SlideShow />
        <RelatedContent />
        <h3>
            <div style={{color: "grey", textAlign:"center", margin:"20px", fontSize:"20px"}}> Text: </div>
        </h3>
        <h3>
            <div style={{color: "grey", textAlign:"center", margin:"20px", fontSize:"20px"}}> Text: </div>
        </h3>
        <Quote />
        <UniversalRichText />
        <Privacy />
        <div style={{background: "rgba(33,34,38,.8)", height: "100%", paddingBottom: "5px"}}>
            <h3>
                 <div style={{color: "grey", textAlign:"center", margin:"15px", fontSize:"35px", height: "90px", padding:"30px"}}> Multimedia: </div>
            </h3>
            <Image />
    		<Video />
    		<SocialEmbeds />
        </div>
    </Layout>
);

export default IndexPage;
