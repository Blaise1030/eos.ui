import CopyToClipboard from "@/components/CopyToClipboard";
import Button from "@/components/Button";
import Label from "@/components/Label";
import {
  HtmlEscapedString,
  div,
  p,
  escHtml,
  aside,
  h2,
  h3,
  pre,
  br,
  a,
} from "structr-composer";
import Code from "../CodeHighlight";

export type TDocumentationLink = {
  children?: TDocumentationLink[];
  title: string;
  id: string;
};

export const router = [
  {
    title: "Getting Started",
    children: [
      {
        path: "introduction",
        title: "Introduction",
      },
      {
        path: "installation",
        title: "Installation",
      },
    ],
  },
  {
    title: "Dark Mode",
    children: [
      {
        path: "dark-mode-vite",
        title: "Vite",
      },
      {
        path: "dark-mode-hono",
        title: "SSR",
      },
    ],
  },
  {
    title: "Components",
    children: [
      {
        path: "accordian",
        title: "Accordian",
      },
      {
        path: "badge",
        title: "Badge",
      },
      {
        path: "banner",
        title: "Banner",
      },
      {
        path: "button",
        title: "Button",
      },
      {
        path: "card",
        title: "Card",
      },
      {
        path: "dialog",
        title: "Dialog",
      },
      {
        path: "more",
        title: "More...",
      },
    ],
  },
];

function DocumentationSidebar() {
  return aside(
    {class: "sticky top-[72px] min-w-[200px] h-screen lg:flex hidden"},
    div(
      {class: "px-4 xl:pl-0 pl-4 h-full overflow-y-auto"},
      ...(router || [])?.map(({children, title}) =>
        div(
          {class: "pb-2"},
          Label({class: "font-medium"}, escHtml`${title}`),
          div(
            {class: "flex flex-col space-y-2 py-2"},
            ...(children || []).map(({path, title}) =>
              a(
                {
                  ":class": `document?.location?.hash !== '#/docs/${path}'? 'text-muted-foreground': 'font-medium' `,
                  class:
                    "p-0 justify-start h-fit font-normal text-sm hover:underline",
                  href: `/#/docs/${path}`,
                },
                escHtml`${title}`
              )
            )
          )
        )
      )
    )
  );
}

export function DocumentationLayout() {
  return div(
    {class: "w-full animate-fadeIn", "un-cloak": ""},
    div(
      {class: "flex m-auto p-4 max-w-7xl"},
      DocumentationSidebar(),
      div(
        {class: "pb-16 w-full relative max-w-3xl"},
        escHtml`<router-outlet></router-outlet>`
      )
    )
  );
}

export function DocumentationHeader({
  description,
  title,
}: {
  description: string;
  title: string;
}) {
  return div(
    {class: "flex flex-col"},
    div(
      {class: "pb-2 pt-2.5 flex space-x-2 font-medium text-sm"},
      p({class: "text-muted-foreground"}, escHtml`Docs`),
      div(escHtml`/`),
      p(escHtml`${title}`)
    ),
    h2(
      {class: "w-full py-2 text-3xl font-bold border-border"},
      escHtml`${title}`
    ),
    p({class: "text-muted-foreground text-lg"}, escHtml`${description}`)
  );
}

export function DocumentationSection({
  showIndex = false,
  description,
  sampleCode,
  title,
  id,
}: {
  sampleCode?: {
    codeString: string;
    id: string;
    description?: string;
    page?: string;
  }[];
  description?: HtmlEscapedString;
  showIndex?: boolean;
  title: string;
  id: string;
}) {
  return div(
    {class: "relative"},
    div({id, class: "absolute -top-16"}),
    div(
      {class: "flex flex-col mb-4 space-y-4"},
      h3(
        {class: "w-full border-b py-2 text-2xl font-bold border-border"},
        escHtml`${title}`
      ),
      description ? p({class: "text-muted-foreground"}, description) : escHtml``
    ),
    !sampleCode
      ? escHtml``
      : div(
          {class: "flex flex-col space-y-4"},
          ...(sampleCode || [])?.map(({id, codeString, description, page}, i) =>
            DocumentationCodearea({
              ...(showIndex ? {index: i + 1} : {}),
              description,
              codeString,
              page,
              id,
            })
          )
        )
  );
}

