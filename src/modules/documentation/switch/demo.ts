import Label from "@/components/Label";
import {Switch} from "@/components/Switch";
import {div, escHtml} from "structr-composer";

export default function SwitchDemo() {
  return div(
    {class: "max-w-md h-full p-4", "x-data": "{value:false}"},
    div(
      {class: "flex items-center space-x-2"},
      Switch({value: "value"}),
      Label({}, escHtml`Airplane Mode`)
    )
  );
}
