import React from "react";
import PropTypes from "prop-types";
import { Icons } from "../../accessories";
import {
    EmailItemStyles,
    EmailButtonStyles,
    EmailHeadStyles,
    EmailItemText,
    EmailItemTitle,
    EmailFormStyles,
    EmailItemContent,
    EmailTextContent,
    EmailInputStyles,
} from "./styles";

const EmailItem = props => {
    return (
        <EmailItemStyles variant="Transparent">
            <EmailHeadStyles variant="Flex">
                <EmailItemTitle variant="h2">Recuperar contraseña</EmailItemTitle>
                <Icons name="Close" variant="Outline" />
            </EmailHeadStyles>
            <EmailItemContent variant="Solid">
                <EmailTextContent variant="Transparent">
                    <EmailItemText>
                        Ingresa la dirección de correo electrónico asociada a tu cuenta y te
                        enviaremos un enlace para restablecer tu contraseña.
                    </EmailItemText>
                </EmailTextContent>
                <EmailFormStyles>
                    <EmailInputStyles variant="Interaction" placeholder="E-MAIL" />
                </EmailFormStyles>
                <EmailButtonStyles variant="Inactive">ENVIAR ENLACE</EmailButtonStyles>
            </EmailItemContent>
        </EmailItemStyles>
    );
};

export default EmailItem;
