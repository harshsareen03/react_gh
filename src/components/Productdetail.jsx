import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import DATA from './Data'

export default function Productdetail() {
  const [cartBtn,setCartBtn]=useState("Add to cart")
  const proid =useParams()
  const proDetail=DATA.filter(x=>x.id==proid.id)
  const Product=proDetail[0]
console.log(Product)


  const handlecart=(Product)=>{
    if(cartBtn==="Add to cart"){
      setCartBtn("Remove Cart")
    }
    else{
      setCartBtn("Add to cart")
    }
  }
  return (
    <>
      <div className="conatiner my-5 py-3" >
  <img src={Product.image} className="card-img-top" height="500" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{Product.Name}</h5>
    <p className="card-text">Price:{Product.price} $</p>
    <p className="card-text">Horsepower:{Product.Horsepower} Kw</p>
    <p className="card-text">Weight_in_lbs:{Product.Weight_in_lbs} lbs</p>
    <p className="card-text">Origin:{Product.Origin}</p>
  </div>
</div>
      <button className="btn btn-warning"onClick={()=>handlecart(Product)}>{cartBtn}</button>


    </>
  )
}
