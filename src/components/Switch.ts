import {button, escHtml, input, span} from "structr-composer";
import cn from "@/components/utils/cn";
import Stack from "@/components/Stack";

export function Switch(c: {[x: string]: string} & {value: string}) {
  return Stack(
    {
      class: cn(["items-center justify-center space-x-2", c.class]),
      direction: "row",
    },
    input({
      ":checked": c?.value,
      type: "checkbox",
      name: "switch",
      class: "hidden",
    }),
    button(
      {
        class:
          "relative inline-flex h-6 py-0.5 ml-4 focus:outline-none rounded-full w-10",
        ":class": `${c.value} ? 'bg-primary' : 'bg-muted'`,
        "@click": `${c.value} = !${c.value}`,
      },
      span(
        {
          class:
            "w-5 h-5 duration-200 ease-in-out bg-background rounded-full shadow-md",
          ":class": `${c.value} ? 'translate-x-[18px]' : 'translate-x-0.5'`,
        },
        escHtml``
      )
    )
  );
}
