import Button from "@/components/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/Dialog";
import Input from "@/components/Input";
import Label from "@/components/Label";
import {div, escHtml} from "structr-composer";

export default function DialogDemo() {
  return div(
    {
      class: "h-full w-full flex items-center justify-center",
      "x-data": "{dialog:false}",
    },
    Dialog(
      {},
      DialogTrigger(
        {value: "dialog"},
        Button({variant: "outline"}, escHtml`Open`)
      ),
      DialogContent(
        {value: "dialog"},
        DialogHeader(
          {},
          DialogTitle({}, escHtml`Create an account`),
          DialogDescription(
            {},
            escHtml`Enter your email below to create your account.`
          )
        ),
        div(
          {class: "space-y-2 py-6"},
          div(
            {class: "space-y-1"},
            Label({}, escHtml`Email`),
            Input({placeholder: "m@example.com"})
          ),
          div(
            {class: "space-y-1"},
            Label({}, escHtml`Password`),
            Input({placeholder: "P@ssword"})
          )
        ),
        DialogFooter({}, Button({}, escHtml`Submit`))
      )
    )
  );
}
