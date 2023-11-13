import {HtmlEscapedString, div, escHtml, h3, p} from "structr-composer";
import Button from "@/components/Button";
import cn from "@/components/utils/cn";

export function Dialog(
  d: {[x: string]: string},
  ...children: HtmlEscapedString[]
) {
  return div(d, ...children);
}

export function DialogTrigger(
  d: {[x: string]: string} & {value: string},
  ...children: HtmlEscapedString[]
) {
  return div(
    {...d, "@click": `${d.value} = true`, class: "w-min"},
    ...children
  );
}

export function DialogOverlay(d: {[x: string]: string} & {value: string}) {
  return div(
    {
      ...d,
      "x-bind:data-state": `${d.value} ? 'open': 'closed'`,
      "x-transition.opacity": "",
      "@click": `${d.value} = false`,
      "x-show": `${d.value}`,
      class: cn([
        "fixed inset-0 z-[99998] bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        d.class,
      ]),
    },
    escHtml``
  );
}

export function DialogContent(
  d: {[x: string]: string} & {value: string},
  ...children: HtmlEscapedString[]
) {
  return escHtml`
  <template x-teleport="body">
    ${DialogOverlay({value: d.value})}
  </template>
  <template x-teleport="body">
    ${div(
      {
        ...d,
        "x-bind:data-state": `${d.value} ? 'open': 'closed'`,
        "x-trap.inert.noscroll": `${d.value}`,
        "x-show": `${d.value}`,
        class: cn([
          "fixed left-[50%] top-[50%] z-[99999] grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full border-border",
          d.class,
        ]),
      },
      div(
        {
          class: "relative w-full h-full",
          "x-show": `${d.value}`,
        },
        Button(
          {
            class: "absolute right-0 top-0 h-5 w-5 z-10 text-muted-foreground",
            "@click": `${d.value}=false`,
            variant: "outline",
            size: "icon",
          },
          closeButton
        ),
        ...children
      )
    )}
  </template>
  `;
}

export function DialogHeader(
  d: {[x: string]: string},
  ...children: HtmlEscapedString[]
) {
  return div(
    {
      ...d,
      class: cn([
        "flex flex-col space-y-1.5 text-center sm:text-left",
        d.class,
      ]),
    },
    ...children
  );
}

export function DialogFooter(
  d: {[x: string]: string},
  ...children: HtmlEscapedString[]
) {
  return div(
    {
      ...d,
      class: cn([
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
        d.class,
      ]),
    },
    ...children
  );
}

export function DialogTitle(
  d: {[x: string]: string},
  ...children: HtmlEscapedString[]
) {
  return h3(
    {
      ...d,
      class: cn(["text-lg font-semibold leading-none tracking-tight", d.class]),
    },
    ...children
  );
}

export function DialogDescription(
  d: {[x: string]: string},
  ...children: HtmlEscapedString[]
) {
  return p(
    {
      ...d,
      class: cn(["text-sm text-muted-foreground", d.class]),
    },
    ...children
  );
}

const closeButton = escHtml`<svg class="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" /></svg>`;
