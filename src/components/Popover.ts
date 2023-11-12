import {HtmlEscapedString, div} from "structr-composer";
import cn from "@/components/utils/cn";

export function Popover(
  p: {[x: string]: string},
  ...children: HtmlEscapedString[]
) {
  return div(
    {
      ...p,
      class: cn(["relative w-fit", p.class]),
      "x-data": `{ 
        hoverCardHovered: false,
        hoverCardDelay: 300,
        hoverCardLeaveDelay: 300,
        hoverCardTimout: null,
        hoverCardLeaveTimeout: null,
        hoverCardEnter () {
            clearTimeout(this.hoverCardLeaveTimeout);
            if(this.hoverCardHovered) return;
            clearTimeout(this.hoverCardTimout);
            this.hoverCardTimout = setTimeout(() => {
                this.hoverCardHovered = true;
            }, this.hoverCardDelay);
        },
        hoverCardLeave () {
            clearTimeout(this.hoverCardTimout);
            if(!this.hoverCardHovered) return;
            clearTimeout(this.hoverCardLeaveTimeout);
            this.hoverCardLeaveTimeout = setTimeout(() => {
                this.hoverCardHovered = false;
            }, this.hoverCardLeaveDelay);
        }
      }`,
    },
    ...children
  );
}

export function PopoverTrigger(
  p: {[x: string]: string},
  ...children: HtmlEscapedString[]
) {
  return div(
    {
      ...p,
      "@mouseleave": "hoverCardLeave()",
      "@mouseover": "hoverCardEnter()",
      class: cn(["cursor-pointer", p.class]),
    },
    div(...children)
  );
}

export function PopoverContent(
  p: {[x: string]: string},
  ...children: HtmlEscapedString[]
) {
  return div(
    {
      ...p,
      "x-show": "hoverCardHovered",
      "x-cloak": "",
      class: cn([
        "absolute top-0 w-[365px] max-w-lg mt-5 z-30 translate-y-3",
        p.class,
      ]),
    },
    div(
      {
        class: "border-border p-4 bg-background rounded-xl border shadow",
        "x-show": "hoverCardHovered",
        "x-transition": "",
      },
      ...children
    )
  );
}
