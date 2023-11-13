import {HtmlEscapedString, button, div, escHtml, span} from "structr-composer";
import cn from "./utils/cn";

export function DropdownMenu({}, ...children: HtmlEscapedString[]) {
  return div(
    {"x-data": "{dropdownOpen: false}", class: "relative w-fit"},
    ...children
  );
}

export function DropdownMenuTrigger(
  props: {[x: string]: string},
  ...children: HtmlEscapedString[]
) {
  return div(
    {
      ...props,
      "@click": "dropdownOpen=true",
      class: cn([props?.class]),
    },
    ...children
  );
}

export function DropdownMenuTitle(
  p: {[x: string]: string},
  ...children: HtmlEscapedString[]
) {
  return div(
    {...p, class: cn(["px-2 py-1.5 text-sm font-semibold", p?.class])},
    ...children
  );
}

export function DropdownMenuContent(
  p: {[x: string]: string},
  ...children: HtmlEscapedString[]
) {
  return div(
    {
      ...p,
      "x-show": "dropdownOpen",
      "@click.away": "dropdownOpen=false",
      "x-transition:enter": "ease-out duration-200",
      "x-transition:enter-start": "-translate-y-2",
      "x-transition:enter-end": "translate-y-0",
      class: cn(["absolute top-0 z-50 w-56 mt-10 left-0", p?.class]),
      "x-cloak": "",
    },
    div(
      {
        class:
          "p-1 mt-1 bg-background border rounded-md shadow-sm border-border text-foreground",
      },
      ...children
    )
  );
}

export function DropdownMenuDivider() {
  return div({class: "w-full h-0.5 bg-muted w-full my-1"});
}

export function DropdownMenuItem(
  props: {[x: string]: string},
  ...children: HtmlEscapedString[]
) {
  return button(
    {
      ...props,
      class: cn([
        "relative flex cursor-default select-none hover:bg-muted items-center rounded px-2 py-1.5 text-sm outline-none transition-colors disabled:pointer-events-none disabled:opacity-50 w-full",
        props.class,
      ]),
    },
    ...children
  );
}

export function DropdownMenuItemIcon(
  p: {[x: string]: string},
  ...children: HtmlEscapedString[]
) {
  return span(
    {...p, class: cn(["ml-auto text-xs tracking-widest opacity-60", p?.class])},
    ...children
  );
}

export function DropdownSubGroup(
  p: {[x: string]: string},
  ...children: HtmlEscapedString[]
) {
  return div({...p, class: cn(["relative group", p?.class])}, ...children);
}

export function DropdownSubGroupTrigger(
  p: {[x: string]: string},
  ...children: HtmlEscapedString[]
) {
  return button(
    {
      ...p,
      class: cn([
        "relative flex cursor-default select-none hover:bg-muted items-center rounded px-2 py-1.5 text-sm outline-none transition-colors disabled:pointer-events-none disabled:opacity-50 w-full",
        p?.class,
      ]),
    },
    ...children,
    DropdownMenuItemIcon({}, chevronRight)
  );
}

export function DropdownSubGroupContent(
  p: {[x: string]: string},
  ...children: HtmlEscapedString[]
) {
  return div(
    {
      ...p,
      class: cn([
        "absolute top-0 right-0 invisible mr-1 duration-200 ease-out translate-x-full opacity-0 group-hover:mr-0 group-hover:visible group-hover:opacity-100",
        p?.class,
      ]),
    },
    div(
      {
        class:
          "p-1 ml-2 bg-background border rounded-md shadow-sm border-border text-foreground w-40",
      },
      ...children
    )
  );
}

const chevronRight = escHtml`<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>`;
