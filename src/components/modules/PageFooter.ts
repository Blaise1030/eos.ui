import {div, escHtml, footer} from "structr-composer";

export default function PageFooter() {
  return footer(
    {class: "py-8 border-t text-muted-foreground text-xs border-border"},
    div(
      {class: "max-w-7xl m-auto px-4"},
      div(escHtml`Built by blaise1030. The source code is available on GitHub.`)
    )
  );
}
