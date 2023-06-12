import React from "react"
import "./Chip.css"

export function Chip({ label = "", isActive = true }) {

  let buttonClassname; 

  if (isActive) {
    buttonClassname = "chip active"
  } else {
    buttonClassname = "chip"; 
  }

  return (
    <button className={buttonClassname}>
      <p className="label">{label}</p>
      <span className="close" role="button">{`X`}</span>
    </button>
  )
}

export default Chip
