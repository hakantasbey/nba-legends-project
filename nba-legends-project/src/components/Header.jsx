import React from 'react'
import nbaLogo from "../assets/nba-logo.png"

const Header = () => {
  return (
    <div>
      <img src={nbaLogo} alt="" />
      <h1>NBA LEGENDS</h1>
    </div>
  )
}

export default Header