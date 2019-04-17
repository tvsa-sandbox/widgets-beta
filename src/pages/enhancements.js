import React from "react";

// Components
import Image from "../enhancements/Image";
import Menu from "../components/Menu";
import Navegation from "../components/Navegation";
import Quote from "../enhancements/Quote";
import RelatedContent from "../enhancements/RelatedContent";
import SlideShow from "../enhancements/SlideShow";
import SocialEmbeds from "../enhancements/SocialEmbeds";
import UniversalRichText from "../enhancements/UniversalRichText/UniversalRichText";
import Video from "../enhancements/Video";

const IndexPage = () => (
    <div>
        {/* Tags  */}
        <Menu />
        <Navegation />
        <h2>
            <div style={{color: "grey", textAlign:"center", margin:"20px", fontSize:"50px"}}> Widgets </div>
        </h2>
        <h2>
            <div style={{color: "grey", textAlign:"center", margin:"20px", fontSize:"50px"}}> Enhancements </div>
        </h2>
        <SlideShow />
        <RelatedContent />
        <h3>
            Text:
        </h3>
        <Quote />
        <UniversalRichText />
        <h3>
             <div style={{color: "grey", textAlign:"center", margin:"15px", fontSize:"35px", background: "rgba(33,34,38,.8)", height: "90px", padding:"30px"}}> Multimedia: </div>
        </h3>
        <Image />
		<Video />
		<SocialEmbeds />
    </div>
);

export default IndexPage;
