import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import {
    GalleryItemStyles,
    GalleryItemImageContainer,
    GalleryItemImage,
    GalleryItemCaption,
    GalleryItemCounter,
    GalleryItemInfo,
    GalleryItemDescription,
    GalleryItemButton,
    GalleryItemPinterest,
    GalleryItemData,
} from "./styles";

const GalleryItem = ({ attribution, description, domain, index, isAmp, image, uri }) => {
    const [ratio, setRatio] = useState("aspect3x4");
    const setPinterestButton = () => {
        window.PinUtils.pinOne({
            description,
            media: image.desktop.srcSet,
            url: `${domain}${uri}`,
        });
    };

    useEffect(() => {
        setRatio(window.innerWidth > 1024 ? "aspect4x3" : "aspect3x4");
    });

    return (
        <GalleryItemStyles variant="transparent">
            <GalleryItemImageContainer variant="transparent">
                {isAmp ? (
                    <div style={{ paddingTop: "133.33%" }}>
                        <amp-img
                            alt={description}
                            on="tap:lightbox"
                            role="button"
                            tabindex="0"
                            src={image.mobile.srcSet}
                            width="414"
                            height="552"
                            layout="fill"
                        />
                        {description && (
                            <amp-pinterest
                                height="48"
                                width="88"
                                data-do="buttonPin"
                                data-url={`${domain}${uri}`}
                                data-media={image.mobile.srcSet}
                                data-description={description}
                                data-tall="true"
                                style={{
                                    position: "absolute",
                                    top: "10px",
                                    left: "10px",
                                }}
                            />
                        )}
                    </div>
                ) : (
                    <>
                        <GalleryItemButton
                            id="pinterest"
                            onClick={() => setPinterestButton()}
                            variant="solid"
                        >
                            <GalleryItemPinterest
                                color="#fff"
                                name="Pinterest"
                                variant="Transparent"
                            />
                            Guardar
                        </GalleryItemButton>
                        <GalleryItemImage alt={description} src={image} ratio={ratio} />
                    </>
                )}
            </GalleryItemImageContainer>
            <GalleryItemCaption variant="transparent">
                <GalleryItemData variant="transparent">
                    <GalleryItemCounter>{index}</GalleryItemCounter>
                    {attribution && <GalleryItemInfo>{attribution}</GalleryItemInfo>}
                </GalleryItemData>
                {description && <GalleryItemDescription>{description}</GalleryItemDescription>}
            </GalleryItemCaption>
        </GalleryItemStyles>
    );
};

GalleryItem.propTypes = {
    attribution: PropTypes.string,
    description: PropTypes.string,
    domain: PropTypes.string.isRequired,
    image: PropTypes.shape({
        desktop: PropTypes.shape({
            srcSet: PropTypes.string,
        }),
        mobile: PropTypes.shape({
            srcSet: PropTypes.string,
        }),
    }),
    index: PropTypes.string.isRequired,
    isAmp: PropTypes.bool.isRequired,
    uri: PropTypes.string.isRequired,
};

GalleryItem.defaultProps = {
    attribution: "",
    description: "",
    image: {
        desktop: {
            srcSet: "",
        },
        mobie: {
            srcSet: "",
        },
    },
};

export default GalleryItem;
