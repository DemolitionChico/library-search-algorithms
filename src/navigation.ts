import { title } from "process";
import { handleMenu, Menu, redrawMenu } from "./menu";

const options: (number | string)[] = [1, 2, 3, 4, "EXIT"];
const options2: (number | string)[] = ["I", "II", "EXIT"];
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
  redrawMenu(menu);
};

handleMenu(up, down, select, redraw);

export const run = () => {
  console.clear();
  redrawMenu(getCurrentMenu());
};
