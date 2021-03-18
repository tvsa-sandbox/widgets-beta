import React from "react";
import PropTypes from "prop-types";
import { Form, Icons } from "../../accessories";
import {
    LoginItemStyles,
    LoginInputStyles,
    LoginButtonStyles,
    LoginHeadStyles,
    LoginItemText,
    LoginItemTitle,
    LoginAnchorStyles,
    LoginItemDividerStyles,
    LoginFormStyles,
    LoginItemContent,
    LoginAnchorContent,
} from "./styles";

const LoginItem = props => {
    return (
        <LoginItemStyles variant="Transparent">
            <LoginHeadStyles variant="Flex">
                <LoginItemTitle variant="h2">Inicia sesión o registrate</LoginItemTitle>
                <Icons name="Close" variant="Outline" />
            </LoginHeadStyles>
            <LoginItemContent variant="Solid">
                <LoginFormStyles>
                    <LoginInputStyles variant="Interaction" placeholder="E-MAIL" />
                    <LoginInputStyles variant="Interaction" placeholder="CONTRASEÑA" />
                    <LoginAnchorContent variant="Flex">
                        <LoginAnchorStyles>¿Olvidaste tu contraseña?</LoginAnchorStyles>
                        <LoginAnchorStyles>Registrate</LoginAnchorStyles>
                    </LoginAnchorContent>
                    <LoginButtonStyles variant="Inactive">INICIAR SESIÓN</LoginButtonStyles>
                    <LoginItemDividerStyles variant="Transparent">
                        <LoginItemText>O</LoginItemText>
                    </LoginItemDividerStyles>
                    <LoginButtonStyles variant="Solid" icon="Facebook">
                        CONTINUAR CON FACEBOOK
                    </LoginButtonStyles>
                    <LoginButtonStyles variant="Solid">CONTINUAR CON GOOGLE</LoginButtonStyles>
                    <LoginButtonStyles variant="Solid" icon="Twitter">
                        CONTINUAR CON TWITTER
                    </LoginButtonStyles>
                </LoginFormStyles>
            </LoginItemContent>
        </LoginItemStyles>
    );
};

export default LoginItem;
