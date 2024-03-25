import React from 'react'
import "./Logo.css"
import Prologis from "../../assets/prologis.png"
import Tower from "../../assets/tower.png"
import Equinix from "../../assets/equinix.png"
import Reality from "../../assets/realty.png"
const Logo = () => {
  return (
    <div className="logo Container">
        <img src={Prologis} alt="" />
        <img src={Tower} alt="" />
        <img src={Equinix} alt="" />
        <img src={Reality} alt="" />
    </div>
  )
}

export default Logo