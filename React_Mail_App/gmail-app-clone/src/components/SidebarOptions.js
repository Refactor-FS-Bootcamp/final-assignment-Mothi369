import React from 'react'
import "./SidebarOptions.css"

const SidebarOptions = ({Icon,title,number,isactive}) => {
  return (
    <div className={`sidebarOptions ${isactive && `sidebarOptions--active`}`}>
        <Icon/>
        <h3>{title}</h3>
        <p>{number}</p>
    </div>
  )
}

export default SidebarOptions