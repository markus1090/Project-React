import React from "react"
import { Link } from 'react-router-dom'
import styles from "../style/SingleBook.module.css"

const SingleBook = ({title, authors, imageLinks, id}) => {
    return (
        <div className={styles["singleBook"]}>
            <div className={styles["title"]}>
                <h2>Title:</h2>
                <p>{title}</p>
            </div>
            <div className={styles["imageBook"]}>
                <h3>Thumbnail:</h3>
                <img src={imageLinks && imageLinks.thumbnail} alt="Not available" />
            </div>
            <div className={styles["authors"]}>
                <h3>Authors:</h3>
                <p>{authors || "Authors not available"}</p>
            </div>
        
            <Link to={`/book/${id}`} className={styles["link"]}>
                Details
            </Link>  
        </div>
    )
}

export default SingleBook