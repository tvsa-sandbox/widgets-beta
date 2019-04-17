import React from "react";
import LiveToolBarSchedule from "./LiveToolBarSchedule";
import LiveToolBarShare from "./LiveToolBarShare";

const LiveToolBar = () => (
    <section className="LiveToolBar">
        <LiveToolBarSchedule />
        <LiveToolBarShare />
    </section>
);

export default LiveToolBar;
