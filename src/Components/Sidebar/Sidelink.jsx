import React from "react";

function Sidelink(props) {
  // console.log(props.id)
  // console.log(props.category===props.id)
  return (
    <div className={`side-link ${props.category===props.id?"active":""}`} onClick={()=>props.changeCategory(props.id)}>
      <img src={props.img} alt="" />
      <p>{props.name.slice(0,10)}{props.name.length>10 ?"...":''}</p>
    </div>
  );
}

export default Sidelink;
