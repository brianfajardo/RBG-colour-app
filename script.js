var app = {
    colors: [],
    generateColor: function () {
        var red = Math.round(Math.random() * 255) + 1;
        var green = Math.round(Math.random() * 255) + 1;
        var blue = Math.round(Math.random() * 255) + 1;
        var rbg = "rbg(" + red + ", " + green + ", " + blue + ")";
        return rgb;
    }
}