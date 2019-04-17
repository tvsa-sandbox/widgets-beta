import React from "react";
import FiveItemsTopItem from "./FiveItems_Items/FiveItems_TopItem";
import FiveItemsBottomItem from "./FiveItems_Items/FiveItems_BottomItem";

const FiveItems = () => (
    <section className="FiveItems WhiteLabel">
        <div className="FiveItems__TitleContainer WhiteLabel">
            <h2 className="FiveItems__Title WhiteLabel">
                FiveItems Widget Title
            </h2>
        </div>
        <div className="FiveItems__ItemsContainer WhiteLabel">
            <div className="FiveItems__ItemsTop WhiteLabel">
                <FiveItemsTopItem />
                <FiveItemsTopItem />
            </div>
            <div className="FiveItems__ItemsBottom WhiteLabel">
                <FiveItemsBottomItem />
                <FiveItemsBottomItem />
                <FiveItemsBottomItem />
            </div>
        </div>
    </section>
);

export default FiveItems;
