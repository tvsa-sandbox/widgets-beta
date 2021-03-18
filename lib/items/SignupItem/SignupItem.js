import React from "react";
import PropTypes from "prop-types";
import { Icons } from "../../accessories";
import {
    SignupItemStyles,
    SignupInputStyles,
    SignupButtonStyles,
    SignupHeadStyles,
    SignupItemText,
    SignupItemTitle,
    SignupAnchorStyles,
    SignupItemDividerStyles,
    SignupFormStyles,
    SignupItemContent,
    SignupPrivacyContent,
    SignupInfoStyles,
} from "./styles";

const SignupItem = props => {
    return (
        <SignupItemStyles variant="Transparent">
            <SignupHeadStyles variant="Flex">
                <SignupItemTitle variant="h2">Registro correo electrónico</SignupItemTitle>
                <Icons name="Close" variant="Outline" />
            </SignupHeadStyles>
            <SignupItemContent variant="Solid">
                <SignupFormStyles>
                    <SignupInputStyles variant="Interaction" placeholder="Nombre" />
                    <SignupInputStyles variant="Interaction" placeholder="Correo electrónico" />
                    <SignupInputStyles variant="Interaction" placeholder="Contraseña" />
                    <SignupInputStyles variant="Interaction" placeholder="Repetir contraseña" />
                    <SignupPrivacyContent variant="Flex">
                        <SignupInfoStyles>
                            Al seleccionar ACEPTAR Y CONTINUAR a continuación, aceptaras los{" "}
                            <SignupAnchorStyles>Términos del servicio</SignupAnchorStyles> y la{" "}
                            <SignupAnchorStyles>Política de privacidad</SignupAnchorStyles>.
                        </SignupInfoStyles>
                    </SignupPrivacyContent>
                    <SignupButtonStyles variant="Inactive">ACEPTAR Y CONTINUAR</SignupButtonStyles>
                    <SignupButtonStyles variant="Outline">
                        INICIA SESIÓN CON UNA RED SOCIAL
                    </SignupButtonStyles>
                </SignupFormStyles>
            </SignupItemContent>
        </SignupItemStyles>
    );
};

export default SignupItem;
