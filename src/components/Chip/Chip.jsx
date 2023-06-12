import React from "react"
import "./Chip.css"

export function Chip({ label = "", isActive = false, onClick = () => { }, handleClose = () => {} }) {

  let buttonClassname; 

  if (isActive) {
    buttonClassname = "chip active"
  } else {
    buttonClassname = "chip"; 
  }

  return (
    <button onClick={onClick} className={buttonClassname}>
      <p className="label">{label}</p>
      <span className="close" role="button" onClick={(e) => {
        if (isActive) {
          handleClose(); 
        }
      }}>{`X`}</span>
    </button>
  )
}

export default Chip
