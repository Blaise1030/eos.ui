import Button from "@/components/Button";
import {escHtml} from "structr-composer";

export default function ButtonDemo() {
  return Button({variant: "ghost"}, escHtml`Ghost Button`);
}
