import componentDemoCode from "@/modules/documentation/banner/demo?raw";
import componentDemo from "@/modules/documentation/banner/demo";
import utilsDefinition from "@/components/utils/cn?raw";
import codeDefinition from "@/components/Banner?raw";
import {CodePreview} from "@/components/CodePreview";
import {div, escHtml} from "structr-composer";
import {
  DocumentationTableOfContents,
  DocumentationSection,
  DocumentationHeader,
  TDocumentationLink,
} from "@/components/layout/DocumentationLayout";
import Code from "@/components/CodeHighlight";

const COMPONENT_NAME = "Banner";
const COMPONENT_DESCRIPTION =
  "Call to action banner that stick to the top or bottom of the page.";

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
Banner(
  ...
  Button(
    {
      variant: "ghost",
      size: "icon",
      class: "h-5 w-5",
      "@click":
        "bannerVisible=false; setTimeout(()=>{ bannerVisible = true }, 1000);",
    },
    closeButton
  )
  ...
)
`;

const USAGE_2 = `
Banner(
  ...
  Button(
    {
      variant: "ghost",
      size: "icon",
      class: "h-5 w-5",
      "@click":"close()",
    },
    closeButton
  )
  ...
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
        description: escHtml`You can set ${Code("bannerVisible")} to ${Code(
          "true"
        )} or ${Code("false")} in the child elements wrap under ${Code(
          "Banner()"
        )}. You are able to use ${Code(
          "close()"
        )} to close the banner as well.`,
        sampleCode: [
          {
            codeString: USAGE_1,
            id: "usage-1",
          },
          {codeString: USAGE_2, id: "usage-1"},
        ],
      })
    ),

    DocumentationTableOfContents({documentationList})
  );
}
