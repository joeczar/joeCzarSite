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
  const handleShowDownloads = e => {
    console.log("handleShowDownloads", { currentTarget: e.currentTarget })
    if (e.currentTarget.id === "downloads") {
      setTimeout(() => {
        setShowDownloads(!showDownloads)
      }, 300)
    }
  }
  return (
    <div className={styles.container}>
      {showDownloads ? (
        <div className={styles.downloads} id="tooltip">
          <a
            href={`Joe_Czarnecki_Web_Developer_2022.pdf`}
            className={styles.downloadLink}
          >
            <span className={styles.downloadTitle}>English</span>
          </a>
          <span>|</span>
          <a
            href={`Joe_Czarnecki_Web_Developer_2022_Deutsch.pdf`}
            className={styles.downloadLink}
          >
            <span className={styles.downloadTitle}>Deutsch</span>
          </a>
        </div>
      ) : (
        <div className={styles.downloadPlaceholder} />
      )}
      <div className={styles.iconWrapper}>
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
            onPointerDown={e => handleShowDownloads(e)}
            className={styles.links}
            id="downloads"
          >
            <AiOutlineFilePdf className={styles.socialIcons} />
          </div>
        </IconContext.Provider>
      </div>
    </div>
  )
}
export default Social
