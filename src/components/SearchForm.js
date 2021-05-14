import React, { useRef, useEffect } from "react"
import { useGlobalContext } from '../store/context'
import styles from "../style/SearchForm.module.css"

const SearchForm = () => {
    const { setSearchBook, choose, setChoose } = useGlobalContext();
    const search = useRef("");

    useEffect(() => {
        search.current.focus()
    }, [])

    const searchBook = () => {
        setSearchBook(search.current.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleChange = (e) => {
        const {value} = e.target;
        switch (value) {
            case "title":
                setChoose(value);
                break
            case "authors":
                setChoose(value);
                break
            case "publisher":
                setChoose(value);
                break
            default:
                break
        }
    } 
    return (
        <section className={styles["sectionForm"]}>
            <form onSubmit={handleSubmit} className={styles["formStyle"]}>
                <div className={styles["search"]}>
                    <label htmlFor="name">What are you looking for?</label>
                    <input 
                        type="text" 
                        id="name"
                        className={styles["searchInput"]} 
                        ref={search} 
                        onChange={searchBook} />
                </div>
                <div className={styles["criteria"]}>
                    <label>Witch criteria would you like to use?</label>
                    <select 
                        value={choose} 
                        onChange={handleChange}
                        className={styles["optionsCriteria"]}>
                        <option value="title">Title</option>
                        <option value="authors">Authors</option>
                        <option value="publisher">Publisher</option>
                    </select>
                </div>
            </form>
            <h1>Books:</h1>
        </section>
    )
}

export default SearchForm