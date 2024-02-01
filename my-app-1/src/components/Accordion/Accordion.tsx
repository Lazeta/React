import AccordionBody from "./AccordionBody";
import AccordionTitle from "./AccordionTitle";

type AccordionPropsType = {
  // title: ReactNode;
  titleValue: string
}

function Accordion(props:AccordionPropsType) {
  return (
    <div>
      ---{props.title}---
      <AccordionTitle title={props.titleValue} />
      <AccordionBody />
    </div>
  );
}

export default Accordion;