import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query CustomQuery {
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
export default () => {
  const {
    site: {
      info: {
        person: { name, age },
      },
    },
  } = useStaticQuery(getData)

  return (
    <div>
      <h1>examples</h1>
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
    </div>
  )
}
