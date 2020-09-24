import React, { Fragment } from "react";
import { withKnobs } from "@storybook/addon-knobs";

import { Modal, Box, Text } from "../../lib/accessories";

export default {
    decorators: [withKnobs],
    title: "Desing System/Atoms/Modal",
};

export const MODAL = () => {
    return (
        <Fragment>
            <Modal handleClose={() => alert("funcionvacia")} active>
                <Box variant="Flex" style={{ justifyContent: "center" }}>
                    <Text variant="Label">OBJETO</Text>
                </Box>
            </Modal>
        </Fragment>
    );
};
