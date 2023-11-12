import {div, escHtml} from "structr-composer";
import {
  DocumentationHeader,
  DocumentationSection,
  DocumentationTableOfContents,
  TDocumentationLink,
} from "@/components/layout/DocumentationLayout";
import {CodePreview} from "@/components/CodePreview";
import buttonDefinition from "@/components/Button?raw";
import utilsDefinition from "@/components/utils/cn?raw";
import {buttons} from "./data";

const buttonUsage1 = `import Button from "@/components/Button"`;
const buttonUsage2 = `Button({variant: "ghost"}, ${"escHtml`Button`"})`;

const documentationList: TDocumentationLink[] = [
  {
    id: "installation",
    title: "Installation",
  },
  {
    id: "usage",
    title: "Usage",
  },
  {
    id: "example",
    title: "Example",
    children: buttons,
  },
];

export default function () {
  return div(
    {class: "flex space-x-8"},
    div(
      {class: "flex flex-col space-y-8 w-full"},
      DocumentationHeader({
        title: "Button",
        description:
          "Displays a button or a component that looks like a button.",
      }),
      DocumentationSection({
        title: "Installation",
        id: "installation",
        showIndex: true,
        sampleCode: [
          {
            codeString: `npm install structr-composer class-variance-authority`,
            description: "Install the following dependencies:",
            id: "install-dependencies",
          },
          {
            codeString: utilsDefinition,
            id: "add-utils",
            description:
              "Copy and paste the following functions into your project.",
          },
          {
            codeString: buttonDefinition,
            id: "button-manual-install",
            description: "Copy and paste the following code into your project.",
          },
        ],
      }),
      DocumentationSection({
        title: "Usage",
        id: "usage",
        sampleCode: [
          {codeString: buttonUsage1, id: "button-usage-1"},
          {codeString: buttonUsage2, id: "button-usage-2"},
        ],
      }),
      DocumentationSection({
        title: "Examples",
        id: "example",
      }),
      ...buttons.map(({id, code, title, preview}) =>
        CodePreview({
          preview: preview || escHtml``,
          codeString: code,
          title,
          id,
        })
      )
    ),
    DocumentationTableOfContents({documentationList})
  );
}
