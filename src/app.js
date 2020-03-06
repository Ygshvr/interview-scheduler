import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";

function InterviewScheduler() {
  return (
    <div>
      <Header />
    </div>
  );
}

let root = document.getElementById("root");

ReactDOM.render(<InterviewScheduler />, root);
