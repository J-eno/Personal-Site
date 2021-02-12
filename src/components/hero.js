import React from "react"

import Navbar from "./navbar"

export default function Hero() {
  return (
    <section className="hero is-primary is-fullheight-with-navbar">
      <Navbar />
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Hi, I'm Joel. <br/> I love to Code. Wow. Coding is fun</h1>
          <p className="subtitle">If Statements, For Loops, wow. Love it.</p>
        </div>
      </div>
    </section>
  )
}
