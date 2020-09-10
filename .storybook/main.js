module.exports = {
    stories: ["./stories/**/*.stories.@(js|jsx|ts|tsx)"],
    addons: [
        {
            name: "@storybook/addon-essentials",
            options: {
                backgrounds: false,
            },
        },
        "@storybook/addon-links",
        "@storybook/addon-knobs/register",
        "@storybook/addon-a11y/register",
        "@whitespace/storybook-addon-html/register",
    ],
};
