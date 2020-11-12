import React from "react";
import PropTypes from "prop-types";
import Layout from "../../layoutcv";
import socialmedia from "../../widgets/Header/social.json";

const Video = props => {
    return (
        <Layout breadcrumbs={[]} social={socialmedia}>
            Item Video
        </Layout>
    );
};
Video.propTypes = {};

Video.defaultProps = {};
export default Video;
