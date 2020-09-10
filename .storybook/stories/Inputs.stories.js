import React, { Fragment } from "react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { Form, Title, Label, Box, Inputs, Icons } from "accessories";

export default {
    decorators: [withKnobs],
    title: "Desing System/Atoms/Inputs",
};

export const INPUTS = () => {
    return (
        <div>
            <Title variant="h2">Inputs</Title>
            <Box variant="Space">
                <Label>MyText</Label>
                <Form>
                    <Inputs />
                </Form>
            </Box>

            <Box variant="Space">
                <Label>Done</Label>
                <Form>
                    <Inputs variant="Done" />
                </Form>
            </Box>

            <Box variant="Space">
                <Label>Warning</Label>
                <Form>
                    <Inputs variant="Warning" />
                </Form>
            </Box>

            <Box variant="Space">
                <Label>Error</Label>
                <Form>
                    <Inputs variant="Error" />
                </Form>
            </Box>
        </div>
    );
};

export const INPUTICON = () => (
    <div>
        <Title variant="h2">Inputs Icons</Title>

        <Box variant="Space">
            <Label>Error</Label>
            <Form>
                <Inputs variant="Error" />
                <img src="https://img.icons8.com/material-sharp/24/000000/facebook-circled.png" />
            </Form>
        </Box>

        <Box variant="Space">
            <Label>MyText</Label>
            <Form>
                <Inputs variant="Done" />
                <img src="https://img.icons8.com/color/24/000000/twitter-squared.png" />
            </Form>
        </Box>

        <Box variant="Space">
            <Label>MyText</Label>
            <Form>
                <Inputs variant="Warning" />
                <img src="https://img.icons8.com/material-sharp/24/000000/youtube-play.png" />
            </Form>
        </Box>

        <Box variant="Space">
            <Label>MyText</Label>
            <Form>
                <Inputs variant="Error" />
                <img src="https://img.icons8.com/material-sharp/24/000000/amazon.png" />
            </Form>
        </Box>
    </div>
);
