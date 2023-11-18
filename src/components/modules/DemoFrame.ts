import {Card} from "@/components/Card";
import {div, escHtml, button, iframe} from "structr-composer";

export default function DemoFrame() {
  return div(
    {
      "x-data": `{
    selectedExample: 'Cards',
    getSelectedSource() {
      const id = this.selectedExample;
      const example = this.examples.filter(({id:exampleId})=> exampleId === id);
      return example[0];
    },
    examples: [{
      id: 'Cards',
      title: 'Cards',
      src: 'https://eos-ui-example.deno.dev/example/cards',
    },{
      id: 'Authentication',
      title: 'Authentication',
      src: 'https://eos-ui-example.deno.dev/example/login',
    },{
      id: 'Portfolio',
      title: 'Portfolio',
      src: 'https://blaise.deno.dev/',
    }]
  }`,
    },
    div(
      {class: "overflow-auto hide-scrollbar"},
      div(
        {class: "flex space-x-6 w-full py-4 justify-start -ml-4"},
        escHtml`<template x-for="example in examples">
        ${button(
          {
            ":class":
              "{'text-muted-foreground': selectedExample !== example.id}",
            class: "p-0 text-md font-medium hover:underline",
            "@click": "selectedExample = example.id",
            "x-text": "example?.title",
            variant: "link",
            size: "lg",
          },
          escHtml``
        )}
      </template>`
      )
    ),
    Card(
      {
        class: "h-screen p-0 w-full overflow-hidden relative animate-fadeIn1",
        "x-show": "Boolean(selectedExample)",
      },
      div({class: "h-full w-full bg-muted animate-pulse absolute top-0"}),
      iframe({
        class:
          "text-muted-foreground text-xl h-full w-full text-center overflow-hidden hide-scrollbar z-10 absolute",
        ":title": "getSelectedSource()?.title",
        ":src": "getSelectedSource()?.src",
      })
    )
  );
}
