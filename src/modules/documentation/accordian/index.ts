import accordianDemo from "@/modules/documentation/accordian/demo?raw";
import {AccordianDemo} from "@/modules/documentation/accordian/demo";
import accordianDefinition from "@/components/Accordian?raw";
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
        title: "Accordion",
        description:
          "A vertically stacked set of interactive headings that each reveal a section of content.",
      }),
      CodePreview({
        preview: AccordianDemo(),
        codeString: accordianDemo,
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
            codeString: accordianDefinition,
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
        )}. You are able to control the state of the accordian by manipulating the value of the key in ${Code(
          "x-data"
        )}. The accordian will open based on the ${Code("id")} from each ${Code(
          "AccordianItem()"
        )}.`,
        sampleCode: [{codeString: accordianDemo, id: "accordian-usage-1"}],
      })
    ),
    DocumentationTableOfContents({documentationList})
  );
}
