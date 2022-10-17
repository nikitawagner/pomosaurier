import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";

export default function Alter({ show, setShow }) {
  if (show) {
    return (
      <Alert variant="dark" onClose={() => setShow(false)} dismissible>
        <p>
          Be aware that notifications might not show up if you minimize your
          browser. It is recommended to just open your other Apps above this
          browser without minimizing this browser.
        </p>
      </Alert>
    );
  }
}
