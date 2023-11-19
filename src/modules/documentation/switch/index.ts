import componentDemoCode from "@/modules/documentation/switch/demo?raw";
import componentDemo from "@/modules/documentation/switch/demo";
import utilsDefinition from "@/components/utils/cn?raw";
import codeDefinition from "@/components/Switch?raw";
import {CodePreview} from "@/components/CodePreview";
import {div, escHtml} from "structr-composer";
import {
  DocumentationTableOfContents,
  DocumentationSection,
  DocumentationHeader,
  TDocumentationLink,
} from "@/components/layout/DocumentationLayout";
import Code from "@/components/CodeHighlight";

const COMPONENT_NAME = "Switch";
const COMPONENT_DESCRIPTION =
  "A control that allows the user to toggle between checked and not checked.";

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

const USAGE_1 = `import {Switch} from "@/components/Switch";`;

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
        description: escHtml`Pass the ${Code(
          "value"
        )} as the key name in ${Code(
          "x-data"
        )}. You are able to control the state of the switch by manipulating the value of the key in ${Code(
          "x-data"
        )}.`,
        sampleCode: [
          {
            codeString: USAGE_1,
            id: "usage-1",
          },
          {codeString: componentDemoCode, id: "usage-2"},
        ],
      })
    ),
    DocumentationTableOfContents({documentationList})
  );
}
