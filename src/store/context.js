import React, { useState, useContext, useEffect } from 'react'
import axios from "axios" 
import Error from "../pages/Error"

const AppContext = React.createContext()

const urlTitle = "https://www.googleapis.com/books/v1/volumes?q=intitle:"
const urlAuthor = "https://www.googleapis.com/books/v1/volumes?q=inauthor:" 
const urlPublisher = "https://www.googleapis.com/books/v1/volumes?q=inpublisher:"
let url;

const AppProvider = ({children}) => {
  const [loading, setLoading] = useState(false);
  const [searchBook, setSearchBook] = useState("");
  const [book, setBook] = useState([]);
  const [choose, setChoose] = useState("title");

  useEffect(() => {
    const checkUrl = () => {
      switch (choose) {
        case "title":
          url = urlTitle;
          break
        case "authors":
          url = urlAuthor;
          break
        case "publisher":
          url = urlPublisher;
        break
        default:
          url = "https://www.googleapis.com/books/v1/volumes?q=intitle:"
          break
      }
      return url 
    }
    checkUrl()
  }, [choose])
  
  useEffect(() => {
    const promise = () => {
      setLoading(true);
      try {
        axios.get(`${url}${searchBook}`).then(res => {
          const {items} = res.data;
          if (items) {      
            const newBooks = items.map((item) => {
              const { 
                id,
                volumeInfo: {
                  imageLinks,
                  title,
                  authors,   
                }
              } = item;      
              return {
                id, 
                imageLinks, 
                title, 
                authors, 
              }      
            })
            setBook(newBooks);
          } else {
            setBook([]);
          } 
          setLoading(false);
        })
      }
      catch (error) {
        console.log(error)
        setLoading(false)
        return <Error value={error.status}/>
      } 
    }
    promise()
  },[searchBook])
   
  return (
    <AppContext.Provider value={{ book, loading, setLoading, searchBook, setSearchBook, choose, setChoose }}>
      {children}
    </AppContext.Provider>
  )
} 

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
            
           
