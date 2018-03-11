$(document).ready(function() {

    $(".label").click(function() {
        $(".options").toggle(400);
    });

    function setTheme(theme) {

        for (key in theme) {
            document.documentElement.style.setProperty('--' + key, theme[key]);
        }
    }

    $(".startrek").click(function() {

        var theme = {
            background: "#0b2143",
            text: "#0b2143",
            primary: "#9999FF",
            secondary: "#FF9900"
        };

        setTheme(theme);
    });

    $(".monochroom").click(function() {

        var theme = {
            background: "#000000",
            text: "#000000",
            primary: "#686868",
            secondary: "#cccccc"
        };

        setTheme(theme);
    });

    $(".pastel").click(function() {

        var theme = {
            background: "#F3FCE8",
            text: "#01385D",
            primary: "#88C2DD",
            secondary: "rgba(136,194,221,0.27)"
        };

        setTheme(theme);
    });

});