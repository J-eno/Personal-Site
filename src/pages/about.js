import React, {useRef, useEffect} from "react"
import PropTypes, { func } from "prop-types"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import myFace from "../images/my-face.jpg"
import appaHat from "../images/appa-hat.jpg"

export default function AboutUs({data}) {
  const appaRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      console.log(appaRef.current);
      appaRef.current.classList.add("off");
    },1500)
  })
  console.log(data);
  return (
    <Layout>
      <div className="columns is-justify-content-center is-vcentered">
            <div className="column is-4">
              <figure className="image 2by3 about-us-img">
                <img src={myFace} alt="Joel" className="num-1"/>
                <img ref={appaRef} src={appaHat} alt="appaHat" className="num-2"/>
              </figure>
            </div>
            <div className="column is-5 has-text-left-tablet is-size-4">
              {data.allMarkdownRemark.edges.map(({node}) => (
                <div key={node.id} dangerouslySetInnerHTML={{__html: node.html}}>
                </div>
              ))}
            </div>
          </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
          }
          html
        }
      }
    }
  }
`