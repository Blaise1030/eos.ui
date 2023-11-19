import Button from "@/components/Button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTitle,
  DropdownMenuDivider,
  DropdownSubGroup,
  DropdownSubGroupTrigger,
  DropdownSubGroupContent,
  DropdownMenuItemIcon,
} from "@/components/DropdownMenu";
import {div, escHtml} from "structr-composer";

export default function DropdownMenuDemo(c?: {[x: string]: string}) {
  return div(
    {class: "mt-0 h-[300px]"},
    DropdownMenu(
      {},
      DropdownMenuTrigger(
        {},
        Button(
          {
            ...c,
            "aria-label": "Dark Mode Toggle",
            variant: "outline",
          },
          escHtml`Click Me`
        )
      ),
      DropdownMenuContent(
        {class: "right-0 left-auto w-40"},
        DropdownMenuTitle({}, escHtml`Menu`),
        DropdownMenuDivider(),
        DropdownMenuItem(
          {"@click": "dropdownOpen=false;"},
          escHtml`Light`,
          DropdownMenuItemIcon({}, escHtml`⌘`)
        ),
        DropdownMenuItem({"@click": "dropdownOpen=false;"}, escHtml`Dark`),
        DropdownMenuItem({"@click": "dropdownOpen=false;"}, escHtml`System`),
        DropdownMenuDivider(),
        DropdownSubGroup(
          {},
          DropdownSubGroupTrigger({}, escHtml`More`),
          DropdownSubGroupContent(
            {},
            DropdownMenuItem(
              {"@click": "dropdownOpen=false;", disabled: ""},
              escHtml`System`
            ),
            DropdownMenuItem(
              {"@click": "dropdownOpen=false;"},
              escHtml`System`
            ),
            DropdownMenuItem({"@click": "dropdownOpen=false;"}, escHtml`System`)
          )
        )
      )
    )
  );
}
