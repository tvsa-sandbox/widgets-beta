import React from "react";
import PropTypes from "prop-types";
import Layout from "../../layoutcv";
import socialmedia from "../../widgets/Header/social.json";
import { ItemVideo, ChapterItem } from "../../items";
import { Tabs } from "../../widgets";
import TabPane from "../../widgets/Tabs/tabpane";
import { ShowGrid } from "../Show/styles";
import { PageStyles } from "./styles";

const Video = props => {
    const { vidimg, tabs, social, items } = props;
    return (
        <Layout breadcrumbs={[]} social={socialmedia}>
            <PageStyles>
                <ItemVideo src={vidimg} social={social} />
                <Tabs tablinks={tabs} />
                <TabPane idtab="continuacion" active>
                    <ShowGrid>
                        {items.map(item => {
                            return (
                                <ChapterItem
                                    src={vidimg}
                                    chaptericon={false}
                                    isShow
                                    key={item.id}
                                />
                            );
                        })}
                    </ShowGrid>
                </TabPane>
                <TabPane idtab="clips">
                    <ShowGrid>
                        {items.map(item => {
                            return (
                                <ChapterItem
                                    src={vidimg}
                                    chaptericon={false}
                                    isShow
                                    key={item.id}
                                />
                            );
                        })}
                    </ShowGrid>
                </TabPane>
                <TabPane idtab="comentarios">comentarios</TabPane>
            </PageStyles>
        </Layout>
    );
};
Video.propTypes = {
    vidimg: PropTypes.shape({}),
    tabs: PropTypes.arrayOf(PropTypes.shape({})),
    social: PropTypes.arrayOf(PropTypes.shape({})),
    items: PropTypes.arrayOf(PropTypes.shape({})),
};

Video.defaultProps = {
    vidimg: {},
    tabs: [],
    social: [],
    items: [
        {
            id: 0,
        },
        {
            id: 1,
        },
        {
            id: 2,
        },
        {
            id: 3,
        },
        {
            id: 4,
        },
    ],
};
export default Video;
