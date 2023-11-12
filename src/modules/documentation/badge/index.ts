import {div, escHtml} from "structr-composer";
import {
  DocumentationHeader,
  DocumentationSection,
  DocumentationTableOfContents,
  TDocumentationLink,
} from "@/components/layout/DocumentationLayout";
import {CodePreview} from "@/components/CodePreview";
import badgeDefinition from "@/components/Badge?raw";
import utilsDefinition from "@/components/utils/cn?raw";
import BadgeDemoRaw from "./demo?raw";
import BadgeDemo from "./demo";
import {badges} from "./data";

const badgeUsage1 = `import Badge from "@/components/Badge"`;
const badgeUsage2 = `Badge({variant: "ghost"}, ${"escHtml`Badge`"})`;

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
    children: badges,
  },
];

export default function () {
  return div(
    {class: "flex space-x-8"},
    div(
      {class: "flex flex-col space-y-8 w-full"},
      DocumentationHeader({
        title: "Badge",
        description: "Displays a badge or a component that looks like a badge.",
      }),
      CodePreview({
        codeString: BadgeDemoRaw,
        preview: BadgeDemo(),
        title: "Badge",
        id: "default",
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
            codeString: badgeDefinition,
            id: "button-manual-install",
            description: "Copy and paste the following code into your project.",
          },
        ],
      }),
      DocumentationSection({
        title: "Usage",
        id: "usage",
        sampleCode: [
          {codeString: badgeUsage1, id: "badge-usage-1"},
          {codeString: badgeUsage2, id: "badge-usage-2"},
        ],
      }),
      DocumentationSection({
        title: "Examples",
        id: "example",
      }),
      ...badges.map(({id, code, title, preview}) =>
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
