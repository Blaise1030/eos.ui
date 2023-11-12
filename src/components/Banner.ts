import {HtmlEscapedString, div} from "structr-composer";
import cn from "@/components/utils/cn";

export function Banner(
  p: {isFixed?: boolean; class?: string},
  ...children: HtmlEscapedString[]
) {
  return div(
    {
      "x-init": "setTimeout(()=>{ bannerVisible = true }, bannerVisibleAfter);",
      "x-data":
        "{bannerVisible: false,bannerVisibleAfter: 300, close(){this.bannerVisible = false}}",
      "x-show": "bannerVisible",
      "x-transition:enter": "transition ease-out duration-500",
      "x-transition:enter-start": "-translate-y-10",
      "x-transition:enter-end": "translate-y-0",
      "x-transition:leave": "transition ease-in duration-300",
      "x-transition:leave-start": "translate-y-0",
      "x-transition:leave-end": "-translate-y-10",
      class: cn([
        "top-0 left-0 w-full h-auto py-2 duration-300 ease-out bg-background border-b border-border sm:py-0 z-100 shadow-sm",
        p?.isFixed ? "fixed" : "absolute",
        p?.class || "",
      ]),
      "x-cloak": "",
    },
    div({class: "px-4"}, ...children)
  );
}
