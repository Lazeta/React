import React from "react";

function Rating() {
    console.log("Rating rendering")
  return (
    <div>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={false}/>
        <Star selected={false}/>
        <Star selected={false}/>
    </div>
  )
}

function Star(props: any) {
    console.log("Star rendering");
    // debugger
    if (props.selected === true) {
        return <span><b>star</b> </span>;
    } else {
        return <span>star </span>;
    }
}

export default Rating;
