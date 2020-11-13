import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "styled-components";
import { ChapterItem } from "../../items";
import { PosterCard } from "../../widgets";
import Layout from "../../layoutcv";

const Show = props => {
    const { imgposter } = props;
    const themeContext = useContext(ThemeContext);
    const ui = themeContext.ui.name;
    return (
        <Layout breadcrumbs={[]}>
            <PosterCard src={imgposter} />
            --tabs
            <ChapterItem src={imgposter} />
            <ChapterItem src={imgposter} />
            <ChapterItem src={imgposter} />
            <ChapterItem src={imgposter} />
            <ChapterItem src={imgposter} />
            <ChapterItem src={imgposter} />
            <ChapterItem src={imgposter} />
            <ChapterItem src={imgposter} />
            <ChapterItem src={imgposter} />
        </Layout>
    );
};

Show.propTypes = {
    imgposter: PropTypes.shape({
        desktop: PropTypes.shape({
            srcSet: PropTypes.string,
        }),
        mobile: PropTypes.shape({
            srcSet: PropTypes.string,
        }),
    }),
};

Show.defaultProps = {
    imgshowcard: {
        desktop: {
            srcSet: "",
        },
        mobie: {
            srcSet: "",
        },
    },
};

export default Show;
