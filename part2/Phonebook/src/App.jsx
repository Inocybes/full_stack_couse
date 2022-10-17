import "./App.css";

import React from 'react'
import { useState } from "react";

const App = () => {

  const [name, setName] = useState([{ name: "Arto Hellas" }]);

  console.log();

  return (
    <div className="container">
    {name}
    </div>
  )
}

export default App