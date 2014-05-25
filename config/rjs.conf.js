({
    baseUrl: "../src/js",
    mainConfigFile: "../src/js/require.conf.js",
    separateCSS: true,
    stubModules: ['less'],
    exclude: ['less'],
    include: ['main-something'],
    out: '../build/main.min.js',


})