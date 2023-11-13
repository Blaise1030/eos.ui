import {HtmlEscapedString, a, button} from "structr-composer";
import {cva} from "class-variance-authority";
import cn from "@/components/utils/cn";

export default function Button(
  props: {[x: string]: string} & {
    href?: string;
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
    variant?:
      | "default"
      | "destructive"
      | "outline"
      | "secondary"
      | "ghost"
      | "link"
      | undefined;
  },
  ...children: HtmlEscapedString[]
) {
  const buttonVariant = buttonVariants({
    variant: props?.variant,
    size: props?.size,
  });
  const attributes = {
    ...props,
    class: cn([buttonVariant, props?.class]),
  } as {[x: string]: string};

  if (Boolean(props?.href)) return a(attributes, ...children);
  return button(attributes, ...children);
}

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:select-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
