"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const menu_1 = require("./menu");
const options = [1, 2, 3, 4, "EXIT"];
const options2 = ["I", "II", "EXIT"];
let currentOption = 0;
let currentStep = 0;
const getCurrentMenu = () => {
    return {
        title: `Menu ${currentStep}`,
        options: (currentStep === 0 ? options : options2).map((x, i) => ({
            title: x.toString(),
            select: () => {
                x.toString().toUpperCase() === "EXIT" && process.exit(0);
                currentStep++;
            },
        })),
        currentIndex: currentOption,
    };
};
const up = () => {
    const options = getCurrentMenu().options;
    currentOption--;
    currentOption = currentOption < 0 ? options.length - 1 : currentOption;
};
const down = () => {
    const options = getCurrentMenu().options;
    currentOption++;
    currentOption = currentOption > options.length - 1 ? 0 : currentOption;
};
const select = () => {
    getCurrentMenu().options[currentOption].select();
};
const redraw = () => {
    const menu = getCurrentMenu();
    (0, menu_1.redrawMenu)(menu);
};
(0, menu_1.handleMenu)(up, down, select, redraw);
const run = () => {
    console.clear();
    (0, menu_1.redrawMenu)(getCurrentMenu());
};
exports.run = run;
