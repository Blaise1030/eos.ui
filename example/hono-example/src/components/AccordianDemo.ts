import {div, escHtml} from "structr-composer";
import {
  AccordianTrigger,
  AccordianContent,
  AccordianItem,
  Accordian,
} from "./Accordian";

export function AccordianDemo() {
  return div(
    {"x-data": "{accordian:''}", class: "w-[70%]"},
    Accordian(
      {value: "accordian"},
      AccordianItem(
        {id: "1"},
        AccordianTrigger(escHtml`Is it accessible?`),
        AccordianContent(
          escHtml`Yes. It adheres to the WAI-ARIA design pattern.`
        )
      ),
      AccordianItem(
        {id: "2"},
        AccordianTrigger(escHtml`Is it styled?`),
        AccordianContent(
          escHtml`Yes. It comes with default styles that matches the other components' aesthetic.`
        )
      ),
      AccordianItem(
        {id: "3"},
        AccordianTrigger(escHtml`Is it animated?`),
        AccordianContent(
          escHtml`Yes. It's animated by default, but you can disable it if you prefer.`
        )
      )
    )
  );
}
