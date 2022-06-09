import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FiGithub, FiLinkedin } from "react-icons/fi"
import { AiOutlineFilePdf } from "react-icons/ai"
import { IconContext } from "react-icons"
import styles from "./social.module.css"

const Social = () => {
  const data = useStaticQuery(graphql`
    query SocialQuery {
      site {
        siteMetadata {
          social {
            github
            linkedIn
          }
        }
      }
    }
  `)
  const social = data.site.siteMetadata.social
  const [showDownloads, setShowDownloads] = useState(false)
  const handleShowDownloads = () => {
    setTimeout(() => {
      setShowDownloads(!showDownloads)
    }, 200)
  }
  return (
    <div className={styles.container}>
      <IconContext.Provider value={{ className: "socialIcons" }}>
        <a
          href={social.github}
          className={styles.links}
          style={{ textDecorationColor: "black", border: "none" }}
        >
          <FiGithub className={styles.socialIcons} />
        </a>
        <a href={social.linkedIn} className={styles.links}>
          <FiLinkedin className={styles.socialIcons} />
        </a>
        <div
          onPointerDown={() => handleShowDownloads()}
          className={styles.links}
        >
          <AiOutlineFilePdf className={styles.socialIcons} />
          {showDownloads && (
            <div className={styles.downloads}>
              <a target="_blank" href={`Joe_Czarnecki_Web_Developer_2022.pdf`}>
                <span className={styles.downloadTitle}>English</span>
              </a>
              <span>|</span>
              <a
                target="_blank"
                href={`Joe_Czarnecki_Web_Developer_2022_Deutsch.pdf`}
              >
                <span className={styles.downloadTitle}>Deutsch</span>
              </a>
            </div>
          )}
        </div>
      </IconContext.Provider>
    </div>
  )
}
export default Social
