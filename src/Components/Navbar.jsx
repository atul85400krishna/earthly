import React from 'react'
import style from "../styles/navbar.module.css"
export const Navbar = () => {
  return (
    <div className={style.navbar}>
    <div>
    <img src="https://static.wixstatic.com/media/ead566_2c378f27d33a419d8c532250cf2f0d51~mv2.png/v1/fill/w_99,h_94,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Earthly%20Logo_edited.png" />
    </div>

  <div className={style.mid}>
    <h2>earthly</h2>
    <p>Sustainable products at affordable prices</p>
  </div>

  <div className={style.last}>
    <p>Home</p>
     <p>Shop</p>
     <button>Get in touch</button>
  </div>
    </div>
  )
}
