import {div, escHtml, p, span} from "structr-composer";
import {Card} from "@/components/Card";
import {clientSideSetup} from "./data";
import {
  DocumentationHeader,
  DocumentationSection,
} from "@/components/layout/DocumentationLayout";

const COMPONENT_NAME = "Installation";
const COMPONENT_DESCRIPTION =
  "How to install dependencies and structure your app.";
const clientSideIcon = escHtml`<svg class="w-5 h-5" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 3.25C1 3.11193 1.11193 3 1.25 3H13.75C13.8881 3 14 3.11193 14 3.25V10.75C14 10.8881 13.8881 11 13.75 11H1.25C1.11193 11 1 10.8881 1 10.75V3.25ZM1.25 2C0.559643 2 0 2.55964 0 3.25V10.75C0 11.4404 0.559644 12 1.25 12H5.07341L4.82991 13.2986C4.76645 13.6371 5.02612 13.95 5.37049 13.95H9.62951C9.97389 13.95 10.2336 13.6371 10.1701 13.2986L9.92659 12H13.75C14.4404 12 15 11.4404 15 10.75V3.25C15 2.55964 14.4404 2 13.75 2H1.25ZM9.01091 12H5.98909L5.79222 13.05H9.20778L9.01091 12Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>`;
const serverSideIcon = escHtml`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" /></svg>`;
const INSTALLATION_METHODS = [
  {id: "client", title: "Client Side", icon: clientSideIcon},
  {id: "server", title: "Server Side", icon: serverSideIcon},
];

export default function () {
  return div(
    {class: "flex space-x-8", "x-data": "{tab: 'client'}"},
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
              class: "p-6 hover:bg-muted cursor-pointer",
              "@click": `tab = '${id}'`,
            },
            div(
              {class: "flex flex-col items-center space-y-2"},
              span(icon),
              p({class: "text-sm"}, escHtml`${title}`)
            )
          )
        )
      ),
      div(
        {"x-show": `tab == 'client'`},
        DocumentationSection({
          description: escHtml`Installation guide for your Single Page Application (SPA).`,
          title: "Client Side Application Installation",
          sampleCode: clientSideSetup,
          id: "SPA installation",
          showIndex: true,
        })
      ),
      div(
        {"x-show": `tab == 'server'`},
        DocumentationSection({
          description: escHtml`Installation guide for your server side application.`,
          title: "Server Side Application Installation",
          id: "SSR installation",
          showIndex: true,
          sampleCode: [],
        })
      )
    )
  );
}
