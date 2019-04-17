import React from "react";
import { withPrefix } from "gatsby";

const Items_ItemTypeC = () => (
    <div className="Items__ItemTypeC WhiteLabel">
        <div className="Items__ItemTypeCThumbnail WhiteLabel">
            <div className="Items__ItemTypeCImageContainer WhiteLabel">
                <source media="(min-width:0px) and (max-width:414px)" srcSet={withPrefix("/static/aspect-ratio-images/9x16-389x692.jpg")} />
                <source media="(min-width:415px) and (max-width:768px)" srcSet={withPrefix("/static/aspect-ratio-images/9x16-389x692.jpg")} />
                <source media="(min-width:769px)" srcSet={withPrefix("/static/aspect-ratio-images/9x16-389x692.jpg")} />
                <img className="Items__ItemTypeCImage WhiteLabel" src={withPrefix("/static/aspect-ratio-images/9x16-389x692.jpg")}  alt="" />
            </div>
            <div className="Items__ItemTypeCVideoContainer WhiteLabel">
               <div className="Items__ItemTypeCVideo WhiteLabel">
                  {/* Video Player */}
                </div>
            </div>
            <div className="Items__ItemTypeCIconContainer WhiteLabel">
                <div className="Items__ItemTypeCIcon Icn_Video WhiteLabel">
                    <span className="Display">
                        Display
                    </span>
                </div>
            </div>
            <div className="Items__ItemTypeCTitleContainer WhiteLabel">
                <h3 className="Items__ItemTypeCTitle WhiteLabel">
                    Mira cómo luce Miss España sin maquillaje
                </h3>
            </div>
            <div className="Items__ItemTypeCDescriptionContainer WhiteLabel">
                <p className="Items__ItemTypeCDescription WhiteLabel">
                    En la red circula una imagen de Ángela Ponce, Miss España, luciendo su rostro al natural
                </p>
            </div>
            <div className="Items__ItemTypeCTimeContainer WhiteLabel">
                <time className="Items__ItemTypeCTime WhiteLabel">
                    11:11
                </time>
            </div>
            <div className="Items__ItemTypeCLogoContainer WhiteLabel">
                <source media="(min-width:0px) and (max-width:414px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-Graphic3-209x114.png")} />
                <source media="(min-width:415px) and (max-width:768px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-Graphic3-209x114.png")} />
                <source media="(min-width:769px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-Graphic3-209x114.png")} />
                <img className="Items__ItemTypeCLogo WhiteLabel" src={withPrefix("/static/aspect-ratio-images/16x9-Graphic3-209x114.png")}  alt="" />
            </div>
            <div className="Items__ItemTypeCDateContainer WhiteLabel">
                <time datetime="2018-11-20 20:00" className="Items__ItemTypeCDate WhiteLabel">
                    20 de Noviembre
                </time>
            </div>
            <div className="Items__ItemTypeCAutorContainer WhiteLabel">
                <span className="Items__ItemTypeCAutor WhiteLabel">
                    Magdaleno Hernandez
                </span>
            </div>
            <div className="Items__ItemTypeCLabelContainer WhiteLabel">
                <span className="Items__ItemTypeCLabel WhiteLabel">
                    Ver contenido
                </span>
            </div>
        </div>
    </div>
);

export default Items_ItemTypeC;
