import React from "react";
import { NavLink } from "react-router-dom";
import DATA from "./Data";
export default function Product() {
  const cardItem=(item)=>{
    return(
    <>
    
    <div className="card my-5 py-4" key={item.id} style={{ width: "18rem" }}>
                <img
                  src={item.image}
                  className="card-img-top"
                  alt="carProduct"
                />

                <div className="card-body">
                  <h5 className="card-title">{item.Name}</h5>
                  <h4 className="card-text">
                    price : {item.price}$
                  </h4>
                  <NavLink to={`/products/${item.id}`} className="btn btn-primary">
                    Rent now
                  </NavLink>
                </div>
              </div>
    </>
    )
  }
  
  return (
    <>
      <div className="container py-5">
        
      <div className="row">
        <div className="col-12 text-center">
          <h1>cars</h1>

        </div>

      </div>
        </div>
        <div className="container">
          <div className="row justify-content-around">
            {DATA.map(cardItem)}
          </div>

        </div>
      
    </>
  );
}
