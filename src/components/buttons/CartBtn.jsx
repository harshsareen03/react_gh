import React from 'react'
import { NavLink } from 'react-router-dom'

export default function CartBtn() {
  return (
    <>
    <div >
        <NavLink to="/cart" className="btn btn-warning">
        <span className="fa fa-shopping-cart me-1">cart</span>
            </NavLink>

    </div>
    </>
  )
}
