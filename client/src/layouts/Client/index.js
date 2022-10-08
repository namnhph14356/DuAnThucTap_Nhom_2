import React from 'react'
import Navbar from './Header/Navbar'
const ClientLayout = ({children}) => {
  return (
    <div> 
        <Navbar />
        <div>
        {children}
        </div>
    </div>
  )
}

export default ClientLayout