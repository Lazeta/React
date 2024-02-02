import React from "react";
import AccordionBody from "./AccordionBody";
import AccordionTitle from "./AccordionTitle";

type AccordionPropsType = {
  titleValue: string
  collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
if (props.collapsed === true){
    return (
      <div>
        <AccordionTitle title={props.titleValue} />
      </div>
    );
  } else {
    return (
      <div>
        <AccordionTitle title={props.titleValue} />
        <AccordionBody bodyValue={3}/>
      </div>
    );
  }
}

export default Accordion;