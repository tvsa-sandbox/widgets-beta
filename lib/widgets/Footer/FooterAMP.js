import React from "react";
import { Icons } from "../../accessories";
import { FooterStylesAMP, CopyRightStylesAMP, TextCopyStylesAMP } from "./styles";

const FooterAMP = () => {
    return (
        <FooterStylesAMP>
            <CopyRightStylesAMP>
                <Icons color="#fff" name="Logo" size="45" variant="Transparent" />
                <TextCopyStylesAMP>Derechos Reservados @ Televisa S.A. de C.V.</TextCopyStylesAMP>
            </CopyRightStylesAMP>
        </FooterStylesAMP>
    );
};

export default FooterAMP;
