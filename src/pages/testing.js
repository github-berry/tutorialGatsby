import React from "react"
// import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Gallery from "../examples/Gallery"

const Testing = ({ data }) => {
  // const author = data.site.info.author
  return (
    <Layout>
      <main className="page">
        <Gallery />
      </main>
    </Layout>
  )
}

// export const data = graphql`
//   query {
//     site {
//       info: siteMetadata {
//         author
//         description
//         simpleData
//         title
//         complexData {
//           name
//           age
//         }
//         person {
//           name
//           age
//         }
//       }
//     }
//   }
// `
export default Testing
