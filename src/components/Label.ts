import {cva} from "class-variance-authority";
import {HtmlEscapedString, label} from "structr-composer";
import cn from "@/components/utils/cn";

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);

export default function Label(
  c: {[x: string]: string},
  ...children: HtmlEscapedString[]
) {
  return label({...c, class: cn([labelVariants(), c.class])}, ...children);
}
