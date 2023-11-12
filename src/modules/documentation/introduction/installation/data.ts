import viteConfigFile from "@/modules/documentation/introduction/installation/example/vite-config-sample?raw";
import rawFile from "@/modules/documentation/introduction/installation/example/index.html?raw";
import mainFile from "@/modules/documentation/introduction/installation/example/main?raw";
import buttonFile from "@/components/Button?raw";
import utilFile from "@/components/utils/cn?raw";
const CHOOSE_PROJECT_TYPE = `Project name: your-project
Select a framework: Vanilla
Select a variant: TypeScript
cd your-project`;

const PROJECT_FOLDER_STRUCTURE = `.
├── node_modules
├── index.html
├── package-lock.json
├── package.json
├── vite.config.ts
├── public
│   └── vite.svg
├── src
│   ├── components
│   │   ├── Button.ts
│   │   └── utils
│   │       └── cn.ts
│   ├── main.ts
│   ├── typescript.svg
│   └── vite-env.d.ts
└── tsconfig.json`;

const PROJECT_TS_CONFIG = `
// Add the following 2 lines in compiler options
{
  ...
  "compilerOptions": {
    ...
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
    ...
  },
  ...  
}
`;

export const clientSideSetup = [
  {
    id: "install-vite",
    description: "Start a Vite project",
    codeString: `npm create vite@latest`,
  },
  {
    id: "choose-vite-project-type",
    description: "Instantiate Vite project with the following settings",
    codeString: CHOOSE_PROJECT_TYPE,
  },
  {
    id: "install-dependencies",
    description: "Install Dependencies",
    codeString: `npm install structr-composer class-variance-authority tailwind-merge clsx path`,
  },
  {
    id: "add-vite-config",
    description: "Add vite.config.ts",
    page: "vite.config.ts",
    codeString: viteConfigFile,
  },
  {
    id: "add-ts-config",
    description: "Update tsconfig.json",
    page: "tsconfig.json",
    codeString: PROJECT_TS_CONFIG,
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
    description: "Update index.html",
    page: "index.html",
    codeString: rawFile,
  },
  {
    id: "update-main.ts",
    description: "Update main.ts and you are set !",
    page: "src/main.ts",
    codeString: mainFile,
  },
];
