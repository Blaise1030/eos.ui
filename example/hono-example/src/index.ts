import {serve} from "@hono/node-server";
import {Hono} from "hono";
import {pageTemplate} from "./components/pageTemplate";
import Button from "./components/Button";
import {div, escHtml} from "structr-composer";
import {AccordianDemo} from "./components/AccordianDemo";
import DarkModeToggle from "./components/DarkModeToggle";

const app = new Hono();
app.get("/", (c) =>
  c.html(
    pageTemplate(
      div(
        {class: "flex items-center justify-center h-screen w-screen"},
        div(
          {class: "flex flex-col"},
          DarkModeToggle(),
          Button({}, escHtml`Your Button`),
          div({class: "min-w-3xl w-full"}, AccordianDemo())
        )
      )
    )
  )
);

serve(app);
