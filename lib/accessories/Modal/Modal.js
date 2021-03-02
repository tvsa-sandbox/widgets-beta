import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "styled-components";
import Icons from "../Icons";
import { ModalStyles, ModalClose } from "./styles";

const Modal = props => {
    const { children, handleClose, closebtn } = props;
    const themeContext = useContext(ThemeContext);
    const ui = themeContext.ui.name;
    return (
        <ModalStyles variant="Transparent" as="section" {...props}>
            {closebtn ? (
                <ModalClose variant="Transparent" onClick={handleClose} aria-label="close" my="12px">
                    {ui === "tudn" ? (
                        <Icons color="#007350" name="Close" variant="Transparent" />
                    ) : (
                            <Icons color="#fff" name="Close" variant="Transparent" />
                        )}

                </ModalClose>
            ) : null}
            {children}
        </ModalStyles>
    );
};

Modal.propTypes = {
    children: PropTypes.node,
    closebtn: PropTypes.bool,
    handleClose: PropTypes.func.isRequired,
};

Modal.defaultProps = {
    children: null,
    closebtn: true,
};

export default Modal;
