import React from "react"
import BooksList from "../components/BooksList"
import SearchForm from "../components/SearchForm"
import styles from "../style/Home.module.css"

const Home = () => {
    return (
        <div className={styles["container"]}>
            <SearchForm />
            <BooksList />
        </div>
    )
}

export default Home