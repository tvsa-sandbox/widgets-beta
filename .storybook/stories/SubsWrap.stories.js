import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { Title } from "accessories";

import SubsWrap from "../../lib/widgets/SubsWrap";

export default {
    decorators: [withKnobs],
    title: "Desing System/TUDN/SubsWrap",
};

export const SUBSWRAP = () => {
    const props = () => ({
        title: text("Titulo", "Titulo de test"),
    });
    return (
        <div>
            <Title variant="h2">SubsWrap</Title>
            <SubsWrap {...props} />
        </div>
    );
};
