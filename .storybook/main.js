const path = require("path");

module.exports = {
    stories: ["./stories/**/*.stories.[tj]s"],
    addons: [
        // "@storybook/addon-backgrounds/register",
        "@storybook/addon-knobs/register",
        "@storybook/addon-viewport/register",
        "@storybook/addon-a11y/register",
        "@whitespace/storybook-addon-html/register",
        // "@storybook/addon-storysource",
    ],
};
