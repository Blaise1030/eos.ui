import {div, escHtml, p, span} from "structr-composer";
import {Card} from "@/components/Card";
import {clientSideSetup} from "./data";
import {
  DocumentationHeader,
  DocumentationSection,
} from "@/components/layout/DocumentationLayout";
import {serverSideSetup} from "./hono-data";

const COMPONENT_NAME = "Installation";
const COMPONENT_DESCRIPTION =
  "How to install dependencies and structure your app.";
const clientSideIcon = escHtml`<svg class="h-6 w-6" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="currentColor"><title>Vite</title><path d="m8.286 10.578.512-8.657a.306.306 0 0 1 .247-.282L17.377.006a.306.306 0 0 1 .353.385l-1.558 5.403a.306.306 0 0 0 .352.385l2.388-.46a.306.306 0 0 1 .332.438l-6.79 13.55-.123.19a.294.294 0 0 1-.252.14c-.177 0-.35-.152-.305-.369l1.095-5.301a.306.306 0 0 0-.388-.355l-1.433.435a.306.306 0 0 1-.389-.354l.69-3.375a.306.306 0 0 0-.37-.36l-2.32.536a.306.306 0 0 1-.374-.316zm14.976-7.926L17.284 3.74l-.544 1.887 2.077-.4a.8.8 0 0 1 .84.369.8.8 0 0 1 .034.783L12.9 19.93l-.013.025-.015.023-.122.19a.801.801 0 0 1-.672.37.826.826 0 0 1-.634-.302.8.8 0 0 1-.16-.67l1.029-4.981-1.12.34a.81.81 0 0 1-.86-.262.802.802 0 0 1-.165-.67l.63-3.08-2.027.468a.808.808 0 0 1-.768-.233.81.81 0 0 1-.217-.6l.389-6.57-7.44-1.33a.612.612 0 0 0-.64.906L11.58 23.691a.612.612 0 0 0 1.066-.004l11.26-20.135a.612.612 0 0 0-.644-.9z"></path></svg>`;
const serverSideIcon = escHtml`<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="256" height="330" viewBox="0 0 256 330"><path class="fill-muted-foreground" d="M134.129.029c.876-.113 1.65.108 2.319.662a1256.253 1256.253 0 0 1 69.573 93.427c16.094 24.231 29.788 49.851 41.082 76.862c18.037 48.108 8.65 89.963-28.16 125.564c-32.209 27.22-69.314 37.822-111.318 31.805c-50.208-10.237-84.332-39.28-102.373-87.133C.553 225.638-.993 209.736.614 193.51c2.676-27.93 9.302-54.877 19.878-80.838c4.407-10.592 10.15-20.31 17.228-29.154a381.88 381.88 0 0 1 16.565 21.203c2.44 2.55 4.98 4.98 7.62 7.289c20.155-40 44.23-77.325 72.225-111.981Z" opacity=".993"/><path class="fill-foreground" d="M129.49 53.7c24.314 28.2 46.29 58.238 65.93 90.114a187.318 187.318 0 0 1 15.24 33.13c8.338 32.804-.607 59.86-26.836 81.169c-25.367 17.85-53.196 23.15-83.488 15.902c-32.666-10.136-51.55-32.113-56.653-65.929c-1.238-10.662-.133-21.043 3.314-31.142a225.41 225.41 0 0 1 17.89-35.78l19.878-29.155a5509.508 5509.508 0 0 0 44.726-58.31Z"/></svg>`;
const INSTALLATION_METHODS = [
  {id: "vite", title: "Vite", icon: clientSideIcon},
  {id: "server", title: "Server Side (Hono)", icon: serverSideIcon},
];

export default function () {
  return div(
    {class: "flex space-x-8 min-h-screen", "x-data": "{tab: 'vite'}"},
    div(
      {class: "flex flex-col space-y-8 w-full md:min-w-3xl"},
      DocumentationHeader({
        description: COMPONENT_DESCRIPTION,
        title: COMPONENT_NAME,
      }),
      div(
        {class: "grid grid-cols-3 gap-4 border-b border-border pb-4"},
        ...INSTALLATION_METHODS.map(({icon, title, id}) =>
          Card(
            {
              class: "sm:p-6 p-4 hover:bg-muted cursor-pointer",
              "@click": `tab = '${id}'`,
            },
            div(
              {class: "flex flex-col items-center space-y-2 justify-center"},
              span(icon),
              p({class: "text-sm text-center"}, escHtml`${title}`)
            )
          )
        )
      ),
      div(
        {"x-show": `tab == 'vite'`},
        DocumentationSection({
          description: escHtml`Installation guide for your Vite Application`,
          sampleCode: clientSideSetup,
          id: "Vite installation",
          showIndex: true,
          title: "Vite",
        })
      ),
      div(
        {"x-show": `tab == 'server'`},
        DocumentationSection({
          description: escHtml`Installation guide for your server side application. Using Hono as example`,
          title: "Server Side Application",
          sampleCode: serverSideSetup,
          id: "SSR installation",
          showIndex: true,
        })
      )
    )
  );
}
