import {HtmlEscapedString, div} from "structr-composer";
import cn from "@/components/utils/cn";

export default function HoverCard({}, ...children: HtmlEscapedString[]) {
  return div(
    {
      "@mouseleave": "hoverCardLeave()",
      "@mouseover": "hoverCardEnter()",
      class: "relative w-fit",
      "x-data": `{ 
        hoverCardHovered: false,
        hoverCardDelay: 600,
        hoverCardLeaveDelay: 500,
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

export function HoverCardTrigger(
  p: {[x: string]: string},
  ...children: HtmlEscapedString[]
) {
  return div({...p, class: cn(["w-fit", p?.class ?? ""])}, ...children);
}

export function HoverCardContent(
  p: {[x: string]: string},
  ...children: HtmlEscapedString[]
) {
  return div(
    {
      ...p,
      "x-show": "hoverCardHovered",
      "x-cloak": "",
      class: cn([
        "absolute top-0 w-[365px] max-w-lg mt-5 z-30 translate-y-3 left-0",
        p?.class ?? "",
      ]),
    },
    div(
      {
        "x-show": "hoverCardHovered",
        "x-transition": "",
        class:
          "w-[full] h-auto bg-background space-x-3 p-5 flex items-start rounded-md shadow-sm border border-border",
      },
      ...children
    )
  );
}
