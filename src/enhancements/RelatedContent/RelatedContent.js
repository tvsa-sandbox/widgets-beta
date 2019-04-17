import React from "react";
import RelatedContentItem from "./RelatedContent_Item/RelatedContent_Item";
import RelatedContentShare from "./RelatedContent_Share/RelatedContent_Share";

const RelatedContent = () => (
    <aside className="RelatedContent WhiteLabel">
        <div className="RelatedContent__TextContainer WhiteLabel">
            <h3 className="RelatedContent__Text WhiteLabel">
                Relacionado
            </h3>
        </div>
        <div className="RelatedContent__ItemContainer WhiteLabel">
            <RelatedContentItem />
        </div>
        <div className="RelatedContent__ShareContainer WhiteLabel">
            <RelatedContentShare />
        </div>
    </aside>
);

export default RelatedContent;
