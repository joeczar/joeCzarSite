import React from 'react'
import { useStaticQuery, graphql } from "gatsby"


const Social = () => {
    const data = useStaticQuery(graphql`
      query SocialQuery {
        site {
          siteMetadata {
            author {
              name
              summary
            }
            social {
              twitter
              github
            }
          }
        }
      }
    `)
    console.log(data);
    return (
        <div>Social!</div>
    )
    
}
export default Social;

