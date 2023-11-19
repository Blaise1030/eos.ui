import {Textarea} from "@/components/Textarea";
import Label from "@/components/Label";
import Input from "@/components/Input";
import {div, escHtml} from "structr-composer";

export default function InputsDemo() {
  return div(
    {class: "max-w-lg space-y-4 flex flex-col w-full"},
    div(
      {class: "flex space-y-2 flex-col"},
      Label({}, escHtml`Email`),
      Input({placeholder: "a@example.com"})
    ),
    div(
      {class: "flex space-y-2 flex-col"},
      Label({}, escHtml`Textarea`),
      Textarea({placeholder: "Why do you have so much complains..."})
    )
  );
}
