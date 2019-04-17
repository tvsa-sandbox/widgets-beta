import React from "react";

const Items_ItemTypeB = () => (
    <div className="Items__ItemTypeB WhiteLabel">
        <div className="Items__ItemTypeBThumbnail WhiteLabel">
            <div className="Items__ItemTypeBTitleContainer WhiteLabel">
                <h3 className="Items__ItemTypeBTitle WhiteLabel">
                    María León publica imagen donde aparece desnuda en Riviera Maya
                </h3>
            </div>
            <div className="Items__ItemTypeBImageContainer WhiteLabel">
                <picture>
                    <source media="(min-width:0px) and (max-width:414px)" srcSet="./static/aspect-ratio-images/1x1-414x414.jpg" />
                    <source media="(min-width:415px) and (max-width:768px)" srcSet="./static/aspect-ratio-images/1x1-414x414.jpg" />
                    <source media="(min-width:769px)" srcSet="./static/aspect-ratio-images/1x1-414x414.jpg" />
                    <img className="Items__ItemTypeBImage WhiteLabel" src="./static/aspect-ratio-images/1x1-414x414.jpg" alt="" />
                </picture>
            </div>
            <div className="Items__ItemTypeBVideoContainer WhiteLabel">
               <div className="Items__ItemTypeBVideo WhiteLabel">
                  {/* Video Player */}
                </div>
            </div>
            <div className="Items__ItemTypeBIconContainer WhiteLabel">
                <div className="Items__ItemTypeBIcon Icn_Video WhiteLabel">
                    <span className="Display">
                        Display
                    </span>
                </div>
            </div>
        </div>
        <div className="Items__ItemTypeBCaption WhiteLabel">
            <div className="Items__ItemTypeBDescriptionContainer WhiteLabel">
                <p className="Items__ItemTypeBDescription WhiteLabel">
                    En la red circula una imagen de Ángela Ponce, Miss España, luciendo su rostro al natural
                </p>
            </div>
            <div className="Items__ItemTypeBTimeContainer WhiteLabel">
                <time className="Items__ItemTypeBTime WhiteLabel">
                    11:11
                </time>
            </div>
            <div className="Items__ItemTypeBDateContainer WhiteLabel">
                <time datetime="2018-11-20 20:00" className="Items__ItemTypeBDate WhiteLabel">
                    20 de Noviembre
                </time>
            </div>
            <div className="Items__ItemTypeBAutorContainer WhiteLabel">
                <span className="Items__ItemTypeBAutor WhiteLabel">
                    Magdaleno Hernandez
                </span>
            </div>
            <div className="Items__ItemTypeBLabelContainer WhiteLabel">
                <span className="Items__ItemTypeBLabel WhiteLabel">
                    Ver contenido
                </span>
            </div>
        </div>
    </div>
);

export default Items_ItemTypeB;
