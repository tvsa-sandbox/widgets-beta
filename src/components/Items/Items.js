import React from "react";
import ItemsItemTypeA from "./Items_ItemTypeA/Items_ItemTypeA";
import ItemsItemTypeB from "./Items_ItemTypeB/Items_ItemTypeB";
import ItemsItemTypeC from "./Items_ItemTypeC/Items_ItemTypeC";

const Items = () => (
    <section className="Items WhiteLabel">
        <ItemsItemTypeA />
        <ItemsItemTypeB />
        <ItemsItemTypeC />
    </section>
);

export default Items;
