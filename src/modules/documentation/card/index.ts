import componentDemoCode from "@/modules/documentation/card/demo?raw";
import componentDemo from "@/modules/documentation/card/demo";
import utilsDefinition from "@/components/utils/cn?raw";
import codeDefinition from "@/components/Card?raw";
import {CodePreview} from "@/components/CodePreview";
import {div} from "structr-composer";
import {
  DocumentationTableOfContents,
  DocumentationSection,
  DocumentationHeader,
  TDocumentationLink,
} from "@/components/layout/DocumentationLayout";

const COMPONENT_NAME = "Card";
const COMPONENT_DESCRIPTION =
  "Displays a card with header, content, and footer.";

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

const USAGE_1 = `
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/Card";
`;

const USAGE_2 = `
Card({},
  CardHeader({},
    CardTitle({}, ${"escHtml`Card Title`"}),
    CardDescription({},${"escHtml`Card Description`"})
  ),
  CardContent({},${"escHtml`Card Content`"}),
  CardFooter({}, ${"escHtml`Card Footer`"})
)
`;

export default function () {
  return div(
    {class: "flex space-x-8"},
    div(
      {class: "flex flex-col space-y-8 w-full"},
      DocumentationHeader({
        description: COMPONENT_DESCRIPTION,
        title: COMPONENT_NAME,
      }),
      CodePreview({
        codeString: componentDemoCode,
        preview: componentDemo(),
        title: COMPONENT_NAME,
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
            codeString: utilsDefinition,
            id: "add-utils",
            description:
              "Copy and paste the following functions into your project.",
          },
          {
            description: "Copy the following code definition to your project.",
            codeString: codeDefinition,
            id: "manual-install",
          },
        ],
      }),
      DocumentationSection({
        title: "Usage",
        id: "usage",
        sampleCode: [
          {
            codeString: USAGE_1,
            id: "usage-1",
          },
          {codeString: USAGE_2, id: "usage-2"},
        ],
      })
    ),
    DocumentationTableOfContents({documentationList})
  );
}
