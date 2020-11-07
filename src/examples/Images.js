import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import img from "../images/desert.jpg"
import Img from "gatsby-image"

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "ocean.jpg" }) {
      childImageSharp {
        fixed(width: 700, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "desert.jpg" }) {
      id
      childImageSharp {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

const Images = () => {
  const data = useStaticQuery(getImages)
  console.log(data)
  return (
    <section className="images">
      <article className="single-image">
        <h3>Basic Image</h3>
        <img src={img} width="100%" />
      </article>
      <article className="single-image">
        <h3>Fixed Image/blur</h3>
        <Img fixed={data.fixed.childImageSharp.fixed} />
      </article>
      <article className="single-image">
        <h3>fluid Image/svg</h3>
        <Img fluid={data.fluid.childImageSharp.fluid} />
      </article>
    </section>
  )
}

export default Images
