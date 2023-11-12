import Badge from "@/components/Badge";
import {escHtml} from "structr-composer";

export default function BadgeDemo() {
  return Badge({}, escHtml`Badge`);
}
