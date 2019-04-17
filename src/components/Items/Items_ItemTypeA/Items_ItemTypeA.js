import React from "react";

const Items_ItemTypeA = () => (
    <div className="Items__ItemTypeA WhiteLabel">
        <div className="Items__ItemTypeAThumbnail WhiteLabel">
            <div className="Items__ItemTypeAImageContainer WhiteLabel">
                <picture>
                    <source media="(min-width:0px) and (max-width:414px)" srcSet="./static/aspect-ratio-images/1x1-414x414.jpg" />
                    <source media="(min-width:415px) and (max-width:768px)" srcSet="./static/aspect-ratio-images/1x1-414x414.jpg" />
                    <source media="(min-width:769px)" srcSet="./static/aspect-ratio-images/1x1-414x414.jpg" />
                    <img className="Items__ItemTypeAImage WhiteLabel" src="./static/aspect-ratio-images/1x1-414x414.jpg" alt="" />
                </picture>
            </div>
            <div className="Items__ItemTypeAVideoContainer WhiteLabel">
               <div className="Items__ItemTypeAVideo WhiteLabel">
                  {/* Video Player */}
                </div>
            </div>
            <div className="Items__ItemTypeAIconContainer WhiteLabel">
                <div className="Items__ItemTypeAIcon Icn_Video WhiteLabel">
                    <span className="Display">
                        Display
                    </span>
                </div>
            </div>
        </div>
        <div className="Items__ItemTypeACaption WhiteLabel">
            <div className="Items__ItemTypeATitleContainer WhiteLabel">
                <h3 className="Items__ItemTypeATitle WhiteLabel">
                    Mira cómo luce Miss España sin maquillaje
                </h3>
            </div>
            <div className="Items__ItemTypeADescriptionContainer WhiteLabel">
                <p className="Items__ItemTypeADescription WhiteLabel">
                    En la red circula una imagen de Ángela Ponce, Miss España, luciendo su rostro al natural
                </p>
            </div>
            <div className="Items__ItemTypeATimeContainer WhiteLabel">
                <time className="Items__ItemTypeATime WhiteLabel">
                    11:11
                </time>
            </div>
            <div className="Items__ItemTypeADateContainer WhiteLabel">
                <time datetime="2018-11-20 20:00" className="Items__ItemTypeADate WhiteLabel">
                    20 de Noviembre
                </time>
            </div>
            <div className="Items__ItemTypeAAutorContainer WhiteLabel">
                <span className="Items__ItemTypeAAutor WhiteLabel">
                    Magdaleno Hernandez
                </span>
            </div>
            <div className="Items__ItemTypeALabelContainer WhiteLabel">
                <span className="Items__ItemTypeALabel WhiteLabel">
                    Ver contenido
                </span>
            </div>
        </div>
    </div>
);

export default Items_ItemTypeA;
