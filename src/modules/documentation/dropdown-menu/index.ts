import {CodePreview} from "@/components/CodePreview";
import {div} from "structr-composer";
import {
  DocumentationTableOfContents,
  DocumentationSection,
  DocumentationHeader,
  TDocumentationLink,
} from "@/components/layout/DocumentationLayout";
import DropdownMenuDemo from "./demo";
import DropdownMenuDemoCode from "./demo?raw";
import DropdownMenuDefinition from "@/components/DropdownMenu?raw";

const documentationList: TDocumentationLink[] = [
  {
    id: "installation",
    title: "Installation",
  },
  {
    id: "usage",
    title: "Usage",
  },
];

export default function () {
  return div(
    {class: "flex space-x-8"},
    div(
      {class: "flex flex-col space-y-8 w-full"},
      DocumentationHeader({
        title: "Dropdown Menu",
        description:
          "Displays a menu to the user — such as a set of actions or functions — triggered by a button.",
      }),
      CodePreview({
        preview: DropdownMenuDemo(),
        codeString: DropdownMenuDemoCode,
        title: "Dropdown Menu",
        id: "default",
      }),
      DocumentationSection({
        title: "Installation",
        id: "installation",
        showIndex: true,
        sampleCode: [
          {
            description: "Install the following dependencies:",
            codeString: `npm install structr-composer`,
            id: "install-dependencies",
          },
          {
            description: "Copy the following code definition to your project.",
            codeString: DropdownMenuDefinition,
            id: "dropdown-manual-install",
          },
        ],
      }),
      DocumentationSection({
        title: "Usage",
        id: "usage",
        sampleCode: [
          {codeString: DropdownMenuDemoCode, id: "dropdown-usage-1"},
        ],
      })
    ),
    DocumentationTableOfContents({documentationList})
  );
}
