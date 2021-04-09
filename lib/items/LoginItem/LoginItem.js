import React from "react";
import PropTypes from "prop-types";
import { Icons } from "../../accessories";
import {
    LoginItemStyles,
    LoginInputStyles,
    LoginButtonStyles,
    LoginItemText,
    LoginItemTitle,
    LoginAnchorStyles,
    LoginItemContent,
    LoginAnchorContent,
} from "./styles";

const LoginItem = props => {
    return (
        <LoginItemStyles variant="Transparent">
            <LoginAnchorContent variant="Flex">
                <LoginItemTitle variant="h2">Inicia sesión o registrate</LoginItemTitle>
                <Icons name="Close" variant="Outline" />
            </LoginAnchorContent>
            <LoginItemContent variant="Solid">
                <LoginInputStyles variant="Interaction" placeholder="E-MAIL" />
                <LoginInputStyles variant="Interaction" placeholder="CONTRASEÑA" />
                <LoginAnchorContent variant="Flex">
                    <LoginAnchorStyles>¿Olvidaste tu contraseña?</LoginAnchorStyles>
                    <LoginAnchorStyles>Registrate</LoginAnchorStyles>
                </LoginAnchorContent>
                <LoginButtonStyles variant="Inactive">INICIAR SESIÓN</LoginButtonStyles>
                <LoginItemText>O</LoginItemText>
                <LoginButtonStyles variant="Solid" icon="Facebook">
                    CONTINUAR CON FACEBOOK
                </LoginButtonStyles>
                <LoginButtonStyles variant="Solid">CONTINUAR CON GOOGLE</LoginButtonStyles>
                <LoginButtonStyles variant="Solid" icon="Twitter">
                    CONTINUAR CON TWITTER
                </LoginButtonStyles>
            </LoginItemContent>
        </LoginItemStyles>
    );
};

export default LoginItem;
