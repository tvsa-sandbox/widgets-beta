import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet";

import "../stylesheets/Main.scss";

const Layout = ({ children }) => (
    <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
    <div>
        <Helmet
            title={data.site.siteMetadata.title}
            meta={[
                { name: "description", content: "Was born from the analysis of the basic communication needs of diverse digital products and the main editorial, design and development patterns whose objective is to be the starting point to generate interfaces in a fast and consistent way while, at the same time, is attached to the best practices and standards that modern digital products require to reach their end user in an efficient and satisfactory way." },
                { name: "keywords", content: "sample, something" },
            ]}
            bodyAttributes={{
                    class: 'BodyBlack'
            }}
        />
        <main>
            {children}
        </main>
    </div>
    )}
    />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
