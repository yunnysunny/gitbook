var pkg = require('../package.json');

module.exports = {
    // Documentation for GitBook is stored under "docs"
    root: './',
    title: 'GitBook Toolchain Documentation',

    // Enforce use of GitBook v3
    gitbook: '3.1.1',

    // Use the "official" theme
    plugins: [ 'sharing', 'fontsettings', 'sitemap'],

    variables: {
        version: pkg.version
    },

    pluginsConfig: {
        sitemap: {
            hostname: 'https://gitbook.whyun.com'
        }
    }
};
