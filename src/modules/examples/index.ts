import {div, escHtml, h1, p} from "structr-composer";
import DemoFrame from "@/components/modules/DemoFrame";
import Button from "@/components/Button";

export default function () {
  return div(
    {class: "min-h-screen m-auto p-4 flex flex-col max-w-[1350px] mb-12"},
    div(
      {class: "flex flex-col space-y-4 py-8"},
      h1(
        {class: "font-bold text-5xl tracking-tighter"},
        escHtml`Check out some examples.`
      ),
      p(
        {class: "max-w-2xl text-xl text-muted-foreground"},
        escHtml`Explore what experiences you can craft with εos.ui.`
      ),
      div(
        {class: "flex flex-row space-x-4"},
        Button({href: "/#/docs/introduction"}, escHtml`Get Started`),
        Button(
          {href: "/#/docs/accordian", variant: "outline"},
          escHtml`Components`
        )
      )
    ),
    DemoFrame()
  );
}
