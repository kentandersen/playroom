requirejs.config({
    baseUrl: "js",

    paths: {
        "style": "../css"
    },

    map: {
        "*": {
            "css": "bower_components/require-css/css",
            "less": "bower_components/require-less/less"
        }
    }
});
