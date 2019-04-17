import React from "react";

const SliderItem = () => (
    <div className="InlineGallery__SliderThumbContainer WhiteLabel">
        <div className="InlineGallery__SliderItem WhiteLabel">
            <div className="InlineGallery__SliderItemThumbnail WhiteLabel">
                <div className="InlineGallery__SliderItemImageContainer WhiteLabel">
                    <picture>
                        <source media="(min-width: 0px) and (max-width: 414px)" srcSet="./static/aspect-ratio-images/9x16-389x692.jpg" />
                        <source media="(min-width: 415px) and (max-width: 768px)" srcSet="./static/aspect-ratio-images/9x16-389x692.jpg" />
                        <source media="(min-width: 769px)" srcSet="./static/aspect-ratio-images/9x16-389x692.jpg" />
                        <img className="InlineGallery__SliderItemImage WhiteLabel" src="./static/aspect-ratio-images/9x16-389x692.jpg" alt="Rihanna" />
                    </picture>
                </div>
            </div>
        </div>
    </div>
);

export default SliderItem;
