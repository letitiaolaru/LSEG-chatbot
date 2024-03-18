import React from "react";
import { Send } from "react-bootstrap-icons";

/*
This is a footer component for the chat window.
It will be displayed at the bottom of the chat window.
 */
const ChatFooter = () => {
  return (
    <div 
      className="d-flex flex-row gap-2
        position-fixed bottom-0 w-100 justify-content-between
        align-items-center p-2 border-top border-2 border-dark border-bottom"
      style={{
        backgroundColor: "#EDEDEE",
      }}
    >
      <span className="text-muted px-3">
        Please pick an option.
      </span>
      <span className="text-muted px-3">
        <Send size={25} />
      </span>
    </div>
  );
}

export default ChatFooter;