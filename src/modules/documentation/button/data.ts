import DefaultButton from "@/modules/documentation/button/example/DefaultButton";
import DefaultButtonRaw from "@/modules/documentation/button/example/defaultButton?raw";
import SecondaryButton from "@/modules/documentation/button/example/SecondaryButton";
import SecondaryButtonRaw from "@/modules/documentation/button/example/secondaryButton?raw";
import DestructiveButton from "@/modules/documentation/button/example/DestructiveButton";
import destructiveButtonRaw from "@/modules/documentation/button/example/DestructiveButton?raw";
import OutlineButton from "@/modules/documentation/button/example/OutlineButton";
import OutlineButtonRaw from "@/modules/documentation/button/example/OutlineButton?raw";
import GhostButton from "@/modules/documentation/button/example/GhostButton";
import GhostButtonRaw from "@/modules/documentation/button/example/GhostButton?raw";
import LinkButton from "@/modules/documentation/button/example/LinkButton";
import LinkButtonRaw from "@/modules/documentation/button/example/LinkButton?raw";
import IconButtonRaw from "@/components/DarkModeToggle?raw";
import DarkModeToggle from "@/components/DarkModeToggle";

export const buttons = [
  {
    title: "Default",
    id: "default",
    preview: DefaultButton(),
    code: DefaultButtonRaw,
  },
  {
    title: "Secondary",
    id: "secondary",
    preview: SecondaryButton(),
    code: SecondaryButtonRaw,
  },
  {
    title: "Destructive",
    id: "destructive",
    preview: DestructiveButton(),
    code: destructiveButtonRaw,
  },
  {
    title: "Outline",
    id: "outline",
    preview: OutlineButton(),
    code: OutlineButtonRaw,
  },
  {
    title: "Ghost",
    id: "ghost",
    preview: GhostButton(),
    code: GhostButtonRaw,
  },
  {
    title: "Link",
    id: "link",
    preview: LinkButton(),
    code: LinkButtonRaw,
  },
  {
    title: "Icon",
    id: "icon",
    preview: DarkModeToggle(),
    code: IconButtonRaw,
  },
];
