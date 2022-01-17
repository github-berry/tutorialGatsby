import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query FirstQuery {
    site {
      info: siteMetadata {
        author
        description
        simpleData
        title
        complexData {
          name
          age
        }
        person {
          name
          age
        }
      }
    }
  }
`

const FetchData = () => {
  // const data = useStaticQuery(getData)
  const {
    site: {
      info: { title },
    },
  } = useStaticQuery(getData)
  return (
    <div>
      <h2>site title is : {title}</h2>
      {/* <h2>Name: {data.site.info.person.name}</h2> */}
    </div>
  )
}

export default FetchData

// import React from "react"
// import { useStaticQuery, graphql } from "gatsby"

// const ComponentName = () => {
//   const data = useStaticQuery(graphql`
//     {
//       site {
//         siteMetadata {
//           author
//           description
//           simpleData
//           title
//           complexData {
//             name
//             age
//           }
//           person {
//             name
//             age
//           }
//         }
//       }
//     }
//   `)
//   // return <pre>{JSON.stringify(data, null, 4)}</pre>
//   return <div>
//     <h2>{data.site.siteMetadata.person.name}</h2>
//     <div>
//       {data.site.siteMetadata.complexData.map((item,index)=>{
//         return <p key={index}>
//           {item.name} : {item.age}
//         </p>
//       })}
//     </div>
//   </div>
// }

// export default ComponentName
