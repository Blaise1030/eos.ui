import {HtmlEscapedString, div} from "structr-composer";
import cn from "@/components/utils/cn";

export function Popover(
  p: {[x: string]: string},
  ...children: HtmlEscapedString[]
) {
  return div(
    {
      ...p,
      class: cn(["relative", p.class]),
      "x-data": `{
        popoverOpen: false,
        popoverArrow: true,
        popoverPosition: 'bottom',
        popoverHeight: 0,
        popoverOffset: 8,
        popoverHeightCalculate() {
            this.$refs.popover.classList.add('invisible'); 
            this.popoverOpen=true; 
            let that=this;
            $nextTick(function(){ 
                that.popoverHeight = that.$refs.popover.offsetHeight;
                that.popoverOpen=false; 
                that.$refs.popover.classList.remove('invisible');
                that.$refs.popoverInner.setAttribute('x-transition', '');
                that.popoverPositionCalculate();
            });
        },
        popoverPositionCalculate(){
            if(window.innerHeight < (this.$refs.popoverButton.getBoundingClientRect().top + this.$refs.popoverButton.offsetHeight + this.popoverOffset + this.popoverHeight)){
                this.popoverPosition = 'top';
            } else {
                this.popoverPosition = 'bottom';
            }
        }
      }`,
    },
    ...children
  );
}

export function PopoverTrigger(
  p: {[x: string]: string},
  ...children: HtmlEscapedString[]
) {
  return div(
    {
      ...p,
      "@click": "popoverOpen=!popoverOpen",
      "x-ref": "popoverButton",
      class: cn(["cursor-pointer", p.class]),
    },
    div(...children)
  );
}

export function PopoverContent(
  p: {[x: string]: string},
  ...children: HtmlEscapedString[]
) {
  return div(
    {
      ...p,
      "x-ref": "popover",
      "x-show": "popoverOpen",
      "x-init": "setTimeout(function(){ popoverHeightCalculate(); }, 100);",
      "x-trap.inert": "popoverOpen",
      "@click.away": "popoverOpen=false;",
      "@keydown.escape.window": "popoverOpen=false",
      ":class":
        "{ 'top-0 mt-12' : popoverPosition == 'bottom', 'bottom-0 mb-12' : popoverPosition == 'top' }",
      "x-cloak": "",
      class: cn(["absolute -translate-x-[50%] left-[50%] w-[300px]", p.class]),
    },
    div(
      {
        class:
          "border-border p-4 bg-background rounded-xl border shadow w-full",
        "x-ref": "popoverInner",
        "x-show": "popoverOpen",
        "x-transition": "",
      },
      ...children
    )
  );
}
