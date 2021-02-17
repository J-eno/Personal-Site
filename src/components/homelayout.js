import React from "react"
import { Link } from "gatsby"
import { FaGithub } from "react-icons/fa"

import myFace from "../images/my-face.jpg"

import "fontsource-exo-2"
import "./base.scss"
import Hero from "./hero"

export default function HomeLayout({ children }) {
  return (
    <div className="homepage">
      <Hero />
      <section className="section about" id="about">
        <div className="container has-text-centered	">
          <p className="title">About</p>
          <div className="columns is-justify-content-center is-vcentered">
            <div className="column is-3">
              <figure className="image is-square">
                <img
                  src={myFace}
                  alt="Joel"
                  style={{ objectFit: "cover" }}
                  className="is-rounded"
                />
              </figure>
            </div>
            <div className="column is-5 has-text-left-tablet">
              I'm a {get_my_age()} year old developer out of Maryland working
              most recently as a Frontend Developer.
              <br />
              My career interests include Game Development, Frontend
              Development, and Learning new things.
            </div>
          </div>
          <button className="button is-danger is-large is-outlined">
            Read More &rarr;
          </button>
        </div>
      </section>

      <section className="section projects">
        <div className="container">
          <p className="title has-text-centered	">Projects</p>
        </div>
      </section>

      <section className="section">
        <div className="container has-text-centered	">
          <p className="title">Keep Up With Me</p>
          <span className="icon">
            <FaGithub />
          </span>
        </div>
      </section>
      <div class="notification is-warning" style={{position: "fixed", bottom: 0, right: 0}}>
        <button class="delete disclaimer" onClick={() => {
          const delButton = document.querySelector(".delete.disclaimer");
          console.log(delButton);
          delButton.parentNode.parentNode.removeChild(delButton.parentNode);
        }}></button>
        This site is still a <strong>Under Construction</strong>, and thus will be missing features, pages, content, and styling.
      </div>
    </div>
  )
}

const get_my_age = () => {
  let my_dob = new Date(1996, 8)
  let today = new Date()
  var age_now = today.getFullYear() - my_dob.getFullYear()
  var m = today.getMonth() - my_dob.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < my_dob.getDate())) {
    age_now--
  }
  return age_now
}
