import componentDemoCode from "@/modules/documentation/dialog/demo?raw";
import componentDemo from "@/modules/documentation/dialog/demo";
import utilsDefinition from "@/components/utils/cn?raw";
import codeDefinition from "@/components/Dialog?raw";
import {CodePreview} from "@/components/CodePreview";
import {div, escHtml} from "structr-composer";
import {
  DocumentationTableOfContents,
  DocumentationSection,
  DocumentationHeader,
  TDocumentationLink,
} from "@/components/layout/DocumentationLayout";
import Code from "@/components/CodeHighlight";

const COMPONENT_NAME = "Dialog";
const COMPONENT_DESCRIPTION =
  "A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.";

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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/Dialog";
`;

const USAGE_2 = `
export default function DialogDemo() {
  return div(
    {
      class: "h-full w-full flex items-center justify-center",
      "x-data": "{dialog:false}",
    },
    Dialog(
      {},
      DialogTrigger(
        {value: "dialog"},
        Button({variant: "outline"}, ${"escHtml`Open`"})
      ),
      DialogContent(
        {value: "dialog"},
        DialogHeader(
          {},
          DialogTitle({}, ${"escHtml$`Title`"}),
          DialogDescription({}, ${"escHtml$`Description`"})
        ),
        div({class: "space-y-2 py-6"}, ${"escHtml`Content`"}),
        DialogFooter({}, ${"escHtml`Content`"})
      )
    )
  );
}`;

const USAGE_3 = `
// You are able to toggle the dialog by just changing 'dialog'

div(
  {"x-data": "{dialog:false}"},
  button({"@click":"{dialog = !dialog}"}),
  DialogContent(
    {value: "dialog"},
    DialogHeader(
      {},
      DialogTitle({}, ${"escHtml$`Title`"}),
      DialogDescription({}, ${"escHtml$`Description`"})
    ),
    div({class: "space-y-2 py-6"}, ${"escHtml`Content`"}),
    DialogFooter({}, ${"escHtml`Content`"})
  )
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
        description: escHtml`Pass the ${Code(
          "value"
        )} as the key name in ${Code(
          "x-data"
        )}. You are able to toggle the dialog by manipulating the value of the key in ${Code(
          "x-data"
        )}.`,
        sampleCode: [
          {
            codeString: USAGE_1,
            id: "usage-1",
          },
          {codeString: USAGE_2, id: "usage-2"},
          {codeString: USAGE_3, id: "usage-3"},
        ],
      })
    ),

    DocumentationTableOfContents({documentationList})
  );
}
