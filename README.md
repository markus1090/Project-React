<img src="./src/imagesREADME/Title.png">

<details open="open">
  <summary>Contents</summary>
  <ol>
    <li><a href="#description">Description</a></li>
    <li><a href="#how-it-works">How it works</a></li>
    <li><a href="#css">CSS</a></li>
    <li><a href="#code">Code</a></li>
    <li><a href="#contacts">Contacts</a></li>
  </ol>
</details>

## Description
Web app developed in React, that allows receiving all information about books, with the use of API Google Books: <a>https://developers.google.com/books/docs/v1/using</a>

## How it works
You can search your favorite book by:
* Title,
* Authors,
* Publisher.

Then you can get more details clicked on link details on the bottom of the single book.

Results will appear below the form:

<img src="https://media.giphy.com/media/XWcCrb3HSbamcTy7Ft/giphy.gif">

## CSS
The web app is completely responsive with the use of media query.

## Code 
In this project, I have used React.js with the follow tecnology:
* React Router, to make multipage web app:

```javascript
function App() {
  return (
  <Router>
    <NavBar />
      <Switch>
        <Route exact path = "/">
          <Home />
        </Route>
        <Route path = "/about">
          <About />
        </Route>
        <Route path = "/book/:id">
          <Book />
        </Route>
        <Route path = "*">
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}
```

* Axios provides a simple to use library in a small package with a very extensible interface:
```javascript
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
        return <Error />
    }
}
```

* React Hooks, a recent tecnology,
* Context API, to pass data through the component tree.

## Contacts
Marco Borea - [Linkedin](https://www.linkedin.com/in/marco-borea-431927206/)

Link Project GitHub: https://github.com/markus1090/Project-React 

Link Project Netlify: https://affectionate-lovelace-ffc4d9.netlify.app
