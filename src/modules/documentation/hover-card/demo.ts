import HoverCard, {
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/HoverCard";
import {div, escHtml, img, p} from "structr-composer";
import Button from "@/components/Button";

export default function HoverCardDemo() {
  return div(
    {class: "max-w-md h-full p-4"},
    HoverCard(
      {},
      HoverCardTrigger(
        {},
        Button({variant: "link", class: "underline"}, escHtml`@alpinejs`)
      ),
      HoverCardContent(
        {
          class: "left-[50%] -translate-x-[50%] flex flex-row rounded-xl",
        },
        img({
          src: "https://alpinejs.dev/alpine_long.svg",
          class: "h-8 w-8 border rounded-full bg-white",
          alt: "alpine",
        }),
        div(
          {class: "flex space-y-1 flex-col"},
          p({class: "text-sm"}, escHtml`@alpinejs`),
          p(
            {class: "text-muted-foreground"},
            escHtml`Your new, lightweight, JavaScript framework.`
          )
        )
      )
    )
  );
}
