import componentDemoCode from "@/modules/documentation/inputs/demo?raw";
import componentDemo from "@/modules/documentation/inputs/demo";
import utilsDefinition from "@/components/utils/cn?raw";
import TextareaCodeDefinition from "@/components/Textarea?raw";
import InputCodeDefinition from "@/components/Input?raw";
import LabelCodeDefinition from "@/components/Label?raw";
import {CodePreview} from "@/components/CodePreview";
import {div} from "structr-composer";
import {
  DocumentationTableOfContents,
  DocumentationSection,
  DocumentationHeader,
  TDocumentationLink,
} from "@/components/layout/DocumentationLayout";

const COMPONENT_NAME = "Inputs";
const COMPONENT_DESCRIPTION =
  "Displays a form input field or a component that looks like an input field.";

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
import {Textarea} from "@/components/Textarea";
import Label from "@/components/Label";
import Input from "@/components/Input";
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
            description:
              "Copy the following Input code definition to your project.",
            codeString: InputCodeDefinition,
            id: "manual-install-input",
            page: "src/components/Input",
          },
          {
            description:
              "Copy the following Textarea code definition to your project.",
            codeString: TextareaCodeDefinition,
            id: "manual-install-textarea",
            page: "src/components/Textarea",
          },
          {
            description:
              "Copy the following Label code definition to your project.",
            codeString: LabelCodeDefinition,
            id: "manual-install-label",
            page: "src/components/Label",
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
          {codeString: componentDemoCode, id: "usage-2"},
        ],
      })
    ),
    DocumentationTableOfContents({documentationList})
  );
}
