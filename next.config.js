module.exports = {
    i18n: {
        locales: ["en"],
        defaultLocale: "en",
    },
    webpack: (config, options) => {
        config.node = {
            ...config.node,
            fs: 'empty',
            child_process: 'empty',
            net: 'empty',
            tls: 'empty',
        }

        return config
    },
    trailingSlash: true,
};