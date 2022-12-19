import React from "react";

function MessageHistory({ list, styleFloat }) {
  
  
  
  return (
    <ul>
      {list.map((item) => ( 
        <li key={item.id} id={item.id} className="clearfix">
          <div className="message-data align-right">
            <span className="message-data-time">{item.time}</span>    
            <span className="message-data-name">{item.from.name}</span>
            <i className="fa fa-circle me"></i>
          </div>
          <div className="message other-message float-right">
            {item.text}
          </div>
        </li>
        // styleFloat(item.type)
      ))}
    </ul>
  )  
}

export default MessageHistory;