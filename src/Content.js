import React, { useState } from "react";

export default function Content() {
  const [name, setName] = useState("dineshu");

  function handle() {
    const names = ["dinesh", "ramesh", "google"];
    const randomIndex = Math.floor(Math.random() * names.length);
    const randomName = names[randomIndex];
    setName(randomName);
  }

  return (
    <div>
      <h2 className="name-changer">Hi {name} Good Morning</h2>
      <button className="buttonchanger" onClick={handle}>LETS play</button>
    </div>
  );
}
