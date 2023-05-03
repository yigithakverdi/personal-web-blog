import * as React from 'react'
import Sidebar from '/src/components/sidebar'
import {
  container,
  heading,
  mainContent
} from '/src/css/layout.module.css'


const Layout = ({ pageTitle, children }) => {
  return (

    <div className={container}>
      <Sidebar />
      <div className={mainContent}>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </div>
    </div>
  )
}

export default Layout

