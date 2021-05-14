import React, { useState, useEffect } from "react" 
import { Link, useParams } from 'react-router-dom'
import { useGlobalContext } from '../store/context'
import axios from "axios" 
import Loading from "../components/Loading"
import Error from "./Error"
import styles from "../style/Book.module.css"

const url = "https://www.googleapis.com/books/v1/volumes?q=id:";

const Book = () => {
    const { id } = useParams();
    const { loading, setLoading } = useGlobalContext();
    const [ singleBook, setSingleBook ] = useState([]);
    
    useEffect(() => {
        setLoading(true);
        const searchById = () => {
            try {
                axios.get(`${url}${id}`).then(res => {
                    const {items} = res.data;
                    if (items) {
                        const { 
                            volumeInfo: {
                                imageLinks,
                                title,
                                subtitle,
                                authors,
                                description,
                                categories,
                                pageCount,
                                language,
                                publisher,
                                publishedDate, 
                            }
                        } = items[0];
                        const singleBook = {
                            imageLinks,
                            title,
                            subtitle,
                            authors,
                            description,
                            categories,
                            pageCount,
                            language,
                            publisher,
                            publishedDate, 
                        }
                        setSingleBook(singleBook);
                    } else {
                        setSingleBook(null);
                    }  
                    setLoading(false);
                })   
            } catch (error) {
                setLoading(false);
                console.log(error);
                return <Error value={error.status}/>
            }
        } 
        searchById()
    }, [id, setLoading])

    if (loading) {
        return <Loading />
    }

    if (!singleBook) {
        return (
            <div>
                <h1>there are no books to display</h1>
                <Link to="/" className={styles["link"]}>
                    Back home
                </Link>
            </div>
        )
    }

    const {
        imageLinks, 
        title, 
        subtitle, 
        authors, 
        description, 
        categories, 
        pageCount, 
        language, 
        publisher, 
        publishedDate
    } = singleBook;  
      
    return (
        <section className={styles["containerDetails"]}>
            <div className={styles["details"]}> 
                <div className={styles["title"]}>
                    <h2>{title}</h2>
                </div> 
                <div className={styles["mainDetails"]}>
                    <div>
                        <h3>Authors:</h3>
                        <p>{authors || "-"}</p>

                        <h3>Publisher:</h3>
                        <p>{publisher || "-"}</p>
            
                        <h3>Publisher Date:</h3>
                        <p>{publishedDate || "-"}</p> 
                    </div>  
                    <div>
                        <img src={imageLinks && imageLinks.thumbnail} alt="Not available"/>
                    </div>    
                </div>
                <div className={styles["description"]}>
                    <h3>Description:</h3>
                    <p>{description || "-"}</p>
                </div>   
                <div className={styles["mainDetails2"]}>
                    <div>
                        <h3>Subtitle:</h3>
                        <p>{subtitle || "-"}</p>
               
                        <h3>Categories:</h3>
                        <p>{categories || "-"}</p>
                    </div>
                    <div>
                        <h3>Page Count:</h3>
                        <p>{pageCount || "-"}</p>
                
                        <h3>Language:</h3>
                        <p>{language || "-"}</p>    
                    </div>    
                </div>
            </div>   

            <Link to="/" className={styles["link"]}>
                Back home
            </Link>
        </section>
    )
}

export default Book