import React from "react";

export default function Button({ text, extraClasses }) {
  let buttonClasses = `text-black uppercase py-2 text-base px-10 border-2 border-black rounded transition duration-500 hover:bg-white  ${extraClasses}`;

  return <button className={buttonClasses}>{text}</button>;
}
