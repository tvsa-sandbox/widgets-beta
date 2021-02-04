import React from "react";
import Article from "../../lib/containers/Article";

import articleMockup from "../mockups/article";

export default {
    title: "Containers",
};

export const ARTICLE = () => <Article {...articleMockup} />;
