import React from "react";
import Link from "gatsby-link";
import GridGallery_Item from "./Items/GridGallery_Item";

const GridGallery = () => (
    <section className="GridGallery WhiteLabel">
        <div className="GridGallery__TitleContainer WhiteLabel">
            <h2 className="GridGallery__Title WhiteLabel">
                Grid Multi Content Title
            </h2>
        </div>
        <div className="GridGallery__ItemsContainer WhiteLabel">
            <GridGallery_Item />
            <GridGallery_Item />
            <GridGallery_Item />
            <GridGallery_Item />
            <GridGallery_Item />
            <GridGallery_Item />
            <GridGallery_Item />
            <GridGallery_Item />
            <GridGallery_Item />
            <GridGallery_Item />
            <GridGallery_Item />
            <GridGallery_Item />
        </div>
    </section>
);

export default GridMultiContent;