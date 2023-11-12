import {HtmlEscapedString, button, div, escHtml, span} from "structr-composer";

export function Accordian(
  {value}: {value: string},
  ...children: HtmlEscapedString[]
) {
  return div(
    {
      "x-data": `{
        setActiveAccordion(id) { this.${value} = (this.${value} == id) ? '' : id},
        isActive(id) { return this.${value} == id},
      }`,
      class:
        "relative w-full mx-auto overflow-hidden text-sm font-normal bg-background",
    },
    ...children
  );
}

export function AccordianItem(
  {id}: {id: string},
  ...children: HtmlEscapedString[]
) {
  return div(
    {
      "x-data": `{ id: ${id} }`,
      class: "cursor-pointer group border-b-1 border-border",
    },
    ...children
  );
}

export function AccordianTrigger(
  first: HtmlEscapedString,
  ...rest: HtmlEscapedString[]
) {
  return button(
    {
      "@click": "setActiveAccordion(id)",
      class:
        "flex items-center justify-between w-full p-4 text-left select-none group-hover:underline",
      ":id": "id",
    },
    span(first, ...rest),
    escHtml`<svg class="w-4 h-4 duration-200 ease-out" :class="{ 'rotate-180': isActive(id) }" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>`
  );
}

export function AccordianContent(
  first: HtmlEscapedString,
  ...children: HtmlEscapedString[]
) {
  return div(
    {"x-show": "isActive(id)", "x-collapse": "", "x-cloak": ""},
    div({class: "p-4 pt-0 opacity-70"}, first, ...children)
  );
}
