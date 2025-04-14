import React from 'react'
import './Left.css';
const Left = () => {
  return (
    <>
        <div className="left-main-p">
            <div className="icon-a-text-main">
                 <i className="ri-fire-fill"></i>
                <span className="first-left-main">
                    New Arrival To Day
                </span>
            </div>
            
            <span className="second-left-main">
                 - V12 Vantage 
            </span>
            <span className="third-left-main">
            You can order your new top-model Maserati in three forms, coupé, convertible and Xtreme for racing circuits only.
            </span>
            <div className="end-left-main">
                <button className='btn-left-main'>Submit To Dealer </button>
                <button className='btn-left-main-2'>Explore</button>
            </div>

        </div>
    </>
  )
}

export default Left