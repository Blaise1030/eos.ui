import {HtmlEscapedString, div} from "structr-composer";
import cn from "@/components/utils/cn";

export default function Stack(
  props: {[x: string]: string} & {direction: "column" | "row"},
  ...children: HtmlEscapedString[]
) {
  return div(
    {
      ...props,
      class: cn([
        "flex",
        {column: "flex-col", row: "flex-row"}[props?.direction],
        props?.class,
      ]),
    },
    ...children
  );
}
