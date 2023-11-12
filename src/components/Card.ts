import {HtmlEscapedString, div, h3, p} from "structr-composer";
import cn from "@/components/utils/cn";

export function Card(
  props: {[x: string]: string},
  ...children: HtmlEscapedString[]
) {
  return div(
    {
      ...props,
      class: cn([
        "rounded-xl border bg-card text-card-foreground shadow border-border",
        props.class,
      ]),
    },
    ...children
  );
}

export function CardHeader(
  props: {[x: string]: string},
  ...children: HtmlEscapedString[]
) {
  return div(
    {
      ...props,
      class: cn(["flex flex-col space-y-1.5 p-6", props.class]),
    },
    ...children
  );
}

export function CardTitle(
  props: {[x: string]: string},
  ...children: HtmlEscapedString[]
) {
  return h3(
    {
      ...props,
      class: cn(["font-semibold leading-none tracking-tight", props.class]),
    },
    ...children
  );
}

export function CardDescription(
  props: {[x: string]: string},
  ...children: HtmlEscapedString[]
) {
  return p(
    {
      ...props,
      class: cn(["text-sm text-muted-foreground", props.class]),
    },
    ...children
  );
}

export function CardContent(
  props: {[x: string]: string},
  ...children: HtmlEscapedString[]
) {
  return div(
    {
      ...props,
      class: cn(["p-6 pt-0", props.class]),
    },
    ...children
  );
}

export function CardFooter(
  props: {[x: string]: string},
  ...children: HtmlEscapedString[]
) {
  return div(
    {
      ...props,
      class: cn(["flex items-center p-6 pt-2", props.class]),
    },
    ...children
  );
}
