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
    return (
    <div>{data.social.github}</div>
    )
    
}
export default Social;

