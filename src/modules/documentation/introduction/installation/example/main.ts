import {div, escHtml} from "structr-composer";
import Button from "@/components/Button";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = div(
  {
    class: "flex flex-col items-center justify-center h-screen w-screen",
  },
  Button({}, escHtml`Button`)
);
