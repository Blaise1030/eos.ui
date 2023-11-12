import {code, escHtml} from "structr-composer";

export default function Code(codeString: string) {
  return code(
    {class: "bg-muted text-sm p-[1px] px-1 rounded"},
    escHtml`${codeString}`
  );
}
