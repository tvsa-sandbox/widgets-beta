import React from "react";
import { EnhancementImageStyles, BoxTextStyles, EnhancementImageText } from "./styles";
import Image from "../../accessories/Image";

const EnhancementImage = props => {
    const { children, src, ratio } = props;
    return (
        <EnhancementImageStyles variant="Transparent">
            <Image alt="Enhancement" src={src} ratio={ratio} />
            <BoxTextStyles variant="Transparent">
                <EnhancementImageText>
                    Angelique Boyer con toda la mejor actitud en su regreso triunfal a Tik Tok por
                    segunda vez
                </EnhancementImageText>
            </BoxTextStyles>
        </EnhancementImageStyles>
    );
};

export default EnhancementImage;
