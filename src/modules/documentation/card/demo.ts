import Button from "@/components/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/Card";
import Input from "@/components/Input";
import Label from "@/components/Label";
import {div, escHtml} from "structr-composer";

export default function CardDemo() {
  return div(
    {class: "max-w-md h-full p-4"},
    Card(
      {},
      CardHeader(
        {},
        CardTitle({}, escHtml`Create an account`),
        CardDescription(
          {},
          escHtml`Enter your email below to create your account.`
        )
      ),
      CardContent(
        {class: "space-y-4"},
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
      CardFooter({}, Button({variant: "default"}, escHtml`Submit`))
    )
  );
}
