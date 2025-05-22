import React, { useState } from "react"
import { Link } from "react-router-dom"
import Text from "../components/text"
import "../styles/mobile-bar.css"
import Btn from "../components/btn"

const MobileBar = ({ year }) => {
  const [display, setDisplay] = useState(false)

  const handleToggle = () => {
    setDisplay((prev) => !prev)
  }

  return (
    <nav className={display ? "nav-active" : "nav"}>
      <Btn className="display-btn" onClick={handleToggle} />
      <Text text="F1 App" />
      <Link className={display ? "bar-btn-active" : "bar-btn"} to="/" onClick={handleToggle}>Home</Link>
      <Link className={display ? "bar-btn-active" : "bar-btn"} to="/current/races" onClick={handleToggle}>{year} Season</Link>
      <Link className={display ? "bar-btn-active" : "bar-btn"} to="/seasons" onClick={handleToggle}>Previous Seasons</Link>
    </nav>
  )
}

export default MobileBar
