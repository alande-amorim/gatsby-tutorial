import React from "react"
import NavBar from "./NavBar"
import Footer from "./Footer"
import "./layout.css"

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
