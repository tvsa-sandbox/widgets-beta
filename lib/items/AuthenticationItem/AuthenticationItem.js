import React from "react";
import PropTypes from "prop-types";
import { Icons } from "../../accessories";
import {
    AuthenticationItemStyles,
    AuthenticationInputStyles,
    AuthenticationButtonStyles,
    AuthenticationHeadStyles,
    AuthenticationItemText,
    AuthenticationItemTitle,
    AuthenticationAnchorStyles,
    AuthenticationFormStyles,
    AuthenticationItemContent,
    AuthenticationTextContent,
    AuthenticationPrivacyContent,
    AuthenticationItemCode,
    AuthenticationInputsBox,
    AuthenticationText,
    AuthenticationTime,
} from "./styles";

const AuthenticationItem = props => {
    return (
        <AuthenticationItemStyles variant="Transparent">
            <AuthenticationHeadStyles variant="Flex">
                <AuthenticationItemTitle variant="h2">Autenticación</AuthenticationItemTitle>
                <Icons name="Close" variant="Outline" />
            </AuthenticationHeadStyles>
            <AuthenticationItemContent variant="Solid">
                <AuthenticationTextContent variant="Transparent">
                    <AuthenticationItemText>
                        Te hemos enviado un correo para verificar tu cuenta, escribe los 4 digitos a
                        continuación
                    </AuthenticationItemText>
                </AuthenticationTextContent>
                <AuthenticationItemCode variant="Transparent">
                    <AuthenticationFormStyles>
                        <AuthenticationInputsBox variant="Flex">
                            <AuthenticationInputStyles variant="Interaction" />
                            <AuthenticationInputStyles variant="Interaction" />
                            <AuthenticationInputStyles variant="Interaction" />
                            <AuthenticationInputStyles variant="Interaction" />
                        </AuthenticationInputsBox>
                    </AuthenticationFormStyles>
                </AuthenticationItemCode>
                <AuthenticationPrivacyContent variant="Flex">
                    <AuthenticationText>
                        Tu código expira en{" "}
                        <AuthenticationTime variant="Duration">1:05</AuthenticationTime>
                    </AuthenticationText>
                </AuthenticationPrivacyContent>
                <AuthenticationButtonStyles variant="Inactive">
                    VERIFICAR
                </AuthenticationButtonStyles>
                <AuthenticationPrivacyContent variant="Flex">
                    <AuthenticationAnchorStyles>
                        ¿No has recibido un código de verificación?
                    </AuthenticationAnchorStyles>
                </AuthenticationPrivacyContent>
            </AuthenticationItemContent>
        </AuthenticationItemStyles>
    );
};

export default AuthenticationItem;
