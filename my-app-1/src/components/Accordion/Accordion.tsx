export function Accordion() {
    return <div>
      <AccordionTitle/>
      <AccordionBody/>
      <h3>Menu</h3>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  }
  
function AccordionTitle() {
    return (
        <>
            console.log('Rendering AccordionBody')
        </>
    )
  }
  
function AccordionBody() {
    return (
        <>
            console.log('Rendering AccordionBody')
        </>
    )
  }