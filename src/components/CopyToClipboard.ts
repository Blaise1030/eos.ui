import {HtmlEscapedString, div} from "structr-composer";

export default function CopyToClipboard(
  p: {content: string} & {[x: string]: string},
  ...children: HtmlEscapedString[]
) {
  return div(
    {
      ...p,
      class: p?.class || "",
      "x-data": `{        
        copyNotification: false,
        copyToClipboard() {            
            const text = window.document.getElementById('${p?.content}').innerText;
            navigator.clipboard.writeText(text);
            this.copyNotification = true;
            let that = this;
            setTimeout(function(){
                that.copyNotification = false;
            }, 3000);
        }
      }`,
    },
    ...children
  );
}
