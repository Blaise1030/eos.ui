import {DocumentationHeader} from "@/components/layout/DocumentationLayout";
import {a, div, escHtml, p, span} from "structr-composer";

export default function () {
  return div(
    {class: "flex flex-col h-full"},
    DocumentationHeader({
      title: "More components...",
      description: "Documentation needs more time !",
    }),
    div(
      {class: "py-4"},
      span({class: "mr-1"}, escHtml`Check out more components`),
      a(
        {
          href: "https://github.com/Blaise1030/eos.ui/tree/main/src/components",
          class: "underline",
          target: "_blank",
        },
        escHtml`here`
      ),
      escHtml`.`
    )
  );
}
