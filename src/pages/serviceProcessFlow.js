import React from "react"
import "./serviceProcessFlow.css"

export default function DeliveryTime() {
  return (
    
    <div className="delivery-time flex-row-vcenter-hcenter">
        
      <img
        src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/xuzb1a2trj-1838%3A4031?alt=media&token=10321b8e-29dd-412a-881e-20a927fe4a65"
        alt="Not Found"
        className="clock"
        
      />
    
      <div className="text">

        <p className="txt-8102">Booked</p>
        <p className="txt-703">15 minutos</p>
      </div>
      <div  className="dots flex-col-hcenter-vcenter">
      <div className="ellipse-5" />
      <div className="ellipse-6" />
      <div className="ellipse-7" />
    </div>
    </div>
  )
}
