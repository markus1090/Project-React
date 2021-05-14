import React from "react"
import { useGlobalContext } from '../store/context'
import SingleBook from "./SingleBook"
import Loading from './Loading'
import styles from "../style/BooksList.module.css"

const BooksList = () => {
    const { book, loading, searchBook } = useGlobalContext();
    
    if (loading) {
        return (
            <Loading />
        )
    }
    if (!searchBook) {
        return null
    }
    if (book.length === 0) {
        return <h1>There are no books to display</h1>
    }

    return (
        <div className={styles["containerList"]}>
            {book.map((item) => {
            return (
                <SingleBook key={item.id} {...item}/>
            )
        })}</div>
    )
}

export default BooksList