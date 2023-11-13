import {a, div, escHtml, h2, p} from "structr-composer";
import {DocumentationHeader} from "@/components/layout/DocumentationLayout";
import {
  Accordian,
  AccordianContent,
  AccordianItem,
  AccordianTrigger,
} from "@/components/Accordian";
import Code from "@/components/CodeHighlight";

const COMPONENT_NAME = "Introduction";
const COMPONENT_DESCRIPTION =
  "Re-usable, composable components built for Alpine JS & HTML first applications";
const ACCORDIAN_ITEM = [
  {
    id: "1",
    title: "Why copy/paste and not packaged as a dependency ?",
    content: escHtml`
    The idea behind this is to give you ownership and control over the code, allowing you to decide how the components are built and styled.
    <br><br>
    Start with some sensible defaults, then customize the components to your needs.
    <br><br>
    One of the drawback of packaging the components in an npm package is that the style is coupled with the implementation. The design of your components should be separate from their implementation.`,
  },
  {
    id: "2",
    title: "Do you plan to publish it as an npm package ?",
    content: escHtml`No. I have no plans to publish it as an npm package.`,
  },
  {
    id: "3",
    title: "Which frameworks are supported ?",
    content: escHtml`NodeJS or Javascript web framework are supported.`,
  },
  {
    id: "4",
    title: "Can I use this in my project ?",
    content: escHtml`Yes. Free to use for personal and commercial projects. No attribution required.`,
  },
];

const STRUCTR_COMPOSER = a(
  {
    href: "https://www.npmjs.com/package/structr-composer?activeTab=readme",
    class: "underline",
    target: "_blank",
  },
  Code("structr-composer")
);
const introduction = escHtml`
This is not a component library; instead, it's a compilation of AlpineJS + TailwindCSS components that you can easily copy and paste into your Client Side or Server Side JavaScript projects.
<br></br>
There are existing solutions available that offer reusable AlpineJS components for copying and pasting, but they often come with low reusability. This means you may find yourself repeatedly copying and pasting the same pieces of HTML templates throughout your project.
<br></br>
To address this issue, we utilize the ${STRUCTR_COMPOSER} package, a lightweight non-JSX HTML templating library. This package allows us to enjoy the reusability, readability, and composability of the copied components. They function as straightforward JavaScript functions, generating HTML-escaped strings without the need for additional build steps required for JSX.
<br></br>
Since all components here generate HTML-escaped strings, they are usable for both client-side and server-side JavaScript frameworks.
`;

export default function () {
  return div(
    {class: "flex space-x-8 min-h-screen"},
    div(
      {class: "flex flex-col space-y-8 w-full"},
      DocumentationHeader({
        description: COMPONENT_DESCRIPTION,
        title: COMPONENT_NAME,
      }),
      p(introduction),
      div(
        h2(
          {
            class: "w-full py-2 text-2xl font-bold border-border mb-2",
            id: "faq",
          },
          escHtml`FAQ`
        ),
        div(
          {"x-data": "{accordian:''}"},
          Accordian(
            {value: "accordian"},
            ...ACCORDIAN_ITEM.map(({id, title, content}) =>
              AccordianItem(
                {id},
                AccordianTrigger(escHtml`${title}`),
                AccordianContent(content)
              )
            )
          )
        )
      )
    )
  );
}