export function DocumentationCodearea({
  codeString,
  description,
  page,
  index,
  id,
}: {
  codeString: string;
  description?: string;
  page?: string;
  index?: number;
  id: string;
}) {
  const copyIcon = escHtml`<svg width="12" height="12" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 2V1H10V2H5ZM4.75 0C4.33579 0 4 0.335786 4 0.75V1H3.5C2.67157 1 2 1.67157 2 2.5V12.5C2 13.3284 2.67157 14 3.5 14H7V13H3.5C3.22386 13 3 12.7761 3 12.5V2.5C3 2.22386 3.22386 2 3.5 2H4V2.25C4 2.66421 4.33579 3 4.75 3H10.25C10.6642 3 11 2.66421 11 2.25V2H11.5C11.7761 2 12 2.22386 12 2.5V7H13V2.5C13 1.67157 12.3284 1 11.5 1H11V0.75C11 0.335786 10.6642 0 10.25 0H4.75ZM9 8.5C9 8.77614 8.77614 9 8.5 9C8.22386 9 8 8.77614 8 8.5C8 8.22386 8.22386 8 8.5 8C8.77614 8 9 8.22386 9 8.5ZM10.5 9C10.7761 9 11 8.77614 11 8.5C11 8.22386 10.7761 8 10.5 8C10.2239 8 10 8.22386 10 8.5C10 8.77614 10.2239 9 10.5 9ZM13 8.5C13 8.77614 12.7761 9 12.5 9C12.2239 9 12 8.77614 12 8.5C12 8.22386 12.2239 8 12.5 8C12.7761 8 13 8.22386 13 8.5ZM14.5 9C14.7761 9 15 8.77614 15 8.5C15 8.22386 14.7761 8 14.5 8C14.2239 8 14 8.22386 14 8.5C14 8.77614 14.2239 9 14.5 9ZM15 10.5C15 10.7761 14.7761 11 14.5 11C14.2239 11 14 10.7761 14 10.5C14 10.2239 14.2239 10 14.5 10C14.7761 10 15 10.2239 15 10.5ZM14.5 13C14.7761 13 15 12.7761 15 12.5C15 12.2239 14.7761 12 14.5 12C14.2239 12 14 12.2239 14 12.5C14 12.7761 14.2239 13 14.5 13ZM14.5 15C14.7761 15 15 14.7761 15 14.5C15 14.2239 14.7761 14 14.5 14C14.2239 14 14 14.2239 14 14.5C14 14.7761 14.2239 15 14.5 15ZM8.5 11C8.77614 11 9 10.7761 9 10.5C9 10.2239 8.77614 10 8.5 10C8.22386 10 8 10.2239 8 10.5C8 10.7761 8.22386 11 8.5 11ZM9 12.5C9 12.7761 8.77614 13 8.5 13C8.22386 13 8 12.7761 8 12.5C8 12.2239 8.22386 12 8.5 12C8.77614 12 9 12.2239 9 12.5ZM8.5 15C8.77614 15 9 14.7761 9 14.5C9 14.2239 8.77614 14 8.5 14C8.22386 14 8 14.2239 8 14.5C8 14.7761 8.22386 15 8.5 15ZM11 14.5C11 14.7761 10.7761 15 10.5 15C10.2239 15 10 14.7761 10 14.5C10 14.2239 10.2239 14 10.5 14C10.7761 14 11 14.2239 11 14.5ZM12.5 15C12.7761 15 13 14.7761 13 14.5C13 14.2239 12.7761 14 12.5 14C12.2239 14 12 14.2239 12 14.5C12 14.7761 12.2239 15 12.5 15Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>`;
  const checkIcon = escHtml`<svg width="12" height="12" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>`;
  const codeAreaStyle =
    "min-h-auto border border-border rounded-lg bg-black relative max-w-3xl overflow-auto hide-scrollbar";
  const preAreaStyle =
    "text-sm text-white max-h-[300px] h-full overflow-auto p-4 hide-scrollbar w-full";
  const indexStyle =
    "bg-muted w-6 h-6 flex items-center justify-center rounded-full font-mono text-sm mt-0.5";

  return div(
    !description
      ? escHtml``
      : !index
      ? p({class: "font-semibold text-lg pb-4 pt-3"}, escHtml`${description}`)
      : div(
          {class: "flex flex-row items-start space-x-4 pb-4 pt-3"},
          p({class: indexStyle}, escHtml`${index}`),
          p({class: "font-semibold text-lg"}, escHtml`${description}`)
        ),
    div(
      {class: codeAreaStyle},
      !page
        ? escHtml``
        : div(
            div({class: "absolute top-2 left-2.5"}, Code(escHtml`${page}`)),
            br()
          ),
      CopyToClipboard(
        {content: id},
        pre({class: preAreaStyle, id}, escHtml`${codeString}`),
        Button(
          {
            class: "w-7 h-7 absolute right-3 top-3",
            "aria-label": "Copy to Clipboard",
            "@click": "copyToClipboard()",
            variant: "outline",
            size: "icon",
          },
          div({"x-show": "!copyNotification"}, copyIcon),
          div({"x-show": "copyNotification"}, checkIcon)
        )
      )
    )
  );
}

export function DocumentationTableOfContents({
  documentationList,
}: {
  documentationList: TDocumentationLink[];
}) {
  return aside(
    {class: "sticky top-[72px] right-0 h-screen xl:block hidden min-w-[250px]"},
    div(
      {class: "h-full overflow-y-auto px-4"},
      Label({}, escHtml`On This Page`),
      div(
        {class: "flex flex-col w-fit space-y-1 py-2"},
        ...(documentationList || [])?.map((doc) => {
          return DocumentationLink({
            children: doc?.children,
            title: doc?.title,
            id: doc?.id,
          });
        })
      )
    )
  );
}

export const DocumentationLink = ({
  children,
  title,
  id,
}: TDocumentationLink): HtmlEscapedString => {
  return div(
    Button(
      {
        "@click": `document.getElementById('${id}').scrollIntoView({ behavior: 'smooth'})`,
        class: "p-0 text-muted-foreground justify-start h-fit",
        variant: "link",
      },
      escHtml`${title}`
    ),
    children
      ? div(
          {class: "flex flex-col space-y-1 pt-1 pl-4"},
          ...(children || [])?.map(({title, id, children}) =>
            DocumentationLink({title, id, children})
          )
        )
      : div({})
  );
};
