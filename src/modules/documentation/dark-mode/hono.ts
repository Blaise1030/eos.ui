import {CodePreview} from "@/components/CodePreview";
import DarkModeToggle from "@/components/DarkModeToggle";
import darkModeToggleCopy from "@/components/DarkModeToggle?raw";
import {
  DocumentationHeader,
  DocumentationSection,
} from "@/components/layout/DocumentationLayout";
import {div} from "structr-composer";

const darkModeSetup = `html(
  ...
  body(
    {
      class: "bg-background text-foreground border-border scroll-smooth",
      "x-bind:class": "currentColorMode",
      "x-init": "setTheme(theme)",
      "x-bind:data-theme": "currentColorMode",
      "x-data": "${`{
        theme: localStorage.getItem('theme') || localStorage.setItem('theme', 'system'),
        currentColorMode: '',
        setTheme(t){
          this.theme = t;
          this.currentColorMode = (this.theme === 'dark' || Boolean(this.theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) ?'dark':'light'
          localStorage.setItem('theme', t);      
        }
      }`}",
    },
    ...
  )
  ...
)`;

export default function () {
  return div(
    {class: "flex flex-col space-y-8 w-full"},
    DocumentationHeader({
      description: "Adding dark mode to your SSR app.",
      title: "SSR Application",
    }),
    DocumentationSection({
      title: "Installation",
      id: "installation",
      showIndex: true,
      sampleCode: [
        {
          description: "Update your pageTemplate.ts",
          page: "src/components/pageTemplate.ts",
          codeString: darkModeSetup,
          id: "update-index",
        },
        {
          description: "Create dark mode toggle component",
          codeString: darkModeToggleCopy,
          id: "dark-mode-copy",
          page: "src/components/DarkModeToggle.ts",
        },
      ],
    }),
    CodePreview({
      title: "Use your mode toggle",
      id: "dark-mode-preview",
      preview: DarkModeToggle(),
      codeString: darkModeToggleCopy,
    })
  );
}
