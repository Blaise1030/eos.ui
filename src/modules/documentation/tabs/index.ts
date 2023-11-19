import TabsDemoCode from "@/modules/documentation/tabs/demo?raw";
import {TabsDemo} from "@/modules/documentation/tabs/demo";
import tabsDefinition from "@/components/Tabs?raw";
import {CodePreview} from "@/components/CodePreview";
import {div, escHtml} from "structr-composer";
import {
  DocumentationTableOfContents,
  DocumentationSection,
  DocumentationHeader,
  TDocumentationLink,
} from "@/components/layout/DocumentationLayout";
import Code from "@/components/CodeHighlight";

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
        title: "Tabs",
        description:
          "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
      }),
      CodePreview({
        preview: TabsDemo(),
        codeString: TabsDemoCode,
        title: "Accordian",
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
            codeString: tabsDefinition,
            id: "accordian-manual-install",
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
        )}. You are able to control the state of the tabs by manipulating the value of the key in ${Code(
          "x-data"
        )}.
        When user selects a tab, the ${Code(
          "TabsContent()"
        )} with the same ${Code("id")} as the selected ${Code(
          "TabsTrigger()"
        )} will be displayed.`,
        sampleCode: [{codeString: TabsDemoCode, id: "accordian-usage-1"}],
      })
    ),
    DocumentationTableOfContents({documentationList})
  );
}
