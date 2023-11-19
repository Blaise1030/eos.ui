import componentDemoCode from "@/modules/documentation/popover/demo?raw";
import componentDemo from "@/modules/documentation/popover/demo";
import utilsDefinition from "@/components/utils/cn?raw";
import codeDefinition from "@/components/Popover?raw";
import {CodePreview} from "@/components/CodePreview";
import {div, escHtml} from "structr-composer";
import {
  DocumentationTableOfContents,
  DocumentationSection,
  DocumentationHeader,
  TDocumentationLink,
} from "@/components/layout/DocumentationLayout";
import Code from "@/components/CodeHighlight";

const COMPONENT_NAME = "Popover";
const COMPONENT_DESCRIPTION =
  "Displays rich content in a portal, triggered by a button.";

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

const USAGE_1 = `import {Popover, PopoverContent, PopoverTrigger} from "@/components/Popover";`;

const USAGE_2 = `
Popover({},  
  PopoverTrigger({}, ${"escHtml`Popover Trigger`"}),    
  PopoverContent({},${"escHtml`Popover Content`"}),
  button({'@click':"popoverOpen != popoverOpen"},${"escHtml`Try Me`"})
)
`;

export default function () {
  return div(
    {class: "flex space-x-8 w-full"},
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
        description: escHtml`Toggle the value of ${Code(
          "popoverOpen"
        )} to true or false within ${Code(
          "Popover()"
        )} to open or close the popover`,
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
