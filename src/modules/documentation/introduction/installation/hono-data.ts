import rawFile from "@/modules/documentation/introduction/installation/example/hono-template?raw";
import buttonFile from "@/components/Button?raw";
import utilFile from "@/components/utils/cn?raw";
const CHOOSE_PROJECT_TYPE = `Which template do you want to use? > nodejs
cd hono-example`;

const PROJECT_FOLDER_STRUCTURE = `.
├── README.md
├── package-lock.json
├── package.json
├── src
│   ├── components
│   │   ├── Button.ts
│   │   ├── pageTemplate.ts
│   │   └── utils
│   │       └── cn.ts
│   └── index.ts
└── tsconfig.json`;

const indexTs = `
import {serve} from "@hono/node-server";
import {Hono} from "hono";
import {pageTemplate} from "./components/pageTemplate";
import Button from "./components/Button";
import {div, escHtml} from "structr-composer";

const app = new Hono();
app.get("/", (c) =>
  c.html(
    pageTemplate(
      div(
        {class: "flex items-center justify-center h-screen w-screen"},
        Button({}, ${"escHtml`Your Button`"})
      )
    )
  )
);

serve(app);

`;

export const serverSideSetup = [
  {
    id: "install-hono",
    description: "Start a Hono project",
    codeString: `npm create hono@latest hono-example`,
  },
  {
    id: "choose-hono-project-type",
    description: "Instantiate Hono project with the following settings",
    codeString: CHOOSE_PROJECT_TYPE,
  },
  {
    id: "install-dependencies",
    description: "Install Dependencies",
    codeString: `npm install structr-composer class-variance-authority tailwind-merge clsx path`,
  },
  {
    id: "add-utils",
    description: "Add utility file",
    page: "src/components/utils/cn.ts",
    codeString: utilFile,
  },
  {
    id: "add-button",
    description: "Add Button.ts file",
    page: "src/components/Button.ts",
    codeString: buttonFile,
  },
  {
    id: "create-folder",
    description: "You should have this folder structure by now",
    codeString: PROJECT_FOLDER_STRUCTURE,
  },
  {
    id: "update-index.html",
    description: "Create pageTemplate.ts",
    page: "src/components/pageTemplate.ts",
    codeString: rawFile,
  },
  {
    id: "update-index.ts",
    description: "Update index.ts and run the hono server !",
    page: "src/index.ts",
    codeString: indexTs,
  },
];
