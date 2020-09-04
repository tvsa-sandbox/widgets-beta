import React, { Fragment } from "react";
import { withKnobs, text } from "@storybook/addon-knobs";

import RelatedContent from "../../lib/items/RelatedContent";

export default {
    decorators: [withKnobs],
    title: "Related Content",
};

export const RELATEDCONTENT = () => {
    return <RelatedContent />;
};

