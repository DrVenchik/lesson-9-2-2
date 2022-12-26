import React, { useEffect, useRef } from "react";

function MessageHistory({ list, styleFloat }) {
  const ulRef = useRef();



  function getAlign(el){
    if(el.type === "response") {
      let nameClassForRespons = "message-data align-right";
      return nameClassForRespons
    } else if(el.type === "message") {
      let nameClassForMassege = "message-data";
      return nameClassForMassege
    } else if(el.type === "typing") {
      let nameClassForTyping = "message-data";
      return nameClassForTyping
    }
  };

  function getAlignText(el){
    if(el.type === "response") {
      let nameClassTextRespons = "message other-message float-right";
      return nameClassTextRespons
    } else if(el.type === "message" || el.type === "typing") {
      let nameClassTextMassege = "message other-message";
      return nameClassTextMassege
    } 
  };
    
  
  useEffect(() => {
    console.log(ulRef.current.childNodes)
  }, [])
  
  return (
    <ul ref={ulRef}>
      {list.map((item) => ( 
        <li key={item.id} id={item.id} className={item.type}>
          <div className={getAlign(item)}>
            <span className="message-data-time">{item.time}</span><br/>    
            <span className="message-data-name">{item.from.name}</span>
            <i className="fa fa-circle me"></i>
          </div>
          <div className={getAlignText(item)}>
            {item.text}
          </div><br/>
        </li>
        // styleFloat(item.type)
      ))}
    </ul>
  )  
}

export default MessageHistory;