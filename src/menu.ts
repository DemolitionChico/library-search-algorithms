import * as readline from "readline";

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

export const handleMenu = (
  up: () => void,
  down: () => void,
  select: () => void,
  draw: () => void
) => {
  process.stdin.on("keypress", (_, key) => {
    if (key.name == "up") {
      up();
    }
    if (key.name == "down") {
      down();
    }
    if (key.name == "return") {
      select();
    }
    if (key.name == "escape") {
      process.exit(0);
    }
    console.clear();
    draw();
  });
};

type MenuOption = {
    title: string;
    select: () => void;
}

export type Menu = {
    title?: string;
    options: MenuOption[],
    currentIndex: number;
}

export const redrawMenu = ({title, options, currentIndex}: Menu) => {
    title && console.log(`${title}\n`);
    options.forEach((e, i) => {
      console.log(`${i === currentIndex ? " > " : "   "}${e.title}`);
    });
  };
  
