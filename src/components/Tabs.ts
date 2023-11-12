import {HtmlEscapedString, button, div} from "structr-composer";
import cn from "@/components/utils/cn";

export function Tab(
  c: {[x: string]: string} & {value: string},
  ...children: HtmlEscapedString[]
) {
  return div(
    {
      ...c,
      class: c.class,
      "x-data": `{
        setActiveTab(id){
          this.${c.value} = id;
        },
        isSelected(id){
          return this.${c.value} === id;
        }       
      }`,
    },
    ...children
  );
}

export function TabsList(
  a: {[x: string]: string},
  ...children: HtmlEscapedString[]
) {
  return div(
    {
      ...a,
      class: cn([
        "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
        a.class,
      ]),
    },
    ...children
  );
}

export function TabsTrigger(
  {id, ...a}: {[x: string]: string} & {id?: string},
  ...children: HtmlEscapedString[]
) {
  return button(
    {
      ...a,
      "x-bind:data-state": "isSelected(id) ? 'active': ''",
      "@click": "setActiveTab(id)",
      "x-data": `{id:'${id}'}`,
      type: "button",
      class: cn([
        "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
        a.class,
      ]),
    },
    ...children
  );
}

export function TabsContent(
  {id, ...a}: {[x: string]: string} & {id?: string},
  ...children: HtmlEscapedString[]
) {
  return div(
    {
      ...a,
      "x-show": "isSelected(id)",
      "x-data": `{id:'${id}'}`,
      type: "button",
      class: cn([
        "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        a.class,
      ]),
    },
    ...children
  );
}
