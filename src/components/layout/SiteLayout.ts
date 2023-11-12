import {HtmlEscapedString, a, div, escHtml, header} from "structr-composer";
import DarkModeToggle from "../DarkModeToggle";
import Button from "../Button";
import PageFooter from "../modules/PageFooter";

const router = [
  {
    title: "Documentation",
    path: "/#/docs/introduction",
    selected: `document?.location?.hash.includes('#/docs/')`,
  },
  {
    title: "Examples",
    path: "/#/example",
    selected: `document?.location?.hash.includes('#/example')`,
  },
  {
    title: "Github",
    path: "https://github.com/Blaise1030/eos.ui",
    selected: "false",
  },
];

export default function (children: HtmlEscapedString) {
  const navBarClass =
    "border-b sticky top-0 left-0 bg-background/90 border-border z-50 backdrop-blur-sm";
  const navBarContainerClass =
    "flex flex-row justify-between w-full items-center max-w-7xl mx-auto px-4 py-2 ";

  return div(
    {class: "w-full"},
    header(
      {class: navBarClass},
      div(
        {class: navBarContainerClass},
        div(
          {class: "flex flex-row space-x-6 items-center"},
          a(
            {
              class: "font-bold tracking-tighter mr-2",
              href: "/#/",
            },
            escHtml`eos.ui`
          ),
          ...(router || []).map(({title, path, selected}) =>
            Button(
              {
                ":class": `${selected} ? 'font-medium!': 'text-muted-foreground!' `,
                class: "p-0 justify-start h-fit font-normal hidden md:block",
                variant: "link",
                href: `${path}`,
              },
              escHtml`${title}`
            )
          )
        ),
        DarkModeToggle({class: "w-8 h-8"})
      )
    ),
    children,
    PageFooter()
  );
}
