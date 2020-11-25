import React from "react";
import PropTypes from "prop-types";
import { Icons } from "../../accessories";
import { SocialBoxStyles, ButtonSocial } from "./styles";

const SocialBox = props => {
    const { items } = props;
    return (
        <SocialBoxStyles variant="Flex">
            {items.map((item, index) => {
                const KEY = `${items.title}-${index}`;
                return (
                    <ButtonSocial bg={item.bg} rounded="50px" aria-label="botoncompartir" key={KEY}>
                        <Icons name={item.name} variant="Transparent" color={item.name} {...item} />
                    </ButtonSocial>
                );
            })}
        </SocialBoxStyles>
    );
};

SocialBox.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({})),
};

SocialBox.defaultProps = {
    items: [],
};

export default SocialBox;
