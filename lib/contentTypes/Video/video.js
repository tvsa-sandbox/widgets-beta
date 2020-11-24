import React from "react";
import PropTypes from "prop-types";
import Layout from "../../layoutcv";
import socialmedia from "../../widgets/Header/social.json";
import { ItemVideo } from "../../items";
import { Tabs } from "../../widgets";
import TabPane from "../../widgets/Tabs/tabpane";
import { ShowGrid } from "../Show/styles";
import { ChapterItem } from "../../items";
import { PageStyles } from "./styles";

const Video = props => {
    const { vidimg, tabs } = props;
    return (
        <Layout breadcrumbs={[]} social={socialmedia}>
            <PageStyles>
                <ItemVideo src={vidimg} />
                <Tabs tablinks={tabs} />
                <TabPane idtab="continuacion" active>
                    <ShowGrid>
                        <ChapterItem src={vidimg} chaptericon={false} isShow />
                        <ChapterItem src={vidimg} chaptericon={false} isShow />
                        <ChapterItem src={vidimg} chaptericon={false} isShow />
                        <ChapterItem src={vidimg} chaptericon={false} isShow />
                        <ChapterItem src={vidimg} chaptericon={false} isShow />
                        <ChapterItem src={vidimg} chaptericon={false} isShow />
                        <ChapterItem src={vidimg} chaptericon={false} isShow />
                        <ChapterItem src={vidimg} chaptericon={false} isShow />
                        <ChapterItem src={vidimg} chaptericon={false} isShow />
                    </ShowGrid>
                </TabPane>
                <TabPane idtab="clips">
                    <ShowGrid>
                        <ChapterItem src={vidimg} chaptericon={false} isShow />
                        <ChapterItem src={vidimg} chaptericon={false} isShow />
                        <ChapterItem src={vidimg} chaptericon={false} isShow />
                        <ChapterItem src={vidimg} chaptericon={false} isShow />
                        <ChapterItem src={vidimg} chaptericon={false} isShow />
                        <ChapterItem src={vidimg} chaptericon={false} isShow />
                        <ChapterItem src={vidimg} chaptericon={false} isShow />
                        <ChapterItem src={vidimg} chaptericon={false} isShow />
                        <ChapterItem src={vidimg} chaptericon={false} isShow />
                    </ShowGrid>
                </TabPane>
                <TabPane idtab="comentarios">
                    <ShowGrid>
                        <ChapterItem src={vidimg} chaptericon={false} isShow />
                        <ChapterItem src={vidimg} chaptericon={false} isShow />
                        <ChapterItem src={vidimg} chaptericon={false} isShow />
                        <ChapterItem src={vidimg} chaptericon={false} isShow />
                        <ChapterItem src={vidimg} chaptericon={false} isShow />
                        <ChapterItem src={vidimg} chaptericon={false} isShow />
                        <ChapterItem src={vidimg} chaptericon={false} isShow />
                        <ChapterItem src={vidimg} chaptericon={false} isShow />
                        <ChapterItem src={vidimg} chaptericon={false} isShow />
                    </ShowGrid>
                </TabPane>
            </PageStyles>
        </Layout>
    );
};
Video.propTypes = {
    vidimg: PropTypes.shape({}),
};

Video.defaultProps = {
    vidimg: {},
};
export default Video;
