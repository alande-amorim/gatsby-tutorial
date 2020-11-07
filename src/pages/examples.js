import React from "react"
import Layout from "../components/Layout"
import Header from "../examples/HeaderStatic"
import { graphql } from "gatsby"
export default function examples({ data }) {
  const {
    site: {
      info: { author },
    },
  } = data

  return (
    <Layout>
      <h1>Examples Page</h1>
      <h5>{author}</h5>
      <Header />
    </Layout>
  )
}

export const data = graphql`
  query CustomQuery2 {
    site {
      info: siteMetadata {
        title
        description
        author
        data
        person {
          name
          age
        }
      }
    }
  }
`
