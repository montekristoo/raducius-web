/** @type {import('tailwindcss').Config} */
const {
    url
} = require("inspector");
const colors = require("tailwindcss/colors");
module.exports = {
    mode: "jit",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            gridTemplateRows: {
                9: "repeat(7, minmax(0, 1fr))",
            },
            width: {
                navbar: "1850px",
            },
            fontSize: {
                nameSize: "58px",
                nameSizeSmall: "50px",
                productName: "18px",
                banner: "9vw",
            },
            fontFamily: {
                montserrat: ["Montserrat", "sans-serif"],
                shadows: ["ShadowsIntoLight"],
                staatliches: ["Staatliches"],
                trispace: ["Trispace"],
                paytone: ["Paytone"],
                meaven: ["Meaven"],
            },
        },
    },
    plugins: [],
};