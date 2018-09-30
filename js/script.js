$(document).ready(function() {

    if (localStorage.length >= 1) {
        let currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'startrek') {
            startrek();
        } else if (currentTheme === 'monochroom') {
            monochroom();
        } else if (currentTheme === 'pastel') {
            pastel();
        }
    }

    $(".label").click(function() {
        $(".options").toggle(400);
    });

});

function setTheme(theme) {

    for (key in theme) {
        document.documentElement.style.setProperty('--' + key, theme[key]);
    }

}

function startrek() {

    var theme = {
        background: "#0b2143",
        text: "#0b2143",
        primary: "#9999FF",
        secondary: "#FF9900",
        tertiary: "#FFCC99"
    };

    setTheme(theme);
    localStorage.setItem('theme', 'startrek');
}

function monochroom() {

    var theme = {
        background: "#000000",
        text: "#000000",
        primary: "#686868",
        secondary: "#cccccc",
        tertiary: "#989898"
    };

    setTheme(theme);
    localStorage.setItem('theme', 'monochroom');
}

function pastel() {

    var theme = {
        background: "#F3FCE8",
        text: "#01385D",
        primary: "#88C2DD",
        secondary: "rgba(136,194,221,0.27)",
        tertiary: "#F3D6EC"
    };

    setTheme(theme);
    localStorage.setItem('theme', 'pastel');
}